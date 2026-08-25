import { useState } from "react";
import { trackEvent } from "../../lib/tracker";
import { buildWhatsappUrl } from "../../lib/demoCtas";
import styles from "./DemoChat.module.css";

/**
 * "Conectar mi restaurante" — captura de lead.
 *
 * DÓNDE ATERRIZA EL LEAD (decisión deliberada, ver GROWTHSUITE_PUBLIC_DEMO_DISCOVERY.md §10):
 * hoy NO existe un endpoint público que persista datos de contacto. `pos_tracking_api` sólo
 * expone `POST /api/events` (touchpoints anónimos); crear leads (`/api/conversions`) exige
 * service-token, que no puede vivir en un navegador. Inventar una base paralela para leads
 * sería exactamente el tipo de arquitectura duplicada que no queremos.
 *
 * Así que el lead viaja por el canal comercial que YA existe y que ya se atiende: el WhatsApp
 * de ventas, con las respuestas ya redactadas en el mensaje. El equipo recibe un lead
 * calificado sin backend nuevo.
 *
 * Lo que SÍ se registra en analítica: las respuestas NO personales (POS, sucursales, tema,
 * interés). El contacto que escribe el visitante NO se manda a analítica — sólo va al mensaje
 * de WhatsApp que él mismo envía.
 *
 * FALTANTE DOCUMENTADO: si se quiere persistencia server-side, el endpoint mínimo sería un
 * `POST /api/demo/lead` en pos_bot_api (mismo patrón de la puerta pública: allowlist de
 * origen + rate limit) que reenvíe a `pos_tracking_api /api/conversions` con el service-token
 * del servidor. No se construyó porque no estaba autorizado en este alcance.
 */

const POS_OPTIONS = [
  "Soft Restaurant",
  "Wansoft",
  "Fudo",
  "Toteat",
  "Parrot",
  "Oracle / Micros",
  "Otro",
  "No sé",
];

const BRANCH_OPTIONS = ["1", "2–5", "6–20", "21+"];

const TOPIC_OPTIONS = [
  "Ventas",
  "Inventario",
  "Personal",
  "Pedidos",
  "Delivery",
  "Costos",
  "Todo",
];

const INTEREST_OPTIONS = [
  "Quiero probarlo",
  "Quiero ser piloto",
  "Me interesa contratarlo si funciona",
  "Solo estoy explorando",
];

export default function ConnectForm({ onClose, questionsAsked }) {
  const [pos, setPos] = useState("");
  const [branches, setBranches] = useState("");
  const [topic, setTopic] = useState("");
  const [contact, setContact] = useState("");
  const [interest, setInterest] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!pos || !branches || !contact.trim() || !interest) {
      setError("Completa POS, sucursales, contacto e interés para continuar.");
      return;
    }
    setError("");

    /* Analítica SIN datos personales: el contacto no viaja aquí. */
    trackEvent("demo_lead_submitted", {
      pos,
      branches,
      topic: topic || "no_indicado",
      interest,
      questions_asked: questionsAsked,
    });
    if (interest === "Quiero ser piloto") {
      trackEvent("demo_pilot_interest", { pos, branches });
    }

    const message = [
      "Hola, probé la demo de GrowthSuite y quiero conectar mi restaurante.",
      `Punto de venta: ${pos}`,
      `Sucursales: ${branches}`,
      topic ? `Lo que más me interesa: ${topic}` : null,
      `Interés: ${interest}`,
      `Mi contacto: ${contact.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");

    setSent(true);
    window.open(buildWhatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  if (sent) {
    return (
      <div className={styles.formWrap}>
        <div className={styles.formTitle}>¡Listo! Te abrimos WhatsApp.</div>
        <div className={styles.formHint}>
          Si no se abrió, escríbenos por WhatsApp y con gusto seguimos por ahí. Mientras tanto
          puedes seguir preguntándole al restaurante demo.
        </div>
        <div className={styles.formActions}>
          <button type="button" className={styles.cardPrimary} onClick={onClose}>
            Seguir probando
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.formWrap} onSubmit={submit}>
      <div className={styles.formTitle}>Conectar mi restaurante</div>
      <div className={styles.formHint}>Cinco datos y te contactamos por WhatsApp.</div>

      {error && <div className={styles.formError}>{error}</div>}

      <div className={styles.field}>
        <label className={styles.label} htmlFor="demo-pos">¿Qué POS utilizas?</label>
        <select id="demo-pos" className={styles.control} value={pos} onChange={(e) => setPos(e.target.value)}>
          <option value="">Selecciona…</option>
          {POS_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="demo-branches">¿Cuántas sucursales?</label>
        <select id="demo-branches" className={styles.control} value={branches} onChange={(e) => setBranches(e.target.value)}>
          <option value="">Selecciona…</option>
          {BRANCH_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="demo-topic">
          ¿Qué te gustaría preguntarle primero a tu restaurante?
        </label>
        <select id="demo-topic" className={styles.control} value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="">Selecciona…</option>
          {TOPIC_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="demo-contact">WhatsApp o correo</label>
        <input
          id="demo-contact"
          className={styles.control}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="55 1234 5678"
          maxLength={80}
          autoComplete="tel"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="demo-interest">¿Qué tanto te interesa?</label>
        <select id="demo-interest" className={styles.control} value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option value="">Selecciona…</option>
          {INTEREST_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      <div className={styles.formActions}>
        <button type="submit" className={styles.cardPrimary}>Enviar por WhatsApp</button>
        <button type="button" className={styles.cardGhost} onClick={onClose}>Seguir probando</button>
      </div>
    </form>
  );
}
