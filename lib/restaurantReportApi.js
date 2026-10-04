// /lib/restaurantReportApi.js
import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export async function autocompleteRestaurants(input) {
  const { data } = await axios.get(
    `${API}/restaurant-reports/autocomplete`,
    { params: { input } }
  );
  return data.predictions ?? [];
}

export async function getRestaurantReportPreview(placeId) {
  const { data } = await axios.get(`${API}/restaurant-reports/preview`, {
    params: { place_id: placeId },
  });
  return data.data;
}

export async function createRestaurantReport(placeId) {
  const { data } = await axios.post(`${API}/restaurant-reports`, {
    place_id: placeId,
  });
  return data.data;
}

export async function getRestaurantReport(id) {
  const { data } = await axios.get(`${API}/restaurant-reports/${id}`);
  return data.data;
}

/**
 * El `brand` le dice al backend QUIÉN capturó el lead, y de eso depende el correo
 * de confirmación: logo, colores, firma, remitente y a dónde apunta el enlace.
 *
 * Sin este campo el backend asume 'impulso' —su default— y el prospecto recibe un
 * correo de Impulso Restaurantero aunque haya llenado el formulario en
 * growthsuite.com.mx. Pasó de verdad el 2026-10-04.
 *
 * El reporte en sí NO lleva marca: se deduplica por place_id y lo comparten los dos
 * sitios. Lo que tiene dueño es el lead.
 */
export async function createRestaurantReportLead(
  reportId,
  { name, whatsapp, email, captchaToken }
) {
  const { data } = await axios.post(
    `${API}/restaurant-reports/${reportId}/lead`,
    { name, whatsapp, email, captchaToken, brand: "growthsuite" }
  );
  return data.data;
}
