import { useCalendlyEventListener } from 'react-calendly';
import { getCurrentAttribution, getLeadUid, trackEvent } from './tracker';

/**
 * Hook que escucha eventos del widget de Calendly y los manda a:
 *   1. Meta Pixel (si window.fbq existe)
 *   2. TikTok Pixel (si window.ttq existe)
 *   3. Google Ads / GA4 (si window.gtag existe)
 *   4. GTM dataLayer
 *   5. Nuestro pos_tracking_api (vía trackEvent)
 *
 * El source/canal se detecta automáticamente desde el tracker (fbclid → meta,
 * ttclid → tiktok, etc). El argumento `fallbackSource` solo se usa si el
 * tracker no detectó nada.
 *
 * @param {string} fallbackSource - Canal por defecto (ej: 'organic')
 * @param {string} campaignType   - Tipo de campaña (ej: 'demo', 'cumple')
 */
export default function useCalendlyTracking(fallbackSource = 'organic', campaignType = 'demo') {
  useCalendlyEventListener({
    onEventScheduled: (e) => {
      const eventData = e.data?.payload || {};

      const attr = getCurrentAttribution();
      const source = attr?.channel || fallbackSource;
      const leadUid = getLeadUid();
      const campaign = attr?.campaign || campaignType;

      // ========== FACEBOOK PIXEL ==========
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: `Demo ${campaignType}`,
          content_category: `demo_${source}`,
          source,
          campaign_type: campaignType,
        });
        window.fbq('track', 'Schedule', {
          content_name: `Demo ${campaignType}`,
        });
      }

      // ========== TIKTOK PIXEL ==========
      if (typeof window !== 'undefined' && window.ttq) {
        window.ttq.track('SubmitForm', {
          content_name: `Demo ${campaignType}`,
          content_type: 'lead',
          description: `source:${source}`,
        });
        window.ttq.track('CompleteRegistration', {
          content_name: `Demo ${campaignType}`,
          content_type: 'lead',
        });
      }

      // ========== GOOGLE ADS / GA4 ==========
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'demo_scheduled', {
          source,
          campaign,
          lead_uid: leadUid,
        });
      }

      // ========== GTM DATALAYER ==========
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'demo_scheduled',
          conversion_type: campaignType,
          source,
          campaign,
          lead_uid: leadUid,
          calendly_event: eventData.event?.uri || '',
          invitee: eventData.invitee?.uri || '',
        });
      }

      // ========== TRACKING API (intent client-side; la conversión real la crea el webhook) ==========
      trackEvent('calendly_scheduled_client', {
        campaign_type: campaignType,
        fallback_source: fallbackSource,
        calendly_event_uri: eventData.event?.uri || null,
        invitee_uri: eventData.invitee?.uri || null,
      });

      console.log(`[Tracking] Demo agendada — source: ${source}, lead: ${leadUid}`);
    },

    onDateAndTimeSelected: () => {
      const attr = getCurrentAttribution();
      const source = attr?.channel || fallbackSource;

      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'AddToCart', {
          content_name: `Selecciono fecha demo ${campaignType}`,
          content_category: `intent_${source}`,
        });
      }

      if (typeof window !== 'undefined' && window.ttq) {
        window.ttq.track('AddToCart', {
          content_name: `Selecciono fecha demo ${campaignType}`,
          content_type: 'lead',
        });
      }

      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'demo_date_selected',
          source,
          campaign_type: campaignType,
        });
      }

      trackEvent('calendly_date_selected', { campaign_type: campaignType, fallback_source: fallbackSource });
    },

    onProfilePageViewed: () => {
      const source = getCurrentAttribution()?.channel || fallbackSource;

      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'demo_calendar_viewed',
          source,
          campaign_type: campaignType,
        });
      }

      trackEvent('calendly_profile_viewed', { campaign_type: campaignType, fallback_source: fallbackSource });
    },
  });
}
