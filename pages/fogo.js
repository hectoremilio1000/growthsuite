import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavBar from "../components/foodbot/NavBar";
import { trackEvent } from "../lib/tracker";

/**
 * /fogo — cartel de la demo en vivo del asistente, para tótem y presentaciones.
 *
 * El visitante escanea (o toca, si ya está en su teléfono), se le abre WhatsApp con el
 * mensaje precargado y al enviarlo queda vinculado 12 h al restaurante demo. No teclea
 * su número, no se registra, no instala nada.
 *
 * La clave `DEMO-FOGO` del mensaje es la que `pos_bot_api` valida para auto-vincular
 * (app/bot/pairing/demo_pairing.ts). El restaurante destino NO viaja en el mensaje: lo
 * fija el entorno del bot y además debe estar en su lista canónica. Quien escanea no
 * puede pedir que lo vinculen a otro negocio cambiando el texto.
 *
 * `noindex`: es una puerta de demo, no una landing de campaña. Mientras la clave esté
 * puesta en el bot, cualquiera con este enlace entra — no tiene por qué encontrarlo
 * Google.
 *
 * Página estática (output: "export" intacto). El QR es un PNG servido desde /public,
 * no una librería: no depende de JS y se ve igual en un tótem sin conexión.
 */

/** WhatsApp del BOT (no el comercial del sitio, que vive en lib/demoCtas.js). */
const BOT_WHATSAPP = "5215532003081";
const PAIRING_MESSAGE = "Hola, quiero probar el asistente — DEMO-FOGO";
const WHATSAPP_URL = `https://wa.me/${BOT_WHATSAPP}?text=${encodeURIComponent(PAIRING_MESSAGE)}`;

const PREGUNTAS = [
  { area: "Ventas", q: "¿Cómo vamos hoy contra el mismo día la semana pasada?" },
  { area: "Inventario", q: "¿Qué insumos están por debajo de su mínimo?" },
  { area: "Compras", q: "¿Qué debería comprar mañana y a qué proveedor?" },
  { area: "Meseros", q: "¿Quién vendió más esta semana?" },
  { area: "Caja", q: "¿Cómo va el turno? ¿Cuánto hay en caja?" },
  { area: "Clientes", q: "¿De qué se están quejando en las encuestas?" },
];

export default function FogoDemo() {
  /* El tótem se escanea; un visitante que ya tiene el enlace en su teléfono no puede
     escanear su propia pantalla. Se le ofrece el botón, pero sólo cuando de verdad
     está en un móvil — en el tótem sería ruido. */
  const [esMovil, setEsMovil] = useState(false);

  useEffect(() => {
    setEsMovil(window.matchMedia("(pointer: coarse)").matches);
    trackEvent("fogo_demo_view", {});
  }, []);

  return (
    <div>
      <Head>
        <title>Habla con el restaurante | GrowthSuite</title>
        <meta
          name="description"
          content="Escanea y pregúntale por WhatsApp cómo va la operación. Te contesta con datos reales, al momento."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Habla con el restaurante" />
        <meta
          property="og:description"
          content="Escanea y pregúntale por WhatsApp cómo va la operación."
        />
      </Head>

      <NavBar />

      <main className="mx-auto max-w-5xl px-5 pb-24 pt-10 sm:pt-14">
        {/* ── Cartel ── */}
        <section className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-600">
            Demo en vivo · Fogo de Chão Santa Fe
          </p>

          <h1 className="mx-auto mt-5 max-w-[15ch] text-balance text-4xl font-extrabold leading-[1.02] tracking-tight text-slate-900 sm:text-6xl">
            Pregúntale lo que sea al restaurante
          </h1>

          <p className="mx-auto mt-5 max-w-[36ch] text-balance text-lg text-slate-600 sm:text-xl">
            Escanea y escríbele por WhatsApp. Te contesta con los datos reales de la
            operación, ahora mismo.
          </p>

          <div className="mt-10 flex justify-center">
            {/* El QR también es enlace: quien abre esta página EN su teléfono no puede
                escanear su propia pantalla, y así tiene camino aunque el JS no corra. */}
            <a
              href={WHATSAPP_URL}
              onClick={() => trackEvent("fogo_demo_tap_qr", {})}
              className="rounded-2xl bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.13)] ring-1 ring-slate-200 transition hover:shadow-[0_22px_60px_rgba(15,23,42,0.18)]"
            >
              <Image
                src="/qr-fogo-demo.png"
                alt="Código QR para abrir WhatsApp y hablar con el asistente"
                width={300}
                height={300}
                priority
                className="h-[240px] w-[240px] sm:h-[300px] sm:w-[300px]"
              />
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                Abre WhatsApp · envía el mensaje
              </p>
            </a>
          </div>

          {esMovil && (
            <a
              href={WHATSAPP_URL}
              onClick={() => trackEvent("fogo_demo_tap_whatsapp", {})}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-bold text-white shadow-lg transition hover:brightness-95"
            >
              Abrir WhatsApp
            </a>
          )}

          <ol className="mx-auto mt-12 grid max-w-2xl gap-6 text-left sm:grid-cols-3">
            {[
              "Escanea el código con la cámara de tu teléfono.",
              "Se abre WhatsApp con el mensaje ya escrito. Envíalo.",
              "Listo. Pregúntale lo que quieras durante 12 horas.",
            ].map((paso, i) => (
              <li key={i}>
                <span className="block text-xs font-bold tracking-[0.1em] text-orange-600">
                  0{i + 1}
                </span>
                <p className="mt-1.5 text-[15px] leading-snug text-slate-600">{paso}</p>
              </li>
            ))}
          </ol>

          <p className="mt-9 text-sm text-slate-400">
            No necesitas instalar nada ni registrarte.
          </p>
        </section>

        {/* ── Qué preguntarle ── */}
        <section className="mt-20 border-t border-slate-200 pt-14">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Qué preguntarle
          </h2>
          <p className="mt-2 max-w-[62ch] text-[15px] text-slate-500">
            Lee de seis fuentes reales: punto de venta, inventario, caja, reservas, reparto
            y encuestas. Todo número que dice sale de una consulta — nunca lo estima.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PREGUNTAS.map((p) => (
              <li
                key={p.q}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5"
              >
                <span className="block text-[10px] font-bold uppercase tracking-[0.13em] text-orange-600">
                  {p.area}
                </span>
                <p className="mt-1 text-[15px] leading-snug text-slate-800">{p.q}</p>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-[62ch] text-sm text-slate-500">
            Si le preguntas por algo que todavía no conecta —marketing, por ejemplo— te lo
            dice en vez de inventarlo. Esa parte también vale la pena probarla.
          </p>
        </section>
      </main>
    </div>
  );
}
