import { growthsuiteModules } from "./growthsuiteModules";

/**
 * Los planes que se cobran. Un módulo pertenece a UN plan; un plan agrupa módulos.
 *
 * Las listas NO se escriben a mano: salen de filtrar el catálogo por `plan`. Así, agregar
 * un módulo mañana lo mete solo en la tarjeta que le toca — no hay dos listas que se puedan
 * desincronizar.
 *
 * `includesPlanId` es lo que evita el malentendido de sumar precios: la tarjeta de Impulso
 * no repite los 9 del básico, dice "todo el básico, más:" y enseña únicamente lo que agrega.
 */
const modulesOf = (plan) => growthsuiteModules.filter((m) => m.plan === plan);
const asFeatures = (mods) =>
  mods.map((m) => ({ label: m.title, href: `/modulo/${m.slug}` }));

export const growthsuitePlans = [
  {
    id: "basico",
    name: "Básico",
    tagline: "El software que corre tu restaurante todos los días",
    price: 799,
    priceLabel: "$799",
    period: "mes",
    // El $799 es el mensual con pago anual; mes a mes cuesta más. Se pinta en chico bajo el precio.
    monthlyPriceLabel: "$1,299",
    priceFootnote: "Precio mensual pagando el año",
    includesPlanId: null,
    features: asFeatures(modulesOf("basico")),
    note: `${modulesOf("basico").length} módulos de operación`,
    ctaLabel: "Agenda una demo",
    ctaHref: "/contacto",
    highlight: false,
  },
  {
    id: "impulso",
    name: "Impulso",
    tagline: "Todo lo anterior, más el equipo que hace crecer el restaurante",
    price: 4999,
    priceLabel: "$4,999",
    period: "mes",
    includesPlanId: "basico",
    features: asFeatures(modulesOf("impulso")),
    note: "No se suma al básico: este precio ya lo incluye",
    ctaLabel: "Agenda una demo",
    ctaHref: "/contacto",
    highlight: true,
  },
  {
    id: "talento",
    name: "Impulso + Talento",
    tagline: "Haz crecer tu restaurante y encuentra a tu próximo equipo",
    price: 6999,
    priceLabel: "$6,999",
    period: "mes",
    includesPlanId: "impulso",
    features: asFeatures(modulesOf("talento")),
    // Qué incluye una búsqueda. El precio sólo es rentable con estos límites a la vista.
    pasos: [
      ["Definir la vacante", "Puesto, sueldo, propinas, horario y ubicación."],
      ["Preparar y publicar los anuncios", "Imágenes, textos y recepción de solicitudes."],
      [
        "Atender y revisar candidatos",
        "Confirmar que conocen las condiciones y cumplen los requisitos básicos acordados.",
      ],
      ["Coordinar entrevistas", "Mandar ubicación, confirmar asistencia y enviar recordatorios."],
      [
        "Dar seguimiento",
        "Registrar quién asistió, quién interesa y quién fue contratado. El restaurante entrevista y toma la decisión final.",
      ],
    ],
    limites:
      "Cada búsqueda corresponde a una plaza operativa —mesero, cocinero, ayudante, cajero o similar— durante un periodo de hasta 30 días. Gerentes, puestos especializados y sucursales adicionales se cotizan aparte. No garantizamos contrataciones ni asistencia a las entrevistas.",
    note: "Hasta 2 búsquedas de personal operativo al mes, para una sucursal.",
    fineprint: "Este precio ya incluye el plan Impulso. Inversión en anuncios por separado.",
    // Talento sin marketing, encima del Básico.
    addonLabel: "¿Sólo Básico + Talento? $2,999 MXN / mes.",
    ctaLabel: "Quiero encontrar personal",
    ctaHref: "/contacto",
    highlight: false,
  },
];

export const planById = (id) => growthsuitePlans.find((p) => p.id === id);
