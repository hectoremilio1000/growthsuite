import { useEffect, useRef, useState } from "react";
import { buildBookingWidgetUrl } from "../../lib/tracker";

/**
 * Embeds the pos_booking_widget en un iframe, con lead_uid + UTMs del
 * navegador del usuario inyectados como query params. Así la atribución
 * multi-touch se mantiene aunque el widget viva en otro dominio.
 *
 * Auto-redimensiona el iframe escuchando los mensajes `widget_height` que
 * postea el widget vía window.postMessage. Sin scroll interno.
 *
 * ── Qué publica al dataLayer ──────────────────────────────────────────────
 * Un solo evento, `booking_completada`, cuando el backend YA confirmó la
 * reserva (el widget sólo postea `booking_completed` después de que
 * `POST /w/:slug/book` resolvió). GTM lo convierte en el `Schedule` de Meta.
 *
 * Tres cosas que este componente garantiza y que NO son gratis:
 *
 *   1. ORIGEN. `window.message` lo puede emitir CUALQUIER página: otra pestaña,
 *      un iframe de terceros, una extensión. El campo `source: 'booking-widget'`
 *      no prueba nada — va dentro del mensaje y cualquiera lo escribe. Por eso
 *      se valida el `event.origin` contra el dominio real del widget Y el
 *      `event.source` contra la ventana de NUESTRO iframe. Sin eso, un tercero
 *      podría inyectar conversiones falsas en la cuenta de anuncios.
 *
 *   2. UNA CONVERSIÓN POR RESERVA. Que el mensaje salga después de un `await`
 *      no impide que llegue dos veces: React puede re-montar, el widget puede
 *      reintentar, y `postMessage` no tiene entrega exactamente-una-vez. Se
 *      deduplica por código de confirmación en `sessionStorage`.
 *
 *   3. EL CÓDIGO DE CONFIRMACIÓN NO SALE DE AQUÍ. `confirmationCode` es una
 *      LLAVE: con él se puede consultar y CANCELAR la reserva
 *      (`GET /api/w/:slug/reservation/:code` y `.../cancel`). No se publica al
 *      dataLayer —que cualquier script de la página puede leer— ni se manda a
 *      Meta. Lo que viaja es `booking_ref`, un identificador ALEATORIO sin
 *      relación con la reserva.
 *
 *      Y no, hashear el código no bastaba: son 8 caracteres de un alfabeto de
 *      32 (~10¹² combinaciones), que se recorren por fuerza bruta en minutos.
 *      Un hash habría parecido opaco sin serlo.
 */
const WIDGET_BASE_URL =
  process.env.NEXT_PUBLIC_BOOKING_WIDGET_URL || "http://localhost:5174";

const DEFAULT_SLUG = "growthsuite-demos";

/* Solo un piso/techo de seguridad. El widget reporta su altura real vía
 * postMessage y el iframe se ajusta a eso. */
const MIN_HEIGHT = 400;
const MAX_HEIGHT = 1800;

/** El origen del que DEBEN venir los mensajes. Null si la URL es inservible. */
function expectedOrigin() {
  try {
    return new URL(WIDGET_BASE_URL).origin;
  } catch {
    return null;
  }
}

/** Identificador opaco y aleatorio. No se deriva del código de confirmación. */
function newOpaqueRef() {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
      const b = new Uint8Array(16);
      crypto.getRandomValues(b);
      return Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
    }
  } catch {
    /* sigue al fallback */
  }
  return `r${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
}

/** Dónde se recuerdan las reservas ya reportadas, para no contarlas dos veces. */
const DEDUPE_KEY = "gs_booking_reported";

/**
 * Memoria del proceso. Es la PRIMERA línea de defensa y la única que no puede
 * fallar: `sessionStorage` lanza excepción en modo privado de algunos
 * navegadores, con las cookies de terceros bloqueadas o si la cuota está llena.
 * Si la deduplicación dependiera sólo del almacenamiento, en esos casos no
 * habría deduplicación en absoluto.
 */
const reportedInMemory = new Map();

/**
 * ALCANCE DE LA DEDUPLICACIÓN — lo que cubre y lo que no.
 *
 *   Cubre  · mensajes repetidos en la misma página (re-montaje de React,
 *            reintento del widget, doble entrega de postMessage) → Map en memoria.
 *          · recargas y navegación dentro de la MISMA pestaña → sessionStorage.
 *
 *   NO cubre · otra pestaña, otro navegador u otro dispositivo: sessionStorage
 *              es por pestaña y por origen. En la práctica no importa, porque
 *              el mensaje sólo nace de un `POST /book` exitoso: para que llegue
 *              en otra pestaña hay que volver a reservar, y eso SÍ es otra
 *              conversión.
 *            · el cierre de la pestaña borra sessionStorage; el Map muere con
 *              la página. A partir de ahí la misma reserva volvería a contarse
 *              si alguien reprodujera el mensaje a mano.
 *
 * Si el almacenamiento no está disponible, el Map en memoria sigue activo y la
 * deduplicación funciona mientras la página viva. Se degrada, no se apaga.
 */
function claimBooking(confirmationCode) {
  /* 1 · memoria: siempre disponible */
  if (reportedInMemory.has(confirmationCode)) {
    return { isFirst: false, ref: reportedInMemory.get(confirmationCode) };
  }

  /* 2 · sessionStorage: extiende la memoria a recargas de la misma pestaña */
  let seen = {};
  let storageOk = true;
  try {
    seen = JSON.parse(sessionStorage.getItem(DEDUPE_KEY) || "{}") || {};
  } catch {
    storageOk = false;
    seen = {};
  }

  if (seen[confirmationCode]) {
    /* Se vuelve a sembrar la memoria para que el MISMO booking_ref sobreviva
     * al resto de la sesión sin volver a leer el almacenamiento. */
    reportedInMemory.set(confirmationCode, seen[confirmationCode]);
    return { isFirst: false, ref: seen[confirmationCode] };
  }

  const ref = newOpaqueRef();
  reportedInMemory.set(confirmationCode, ref);

  if (storageOk) {
    seen[confirmationCode] = ref;
    try {
      sessionStorage.setItem(DEDUPE_KEY, JSON.stringify(seen));
    } catch {
      /* Cuota llena: la memoria ya tiene el ref, la dedup sigue viva en esta página. */
    }
  }
  return { isFirst: true, ref };
}

export default function BookingWidget({
  slug = DEFAULT_SLUG,
  eventTypeSlug,
  initialHeight = 560,
  maxWidth = null,
}) {
  const [src, setSrc] = useState("");
  const [height, setHeight] = useState(initialHeight);
  const iframeRef = useRef(null);

  useEffect(() => {
    const url = buildBookingWidgetUrl(WIDGET_BASE_URL, slug, eventTypeSlug, {
      maxWidth,
    });
    setSrc(url);
  }, [slug, eventTypeSlug, maxWidth]);

  /* Listen for height updates from the embedded widget (cross-origin postMessage) */
  useEffect(() => {
    const origin = expectedOrigin();

    function handleMessage(event) {
      /* ── Quién manda el mensaje: las dos comprobaciones ───────────────── */
      if (!origin || event.origin !== origin) return;
      if (!iframeRef.current || event.source !== iframeRef.current.contentWindow) return;

      /* ── Qué forma tiene ──────────────────────────────────────────────── */
      const data = event?.data;
      if (!data || typeof data !== "object") return;
      if (data.source !== "booking-widget") return;
      if (typeof data.type !== "string") return;

      if (data.type === "widget_height" && typeof data.height === "number") {
        /* SIN buffer +N — esa adición creaba un loop con el body 100% */
        const clamped = Math.max(MIN_HEIGHT, Math.min(MAX_HEIGHT, data.height));
        setHeight((prev) => (Math.abs(prev - clamped) > 4 ? clamped : prev));
      }

      if (data.type === "booking_completed") {
        const code = data.confirmationCode;
        /* Sin código no hay reserva confirmada que reportar ni con qué deduplicar. */
        if (typeof code !== "string" || code.trim() === "") return;

        const { isFirst, ref } = claimBooking(code.trim());
        if (!isFirst) return; /* mensaje repetido: una reserva, una conversión */

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "booking_completada",
          /* Opaco y aleatorio. NUNCA el confirmationCode. */
          booking_ref: ref,
          /* Contexto para que GTM distinga las demos de GrowthSuite de
           * cualquier otra reserva que este componente llegue a servir. */
          booking_slug: slug,
          booking_type: eventTypeSlug || null,
        });
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [slug, eventTypeSlug]);

  if (!src) {
    return (
      <div
        style={{
          height: initialHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#94a3b8",
        }}
      >
        Cargando widget…
      </div>
    );
  }

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title="Agenda demo de Growthsuite"
      style={{
        width: "100%",
        maxWidth: maxWidth ? `${maxWidth}px` : undefined,
        marginInline: maxWidth ? "auto" : undefined,
        height,
        border: 0,
        borderRadius: 12,
        background: "#fff",
        display: "block",
        transition: "height 200ms ease-out",
      }}
    />
  );
}
