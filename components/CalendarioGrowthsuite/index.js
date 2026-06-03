import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import { buildCalendlyUrl } from "../../lib/tracker";
import useCalendlyTracking from "../../lib/useCalendlyTracking";

const BASE_URL =
  "https://calendly.com/hectoremiliocompras/agenda-una-demo?hide_gdpr_banner=1";

/**
 * Inline Calendly widget para Growthsuite. La URL se construye en client-side
 * con buildCalendlyUrl() para inyectar lead_uid + UTMs + utm_site=growthsuite,
 * de modo que el webhook server-to-server pueda matchear la conversión al lead.
 *
 * useCalendlyTracking dispara automáticamente:
 *   - Meta Pixel / TikTok Pixel / Google gtag eventos cuando el usuario agenda
 *   - Touchpoints en pos_tracking_api (intent + completion)
 */
export default function CalendarioGrowthsuite({
  campaignType = "demo",
  fallbackSource = "organic",
  height = "650px",
}) {
  useCalendlyTracking(fallbackSource, campaignType);

  /* La cookie _gs_lead_id solo existe client-side, así que computamos la URL
   * después del mount para que llegue con todo inyectado. */
  const [calendlyUrl, setCalendlyUrl] = useState(BASE_URL);
  useEffect(() => {
    setCalendlyUrl(buildCalendlyUrl(BASE_URL));
  }, []);

  return (
    <InlineWidget
      url={calendlyUrl}
      styles={{ height, minWidth: "320px" }}
    />
  );
}
