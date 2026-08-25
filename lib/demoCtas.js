/**
 * CTAs comerciales de la demo. Reutilizan los canales que YA existen:
 * el WhatsApp comercial del sitio y la agenda de /contacto (BookingWidget).
 * No se crea ningún canal nuevo.
 */

/** El mismo número que ya usa el sitio en index.js y contacto.js. */
export const COMMERCIAL_WHATSAPP = "525531491808";

export const CALENDLY_PATH = "/contacto";

export function buildWhatsappUrl(message) {
  return `https://wa.me/${COMMERCIAL_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

/** CTA "¿Funciona con mi POS?" — el prospecto completa la marca de su punto de venta. */
export const POS_QUESTION_MESSAGE =
  "Hola, acabo de probar la demo de GrowthSuite. Mi punto de venta es ____ y quiero saber si lo pueden conectar.";
