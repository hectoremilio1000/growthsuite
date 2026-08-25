import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";
import NavBar from "../components/foodbot/NavBar";
import DemoChat from "../components/DemoChat";
import { trackEvent } from "../lib/tracker";
import { buildWhatsappUrl, CALENDLY_PATH, POS_QUESTION_MESSAGE } from "../lib/demoCtas";

/**
 * /softrestaurant — landing de la campaña "¿Usas Soft Restaurant?".
 *
 * Promesa honesta: el visitante prueba una experiencia REAL contra un restaurante demo de
 * GrowthSuite. En ningún lugar se afirma que Soft Restaurant (ni ningún otro POS externo)
 * esté conectado — porque todavía no lo está.
 *
 * La página es estática (output: "export" intacto): todo el trabajo vivo lo hace el chat
 * contra la puerta pública de pos_bot_api.
 */
export default function SoftRestaurant() {
  const inputRef = useRef(null);

  useEffect(() => {
    trackEvent("softrestaurant_landing_view", { landing_variant: "v1" });
  }, []);

  const goToChat = () => {
    trackEvent("demo_try_now_clicked", { from: "hero" });
    const el = document.getElementById("demo-chat");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    /* En móvil el foco inmediato abre el teclado y tapa el chat: se espera al scroll. */
    window.setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 600);
  };

  const posWhatsappUrl = buildWhatsappUrl(POS_QUESTION_MESSAGE);

  return (
    <div>
      <Head>
        <title>¿Usas Soft Restaurant? Ahora imagina poder hablar con él | GrowthSuite</title>
        <meta
          name="description"
          content="Pregunta por ventas, productos y operación usando lenguaje normal. Prueba la demo interactiva de GrowthSuite."
        />
        <meta name="robots" content="noindex" />
        <meta property="og:title" content="¿Usas Soft Restaurant? Ahora imagina poder hablar con él." />
        <meta
          property="og:description"
          content="Pregunta por ventas, productos y operación usando lenguaje normal."
        />
      </Head>

      <NavBar />

      <section className="fb-hero">
        <div className="fb-container">
          <div className="mx-auto max-w-2xl py-14 text-center md:py-16">
            <span className="fb-pill">Demo interactiva</span>

            <h1 className="heading-font mt-6 text-4xl font-semibold leading-tight md:text-5xl">
              ¿Usas Soft Restaurant?
            </h1>
            <h2 className="heading-font mt-3 text-2xl font-medium leading-snug text-slate-700 md:text-3xl">
              Ahora imagina poder hablar con él.
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Pregunta por ventas, productos y operación usando lenguaje normal.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3">
              <button type="button" className="fb-button" onClick={goToChat}>
                Probar ahora
              </button>

              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
                <a
                  href={posWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-500 underline-offset-4 hover:text-primary hover:underline"
                  onClick={() => trackEvent("demo_whatsapp_clicked", { from: "hero" })}
                >
                  ¿Funciona con mi POS?
                </a>
                <Link
                  href={CALENDLY_PATH}
                  className="font-medium text-slate-500 underline-offset-4 hover:text-primary hover:underline"
                  onClick={() => trackEvent("demo_calendly_clicked", { from: "hero" })}
                >
                  Agendar una demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fb-section" style={{ paddingTop: 0 }} id="demo-chat">
        <div className="fb-container">
          <DemoChat inputRef={inputRef} />
        </div>
      </section>

      <section className="fb-section" style={{ paddingTop: "1rem" }}>
        <div className="fb-container">
          <div className="fb-cta mx-auto max-w-2xl text-center">
            <h2 className="heading-font text-2xl md:text-3xl">
              Nunca cambies tu punto de venta. Hazlo inteligente.
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={posWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fb-button fb-button-whatsapp no-underline"
                onClick={() => trackEvent("demo_whatsapp_clicked", { from: "footer" })}
              >
                ¿Funciona con mi POS?
              </a>
              <Link
                href={CALENDLY_PATH}
                className="fb-button-outline no-underline"
                onClick={() => trackEvent("demo_calendly_clicked", { from: "footer" })}
              >
                Agendar una demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
