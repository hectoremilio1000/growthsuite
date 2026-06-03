import Head from "next/head";
import NavBar from "../components/foodbot/NavBar";
import BookingWidget from "../components/BookingWidget";

const beneficios = [
  "Diagnóstico sin costo de tu operación actual.",
  "Te mostramos cómo controlar tu restaurante desde WhatsApp.",
  "Una demo personalizada a tu operación, no un genérico.",
];

export default function Contacto() {
  return (
    <div>
      <Head>
        <title>Contacto | Growthsuite</title>
        <meta
          name="description"
          content="Agenda una demo con el equipo de Growthsuite. Te mostramos cómo operar tu restaurante desde WhatsApp."
        />
      </Head>

      <NavBar />

      {/* HERO claro al estilo del inicio */}
      <section className="fb-hero">
        <div className="fb-container">
          <div className="mx-auto max-w-2xl py-16 text-center md:py-20">
            <span className="fb-pill">Contacto</span>
            <h1 className="heading-font mt-6 text-4xl font-semibold leading-tight md:text-5xl">
              Agenda una demo con nuestro equipo
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Selecciona el día y horario que mejor te acomode. Te confirmamos
              la cita por correo.
            </p>
          </div>
        </div>
      </section>

      {/* CUERPO: dos columnas, el widget queda enmarcado y compacto */}
      <section className="fb-section" style={{ paddingTop: "2.5rem" }}>
        <div className="fb-container">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
            {/* Columna izquierda: valor + contacto directo */}
            <aside className="fb-cta" style={{ padding: "2rem" }}>
              <h2 className="heading-font text-2xl text-slate-900">
                ¿Por qué agendar una demo?
              </h2>
              <ul className="mt-5 space-y-4">
                {beneficios.map((texto) => (
                  <li key={texto} className="flex items-start gap-3">
                    <span className="fb-check">✓</span>
                    <span className="text-base text-slate-700">{texto}</span>
                  </li>
                ))}
              </ul>

              <hr className="my-7 border-slate-200" />

              <p className="text-sm text-slate-500">
                ¿Prefieres escribirnos directo?
              </p>
              <a
                href="https://wa.me/525531491808?text=Hola%20quiero%20una%20demo%20de%20Growthsuite"
                target="_blank"
                rel="noopener noreferrer"
                className="fb-button fb-button-whatsapp mt-3 w-full no-underline"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607z" />
                </svg>
                Conversemos por WhatsApp
              </a>
              <p className="mt-4 text-center text-sm text-slate-500">
                o al correo{" "}
                <a
                  href="mailto:clientes@growthsuite.com.mx"
                  className="font-medium text-slate-800 no-underline transition-colors hover:text-primary"
                >
                  clientes@growthsuite.com.mx
                </a>
              </p>
            </aside>

            {/* Columna derecha: widget de agenda enmarcado */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm md:p-4">
              <BookingWidget
                slug="growthsuite-demos"
                eventTypeSlug="demo-growthsuite"
                maxWidth={520}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
