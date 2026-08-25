import Head from "next/head";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/foodbot/NavBar";
import BookingWidget from "../components/BookingWidget";
import { trackEvent } from "../lib/tracker";
import styles from "../styles/Abastur.module.css";

/* Landing exclusiva para el QR del stand de Growthsuite en Abastur 2026
 * (26-28 de agosto, Centro Citibanamex, CDMX). Apunta a /abastur.
 *
 * Sin backend propio (el sitio es export estático): la "conversión" es
 * WhatsApp con mensaje precargado + el mismo BookingWidget (Cal.com) que
 * ya se usa en /contacto, para agendar la instalación ahí mismo en el stand.
 */

const WHATSAPP_NUMBER = "525531491808";
const PROMO_CODE = "ABASTUR2026";
const WHATSAPP_MESSAGE =
  "Hola 👋 Vengo del stand de Growthsuite en Abastur 2026 y quiero mi prueba gratis de 15 días + instalación sin costo (código ABASTUR2026)";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

/* Fin de Abastur 2026: 28 de agosto, 19:00 hrs, CDMX (UTC-6 todo el año). */
const EVENT_END = "2026-08-28T19:00:00-06:00";

const perks = [
  "Instalación y capacitación de tu equipo incluidas, sin costo.",
  "Soporte prioritario del equipo Growthsuite durante tus 15 días.",
  "Sin tarjeta de crédito. Decides si te quedas al terminar la prueba.",
];

const steps = [
  {
    title: "Guarda tu código",
    text: `Toma captura de esta pantalla o memoriza tu código: ${PROMO_CODE}.`,
  },
  {
    title: "Escríbenos ahora",
    text: "Mándanos WhatsApp o agenda tu instalación aquí abajo, sin salir del stand.",
  },
  {
    title: "Prueba 15 días gratis",
    text: "Instalamos tu Punto de Venta y lo pruebas sin costo. Tú decides si te quedas.",
  },
];

const features = [
  {
    title: "Punto de Venta en la nube",
    text: "Menús, precios, cobros y cortes de caja desde cualquier dispositivo.",
    img: "/imagen_3.png",
  },
  {
    title: "Controla todo desde WhatsApp",
    text: "Inventarios, cancelaciones y reportes en el chat que ya usas.",
    img: "/cliente_whatsapp.png",
  },
  {
    title: "Delivery propio",
    text: "Tus repartidores, tu marca, tu dominio. Sin comisiones de terceros.",
    img: "/delivery-propio.png",
  },
  {
    title: "Rewards",
    text: "Cashback, cumpleaños y referidos para que tus clientes vuelvan.",
    img: "/reward.png",
  },
];

const logoCloud = [
  { src: "/logos/bar-bunny.png", alt: "Bar Bunny" },
  { src: "/logos/lalloronblanco.png", alt: "La Llorona" },
  { src: "/logos/logoDonde.png", alt: "Dónde" },
  { src: "/logos/mayta-logo-new.svg", alt: "Mayta" },
  { src: "/logos/mr-lucho.png", alt: "Mr Lucho" },
  { src: "/logos/logo_bambuu.png", alt: "Bambuu" },
  { src: "/logos/fogo-de-chao.svg", alt: "Fogo de Chão" },
  { src: "/logos/rubaiyat.svg", alt: "Rubaiyat" },
];

function getTimeLeft() {
  const diff = new Date(EVENT_END).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Countdown() {
  // null = todavía no montó en el cliente (evita mismatch de hidratación
  // contra el build estático); "ended" se maneja aparte.
  const [timeLeft, setTimeLeft] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  if (!timeLeft) {
    return (
      <p className={styles.countdownLabel} style={{ marginTop: "1.2rem" }}>
        La expo concluyó, pero tu código sigue vigente — escríbenos por WhatsApp
      </p>
    );
  }

  const units = [
    { value: timeLeft.days, label: "días" },
    { value: timeLeft.hours, label: "hrs" },
    { value: timeLeft.minutes, label: "min" },
    { value: timeLeft.seconds, label: "seg" },
  ];

  return (
    <div className={styles.countdownWrap}>
      <span className={styles.countdownLabel}>
        Oferta activa mientras dura Abastur 2026
      </span>
      <div className={styles.countdownGrid}>
        {units.map((u) => (
          <div key={u.label} className={styles.countdownBox}>
            <span className={styles.countdownNum}>
              {String(u.value).padStart(2, "0")}
            </span>
            <span className={styles.countdownUnit}>{u.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CopyCodeButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    trackEvent("abastur_copy_code");
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
    } catch {
      /* clipboard no disponible (http, permisos): igual mostramos el código */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`${styles.copyBtn} ${copied ? styles.copied : ""}`}
    >
      {copied ? "¡Copiado! ✓" : "Copiar código"}
    </button>
  );
}

export default function Abastur() {
  useEffect(() => {
    trackEvent("abastur_view");
  }, []);

  return (
    <div>
      <Head>
        <title>Oferta Abastur 2026: 15 días gratis + instalación | Growthsuite</title>
        <meta
          name="description"
          content="Escaneaste el QR del stand de Growthsuite en Abastur 2026: obtén 15 días de prueba gratis y la instalación de tu Punto de Venta sin costo."
        />
        <meta property="og:title" content="Oferta Abastur 2026 | Growthsuite" />
        <meta
          property="og:description"
          content="15 días de prueba gratis + instalación sin costo. Exclusivo para visitantes del stand Growthsuite en Abastur 2026."
        />
        <meta property="og:image" content="https://www.growthsuite.tech/growthsuite-logo-blue-1024.png" />
        <meta name="robots" content="noindex" />
      </Head>

      <NavBar />

      {/* ---------- HERO ---------- */}
      <section className={styles.hero}>
        <div className={`${styles.blob} ${styles.blobOne}`} aria-hidden="true" />
        <div className={`${styles.blob} ${styles.blobTwo}`} aria-hidden="true" />

        <div className="fb-container">
          <motion.div
            className={styles.heroInner}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.span
              className={styles.livePill}
              variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0 } }}
            >
              <span className={styles.liveDot} aria-hidden="true" />
              En vivo en el stand Growthsuite · Abastur 2026
            </motion.span>

            <motion.h1
              className={styles.heroTitle}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            >
              Escaneaste el QR correcto:{" "}
              <span className={styles.highlight}>15 días gratis</span> + instalación
              sin costo
            </motion.h1>

            <motion.p
              className={styles.heroSubtitle}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            >
              Por estar en Abastur 2026, te regalamos 15 días de prueba del
              Punto de Venta Growthsuite —el que controla tu restaurante desde
              WhatsApp— con instalación y capacitación incluidas. Sin tarjeta,
              sin compromiso.
            </motion.p>

            <motion.div
              className={styles.ctaRow}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            >
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimary}
                onClick={() => trackEvent("abastur_whatsapp_click", { placement: "hero" })}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607z" />
                </svg>
                Quiero mi prueba gratis
              </a>
              <a
                href="#agenda"
                className={styles.ctaSecondary}
                onClick={() => trackEvent("abastur_booking_scroll")}
              >
                Agendar instalación aquí mismo
              </a>
            </motion.div>

            <motion.div
              className={styles.eventMeta}
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            >
              <span>📅 26–28 de agosto 2026</span>
              <span>📍 Centro Citibanamex, CDMX</span>
            </motion.div>

            <Countdown />
          </motion.div>
        </div>
      </section>

      {/* ---------- TICKET / CÓDIGO ---------- */}
      <section className={styles.ticketSection}>
        <div className="fb-container">
          <motion.div
            className={styles.ticket}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <span className={styles.ticketLabel}>Tu código de Abastur</span>
              <p className={styles.ticketOffer}>
                15 días gratis + instalación $0
              </p>
              <span className={styles.ticketCode}>🎟️ {PROMO_CODE}</span>
            </div>
            <CopyCodeButton />
          </motion.div>

          <div className={styles.perks}>
            {perks.map((perk) => (
              <div key={perk} className={styles.perkItem}>
                <span className={styles.perkCheck}>✓</span>
                <span>{perk}</span>
              </div>
            ))}
          </div>

          <div className={styles.steps}>
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={styles.stepCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <span className={styles.stepNumber}>{index + 1}</span>
                <p className={styles.stepTitle}>{step.title}</p>
                <p className={styles.stepText}>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="fb-section">
        <div className="fb-container">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Lo que vas a probar gratis
            </p>
            <h2 className="heading-font mt-4 text-3xl md:text-4xl">
              Todo tu restaurante, en una sola plataforma
            </h2>
          </div>

          <div className={styles.featureGrid}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className={styles.featureImgWrap}>
                  <img src={feature.img} alt={feature.title} loading="lazy" />
                </div>
                <div className={styles.featureBody}>
                  <p className={styles.featureTitle}>{feature.title}</p>
                  <p className={styles.featureText}>{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SOCIAL PROOF ---------- */}
      <section className="fb-section fb-logo-section">
        <div className="fb-container">
          <div className="mb-8 text-center">
            <h2 className="heading-font text-2xl md:text-3xl text-slate-900">
              Restaurantes que ya operan con Growthsuite
            </h2>
          </div>
          <div className="fb-logo-panel">
            <div className="fb-logo-marquee" aria-label="Logos de restaurantes que usan Growthsuite">
              <div className="fb-logo-track">
                {[...logoCloud, ...logoCloud].map((logo, index) => (
                  <div
                    key={`${logo.alt}-${index}`}
                    className="logo-card logo-card--dark logo-card--lg"
                    aria-hidden={index >= logoCloud.length ? "true" : undefined}
                  >
                    <img src={logo.src} alt={index >= logoCloud.length ? "" : logo.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BOOKING ---------- */}
      <section id="agenda" className="fb-section" style={{ paddingTop: "1rem" }}>
        <div className="fb-container">
          <div className="mb-8 text-center">
            <span className="fb-pill">Agenda ahora</span>
            <h2 className="heading-font mt-4 text-3xl md:text-4xl">
              Reserva tu instalación gratuita
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Elige el día y horario que mejor te acomode para instalar tu
              Punto de Venta. Sin costo durante tus 15 días de prueba.
            </p>
          </div>
          <div className={`${styles.bookingFrame} mx-auto`} style={{ maxWidth: 560 }}>
            <BookingWidget
              slug="growthsuite-demos"
              eventTypeSlug="demo-growthsuite"
              maxWidth={520}
            />
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="fb-section">
        <div className="fb-container">
          <div className={styles.finalCta}>
            <p className={styles.finalCtaTitle}>
              ¿Prefieres platicarlo directo? Escríbenos ahora
            </p>
            <p className={styles.finalCtaText}>
              Menciona tu código <strong>{PROMO_CODE}</strong> y en minutos
              agendamos la instalación gratuita de tu Punto de Venta.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPrimary}
              onClick={() => trackEvent("abastur_whatsapp_click", { placement: "final" })}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607z" />
              </svg>
              Conversemos por WhatsApp
            </a>
            <p className={styles.boothNote}>
              Visítanos en el stand de Growthsuite · Abastur 2026 · Centro
              Citibanamex, CDMX · 26 al 28 de agosto
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
