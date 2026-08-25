import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "../../lib/tracker";
import { buildWhatsappUrl, CALENDLY_PATH, POS_QUESTION_MESSAGE } from "../../lib/demoCtas";
import { INITIAL_PROMPTS, CHALLENGE_PROMPT, followUpsFor, topicOf } from "./prompts";
import ConnectForm from "./ConnectForm";
import RichText from "./RichText";
import styles from "./DemoChat.module.css";

/**
 * Chat de la demo pública.
 *
 * Habla con la puerta pública de pos_bot_api (POST /api/demo/chat), que es la única que
 * conoce el secreto y fija el restaurante. Este componente NO sabe qué tenant se consulta,
 * ni manda restaurantId, ni conoce ninguna credencial: manda { sessionId, text } y nada más.
 *
 * Reglas de producto que están CODIFICADAS aquí, no sólo escritas en un doc:
 *  · NO FORM BEFORE WOW — el formulario sólo aparece si el visitante lo pide.
 *  · El nudge de conversión no bloquea: aparece una vez y el visitante puede seguir jugando.
 *  · Cero jerga: ni "capabilities", ni "LLM", ni ids internos, ni nombres de herramientas.
 */

const API_BASE = (process.env.NEXT_PUBLIC_DEMO_API_URL || "http://localhost:3357").replace(/\/+$/, "");
const SESSION_KEY = "_gs_demo_session";
/** Tras cuántas respuestas aparece (una sola vez) la invitación a conectar su restaurante. */
const NUDGE_AFTER = 3;

const GREETING = "Hola 👋\nPregúntame algo sobre el restaurante.";

/** sessionId con el formato que exige el servidor: ^[A-Za-z0-9_-]{8,64}$ */
function newSessionId() {
  const rand = Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 6);
  return `gs_demo_${Date.now().toString(36)}${rand}`;
}

function ensureSessionId() {
  if (typeof window === "undefined") return null;
  try {
    const existing = sessionStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const fresh = newSessionId();
    sessionStorage.setItem(SESSION_KEY, fresh);
    return fresh;
  } catch {
    return newSessionId(); /* modo privado: sesión efímera, no se rompe la demo */
  }
}

/**
 * Lo que viaja a analítica de una pregunta escrita a mano. NUNCA el texto crudo: alguien
 * puede teclear su teléfono o su correo en el chat, y eso no tiene por qué acabar en un
 * reporte de campaña. Se quitan correos y secuencias largas de dígitos, y se recorta.
 */
export function sanitizeQuestion(text) {
  return String(text || "")
    .replace(/[\w.+-]+@[\w-]+\.[\w.]+/g, "[correo]")
    .replace(/\d{7,}/g, "[numero]")
    .slice(0, 120);
}

export default function DemoChat({ inputRef }) {
  const [messages, setMessages] = useState([{ role: "bot", text: GREETING }]);
  const [suggestions, setSuggestions] = useState(INITIAL_PROMPTS);
  const [showChallenge, setShowChallenge] = useState(false);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(false);
  const [limitReached, setLimitReached] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [nudged, setNudged] = useState(false);

  const sessionRef = useRef(null);
  const askedRef = useRef(0);
  const threadRef = useRef(null);
  const localInputRef = useRef(null);
  const boxRef = inputRef || localInputRef;

  useEffect(() => {
    sessionRef.current = ensureSessionId();
    trackEvent("demo_chat_opened", { session_id: sessionRef.current });
  }, []);

  /* El hilo siempre muestra lo último. */
  useEffect(() => {
    const el = threadRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading, suggestions, showForm, limitReached]);

  const openLeadForm = useCallback(
    (from) => {
      trackEvent("demo_connect_restaurant_clicked", { from, questions_asked: askedRef.current });
      trackEvent("demo_lead_started", { from });
      setShowForm(true);
    },
    []
  );

  const send = useCallback(
    async (rawText, source) => {
      const text = String(rawText || "").trim();
      if (!text || loading || limitReached) return;

      const count = askedRef.current + 1;
      askedRef.current = count;

      /* Analítica: qué preguntan y cómo llegaron a preguntarlo. */
      trackEvent("demo_question_asked", {
        source,
        topic: topicOf(text),
        question: source === "suggested" ? text : sanitizeQuestion(text),
        question_number: count,
      });
      if (source === "freeform") trackEvent("demo_freeform_question", { topic: topicOf(text) });
      if (count === 2) trackEvent("demo_second_question", {});
      if (count === 3) trackEvent("demo_third_question", {});
      if (count === 5) trackEvent("demo_fifth_question", {});

      setMessages((prev) => [...prev, { role: "user", text }]);
      setSuggestions([]);
      setShowChallenge(false);
      setDraft("");
      setLoading(true);

      try {
        const res = await fetch(`${API_BASE}/api/demo/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId: sessionRef.current, text }),
        });
        const data = await res.json().catch(() => ({}));

        if (res.status === 429 && data?.code === "session_limit_reached") {
          setLimitReached(true);
          trackEvent("demo_limit_reached", { questions_asked: count });
          return;
        }

        if (!res.ok || !data?.ok || !data?.reply) {
          trackEvent("demo_chat_error", { code: data?.code || `http_${res.status}` });
          setMessages((prev) => [
            ...prev,
            {
              role: "bot",
              error: true,
              text: "Se me complicó responder eso ahora mismo. ¿Lo intentamos otra vez?",
            },
          ]);
          return;
        }

        setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
        setSuggestions(followUpsFor(text));
        setShowChallenge(true);

        if (count >= NUDGE_AFTER && !nudged) {
          setNudged(true);
          setMessages((prev) => [...prev, { role: "nudge" }]);
        }
      } catch {
        trackEvent("demo_chat_error", { code: "network" });
        setMessages((prev) => [
          ...prev,
          { role: "bot", error: true, text: "Se me fue la conexión. ¿Lo intentamos otra vez?" },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [loading, limitReached, nudged]
  );

  const onChip = (text) => {
    trackEvent("demo_suggested_prompt_clicked", { prompt: text });
    send(text, "suggested");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(draft, "freeform");
  };

  const posWhatsappUrl = useMemo(() => buildWhatsappUrl(POS_QUESTION_MESSAGE), []);

  const onWhatsapp = (from) => trackEvent("demo_whatsapp_clicked", { from });
  const onCalendly = (from) => trackEvent("demo_calendly_clicked", { from });

  return (
    <div className={styles.shell}>
      <div className={styles.header}>
        <div className={styles.avatar} aria-hidden="true">GS</div>
        <div className={styles.headerText}>
          <span className={styles.headerName}>GrowthSuite</span>
          <span className={styles.headerStatus}>
            <span className={styles.dot} aria-hidden="true" />
            Restaurante demo conectado
          </span>
        </div>
      </div>

      <div className={styles.thread} ref={threadRef} aria-live="polite">
        {messages.map((m, i) =>
          m.role === "nudge" ? (
            <div key={i} className={styles.card}>
              <div className={styles.cardTitle}>Ahora imagina hacer esto con tu propio restaurante.</div>
              <div className={styles.cardText}>Puedes seguir preguntando lo que quieras.</div>
              <div className={styles.cardActions}>
                <button type="button" className={styles.cardPrimary} onClick={() => openLeadForm("nudge")}>
                  Conectar mi restaurante
                </button>
                <a
                  className={styles.cardGhost}
                  href={posWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onWhatsapp("nudge")}
                >
                  ¿Funciona con mi POS?
                </a>
                <a className={styles.cardGhost} href={CALENDLY_PATH} onClick={() => onCalendly("nudge")}>
                  Agendar una demo
                </a>
              </div>
            </div>
          ) : (
            <div key={i} className={`${styles.row} ${m.role === "user" ? styles.rowUser : ""}`}>
              <div
                className={`${styles.bubble} ${
                  m.role === "user" ? styles.bubbleUser : m.error ? styles.bubbleError : styles.bubbleBot
                }`}
              >
                <RichText text={m.text} />
              </div>
            </div>
          )
        )}

        {loading && (
          <div className={styles.row}>
            <div className={`${styles.bubble} ${styles.bubbleBot}`}>
              <span className={styles.typing} aria-label="Escribiendo">
                <span /><span /><span />
              </span>
            </div>
          </div>
        )}

        {limitReached && (
          <div className={styles.card}>
            <div className={styles.cardTitle}>Llegaste al límite de esta demo.</div>
            <div className={styles.cardText}>¿Quieres probar GrowthSuite en tu restaurante?</div>
            <div className={styles.cardActions}>
              <button type="button" className={styles.cardPrimary} onClick={() => openLeadForm("limit")}>
                Conectar mi restaurante
              </button>
              <a
                className={styles.cardGhost}
                href={posWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onWhatsapp("limit")}
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        )}

        {!loading && !limitReached && suggestions.length > 0 && (
          <div className={styles.chips}>
            {suggestions.map((s) => (
              <button key={s} type="button" className={styles.chip} onClick={() => onChip(s)}>
                {s}
              </button>
            ))}
            {showChallenge && (
              <button
                type="button"
                className={`${styles.chip} ${styles.chipHot}`}
                onClick={() => onChip(CHALLENGE_PROMPT)}
              >
                🔥 Intenta ponerlo a prueba
              </button>
            )}
          </div>
        )}
      </div>

      {showForm ? (
        <ConnectForm onClose={() => setShowForm(false)} questionsAsked={askedRef.current} />
      ) : (
        <>
          <form className={styles.composer} onSubmit={onSubmit}>
            <input
              ref={boxRef}
              className={styles.input}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Escribe lo que quieras…"
              maxLength={300}
              disabled={loading || limitReached}
              aria-label="Escribe tu pregunta"
            />
            <button
              type="submit"
              className={styles.send}
              disabled={loading || limitReached || !draft.trim()}
              aria-label="Enviar"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
          <p className={styles.footnote}>
            Esta experiencia utiliza un restaurante demo de GrowthSuite. Integraciones con
            sistemas externos sujetas a disponibilidad.
          </p>
        </>
      )}
    </div>
  );
}
