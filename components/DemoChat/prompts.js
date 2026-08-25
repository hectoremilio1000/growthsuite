/**
 * Sugerencias de la demo pública.
 *
 * Los follow-ups NO los genera un modelo en V1: son un mapa determinista de
 * tema → siguientes preguntas. Es más barato, instantáneo, y sobre todo predecible —
 * en una demo que recibe tráfico de anuncios, una sugerencia impredecible es una
 * pregunta que el Brain podría no contestar bien delante de un prospecto.
 *
 * Toda pregunta listada aquí está respaldada por una capability real y verificada
 * (ver GROWTHSUITE_PUBLIC_DEMO_DISCOVERY.md §5). "¿Y en bebidas?" NO aparece a propósito:
 * hoy no existe filtro por categoría de producto, así que prometerla sería vender humo.
 */

/** Las que ve el visitante antes de escribir nada. */
export const INITIAL_PROMPTS = [
  "¿Cuánto vendimos ayer?",
  "¿Cómo vamos hoy?",
  "¿Quién vendió más?",
  "¿Qué producto vendimos más?",
  "¿Cómo vamos contra ayer?",
];

/**
 * Clasificador de tema por palabras clave. Determinista y sin red.
 * Devuelve la llave del mapa de follow-ups.
 */
export function topicOf(text) {
  const t = String(text || "").toLowerCase();
  if (/(cancel|anul)/.test(t)) return "cancelaciones";
  if (/(descuent)/.test(t)) return "descuentos";
  if (/(mesero|vendi[oó] m[aá]s|quién vendió|personal|llegó tarde|retardo|asistencia)/.test(t))
    return "personal";
  if (/(producto|platillo|vendimos m[aá]s|m[aá]s vendido)/.test(t)) return "productos";
  if (/(inventario|insumo|stock|se acab)/.test(t)) return "inventario";
  if (/(venta|vendimos|ticket|cuenta|hoy|ayer|semana|comparad)/.test(t)) return "ventas";
  return "general";
}

const FOLLOW_UPS = {
  ventas: [
    "¿Y comparado con ayer?",
    "¿Cuántas cuentas tuvimos?",
    "¿Cuál fue el ticket promedio?",
    "¿Qué producto vendimos más?",
  ],
  productos: [
    "¿Quién vendió más?",
    "¿Cómo vamos esta semana?",
    "¿Qué cancelaciones hubo?",
  ],
  personal: [
    "¿Cuánto vendimos ayer?",
    "¿Qué producto vendimos más?",
    "¿Qué cancelaciones hubo?",
  ],
  cancelaciones: [
    "¿Cuánto hemos descontado?",
    "¿Cómo vamos hoy?",
    "¿Quién vendió más?",
  ],
  descuentos: [
    "¿Qué cancelaciones hubo?",
    "¿Cómo vamos contra ayer?",
    "¿Cuál fue el ticket promedio?",
  ],
  inventario: [
    "¿Qué se está acabando?",
    "¿Cómo vamos hoy?",
    "¿Qué producto vendimos más?",
  ],
  general: [
    "¿Cómo vamos hoy?",
    "¿Cuánto vendimos ayer?",
    "¿Quién vendió más?",
  ],
};

/**
 * La pregunta "trampa": abierta, sin cifra pedida explícitamente. El agente encadena varias
 * herramientas por su cuenta para contestarla — está validada en la eval del rail
 * (grupo "Investigación abierta", 35/35 con Opus, y cubierta con Haiku).
 * Es el momento WOW: demuestra razonamiento, no búsqueda.
 */
export const CHALLENGE_PROMPT = "¿Por qué crees que estamos así?";

export function followUpsFor(text) {
  return FOLLOW_UPS[topicOf(text)] || FOLLOW_UPS.general;
}
