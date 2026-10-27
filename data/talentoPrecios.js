/**
 * Los dos precios de Talento y sus condiciones, en un solo lugar. Los usan la tarjeta de
 * /precio y las tres páginas de módulo (Reclutamiento, Checklist, Asistencia); antes cada una
 * tenía su copia del texto y podían decir cosas distintas.
 *
 * Los dos son mensuales sin plazo anual: el pago anual sólo aplica al Básico de $799.
 * El IVA no se menciona a propósito: está pendiente de definir.
 */
export const TALENTO_CON_IMPULSO = { name: "Impulso + Talento", priceLabel: "$6,999" };
export const TALENTO_CON_BASICO = { name: "Básico + Talento", priceLabel: "$2,999" };

export const TALENTO_COBRO = "Mensual, sin plazo anual";
export const TALENTO_BUSQUEDAS =
  "Hasta 2 búsquedas al mes de plazas operativas (mesero, cocinero, ayudante, cajero o similar), para una sucursal.";
export const TALENTO_ANUNCIOS = "La inversión en anuncios va por separado.";

export const talentoPlanTexto = `Incluido en ${TALENTO_CON_IMPULSO.name} (${TALENTO_CON_IMPULSO.priceLabel} MXN al mes) y en ${TALENTO_CON_BASICO.name} (${TALENTO_CON_BASICO.priceLabel} MXN al mes). Los dos se pagan mes a mes, sin plazo anual. ${TALENTO_CON_BASICO.name} no incluye Página web, Reservaciones ni Marketing.`;
