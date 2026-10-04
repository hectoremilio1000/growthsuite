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
    id: "empresas",
    name: "Empresas",
    tagline: "A la medida para cadenas y grupos",
    price: null,
    priceLabel: "A cotizar",
    period: null,
    includesPlanId: "impulso",
    features: [
      { label: "Varias sucursales en un solo tablero" },
      { label: "Integraciones con tus sistemas" },
      { label: "Acompañamiento dedicado" },
    ],
    note: "Precio según sucursales y alcance",
    ctaLabel: "Hablemos",
    ctaHref: "/contacto",
    highlight: false,
  },
];

export const planById = (id) => growthsuitePlans.find((p) => p.id === id);
