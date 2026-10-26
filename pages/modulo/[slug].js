import Link from "next/link";
import NavBar from "../../components/foodbot/NavBar";
import Seo, { SITE_URL, DEFAULT_OG_IMAGE } from "../../components/Seo";
import { growthsuiteModules } from "../../data/growthsuiteModules";

/* Quién hace cada paso del recorrido. Separa el servicio de nuestro equipo de lo que hace el
 * software, para no vender como automático algo que hace una persona. */
const QUIEN = {
  equipo: { label: "Equipo GrowthSuite", className: "bg-blue-50 text-blue-700" },
  sistema: { label: "Sistema", className: "bg-emerald-50 text-emerald-700" },
  ambos: { label: "Equipo + sistema", className: "bg-indigo-50 text-indigo-700" },
  restaurante: { label: "Tu restaurante", className: "bg-amber-50 text-amber-800" },
};

export async function getStaticPaths() {
  return {
    paths: growthsuiteModules.map((m) => ({ params: { slug: m.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      moduleData: growthsuiteModules.find((m) => m.slug === params.slug) || null,
    },
  };
}

export default function ModuloPage({ moduleData }) {
  if (!moduleData) return null;

  return (
    <div>
      <Seo
        title={`${moduleData.title} para Restaurantes | Growthsuite`}
        description={moduleData.description}
        path={`/modulo/${moduleData.slug}`}
        image={
          moduleData.visualImage
            ? `${SITE_URL}${moduleData.visualImage}`
            : DEFAULT_OG_IMAGE
        }
      />
      <NavBar />

      {/* Hero */}
      <section className="fb-hero">
        <div className="fb-container">
          <div className="fb-hero-grid">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                {moduleData.kicker}
              </p>
              <h1 className="heading-font mt-2 text-3xl md:text-4xl leading-tight text-primary">
                Módulo: {moduleData.title}
              </h1>
              <p className="mt-5 text-lg text-slate-600">
                {moduleData.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contacto" className="fb-button">
                  Agendar demo
                </Link>
                <Link
                  href={`/#${moduleData.id}`}
                  className="fb-button-outline"
                >
                  Ver todos los módulos
                </Link>
              </div>
            </div>
            {moduleData.visualImage && (
              <div className="fb-hero-visual">
                <picture>
                  {moduleData.visualImageMobile && (
                    <source media="(max-width: 640px)" srcSet={moduleData.visualImageMobile} />
                  )}
                  <img
                    src={moduleData.visualImage}
                    alt={moduleData.visualAlt || moduleData.title}
                    className="fb-hero-visual-image"
                  />
                </picture>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Detalle */}
      {moduleData.detail && (
        <section className="fb-section">
          <div className="fb-container">
            {moduleData.problema && (
              <div className="max-w-3xl mx-auto mb-12 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                  El problema
                </p>
                <p className="mt-2 text-lg text-slate-700">{moduleData.problema}</p>
              </div>
            )}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-font text-3xl md:text-4xl">
                {moduleData.problema ? "Qué hacemos por tu restaurante" : "¿De qué trata?"}
              </h2>
              <p className="mt-4 text-lg text-slate-600">{moduleData.detail}</p>
            </div>
          </div>
        </section>
      )}

      {/* Cómo funciona — quién hace cada paso: nuestro equipo, el sistema o el restaurante */}
      {moduleData.recorrido?.length > 0 && (
        <section className="fb-section fb-section-muted">
          <div className="fb-container">
            <h2 className="heading-font text-3xl md:text-4xl text-center">
              Cómo funciona
            </h2>
            <div className="mt-5 flex flex-wrap justify-center gap-2 text-sm">
              {Object.entries(QUIEN).map(([k, q]) => (
                <span key={k} className={`rounded-full px-3 py-1 font-semibold ${q.className}`}>
                  {q.label}
                </span>
              ))}
            </div>
            <ol className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {moduleData.recorrido.map((r, i) => (
                <li
                  key={r.paso}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="fb-check">{i + 1}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${QUIEN[r.quien].className}`}>
                      {QUIEN[r.quien].label}
                    </span>
                  </div>
                  <h3 className="heading-font mt-3 text-lg">{r.paso}</h3>
                  <p className="mt-1 text-slate-600">{r.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Así se ve — capturas reales del restaurante demo */}
      {moduleData.galeria?.length > 0 && (
        <section className="fb-section">
          <div className="fb-container">
            <h2 className="heading-font text-3xl md:text-4xl text-center">
              Así se ve funcionando
            </h2>
            <p className="mt-3 text-center text-sm text-slate-500">
              Pantallas reales del sistema en un restaurante demo · Datos ficticios
            </p>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {moduleData.galeria.map((g) => (
                <figure key={g.src} className="m-0">
                  {/* En celular, tocar la imagen la abre completa para hacer zoom. */}
                  <a href={g.src} target="_blank" rel="noopener noreferrer">
                    <img
                      src={g.src}
                      srcSet={g.srcSm ? `${g.srcSm} 800w, ${g.src} 1600w` : undefined}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      alt={g.alt}
                      loading="lazy"
                      className="w-full rounded-2xl border border-slate-200 shadow-sm"
                    />
                  </a>
                  <figcaption className="mt-3 text-base text-slate-600">{g.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ejemplo concreto */}
      {moduleData.ejemplo && (
        <section className="fb-section fb-section-muted">
          <div className="fb-container">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-font text-3xl md:text-4xl text-center">
                {moduleData.ejemplo.titulo}
              </h2>
              <ol className="mt-8 space-y-4">
                {moduleData.ejemplo.pasos.map((p) => (
                  <li
                    key={p}
                    className="rounded-2xl border border-slate-200 bg-white p-5 text-base text-slate-700 shadow-sm"
                  >
                    {p}
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-sm text-slate-500">{moduleData.ejemplo.nota}</p>
            </div>
          </div>
        </section>
      )}

      {/* Lo que incluye */}
      {moduleData.features?.length > 0 && (
        <section className="fb-section fb-section-muted">
          <div className="fb-container">
            <h2 className="heading-font text-3xl md:text-4xl text-center">
              Lo que incluye
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {moduleData.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="heading-font text-xl">{feature.title}</h3>
                  <p className="mt-2 text-slate-600">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Qué te toca, en qué plan viene y hasta dónde llega */}
      {(moduleData.restaurante || moduleData.planTexto || moduleData.limites) && (
        <section className="fb-section">
          <div className="fb-container grid gap-6 lg:grid-cols-3">
            {moduleData.restaurante && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="heading-font text-2xl">Lo que te toca a ti</h2>
                <ul className="mt-4 space-y-3">
                  {moduleData.restaurante.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-slate-700">
                      <span className="fb-check">✓</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {moduleData.planTexto && (
              <div
                className="rounded-2xl bg-white p-6 shadow-sm"
                style={{ border: "2px solid var(--brand-blue)" }}
              >
                <h2 className="heading-font text-2xl">En qué plan viene</h2>
                <p className="mt-4 text-slate-700">{moduleData.planTexto}</p>
                <Link href="/precio" className="fb-button mt-5 no-underline">
                  Ver planes
                </Link>
              </div>
            )}
            {moduleData.limites && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="heading-font text-2xl">Límites claros</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                  {moduleData.limites.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Preguntas frecuentes */}
      {moduleData.faq?.length > 0 && (
        <section className="fb-section fb-section-muted">
          <div className="fb-container">
            <div className="mx-auto max-w-3xl">
              <h2 className="heading-font text-3xl md:text-4xl text-center">
                Preguntas frecuentes
              </h2>
              <div className="mt-8 space-y-3">
                {moduleData.faq.map((f) => (
                  <details
                    key={f.q}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <summary className="cursor-pointer text-lg font-semibold text-slate-800">
                      {f.q}
                    </summary>
                    <p className="mt-3 text-slate-600">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Beneficios */}
      {moduleData.benefits?.length > 0 && (
        <section className="fb-section">
          <div className="fb-container">
            <h2 className="heading-font text-3xl md:text-4xl text-center">
              Beneficios
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
              {moduleData.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="fb-check">✓</span>
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="fb-section">
        <div className="fb-container">
          <div className="fb-cta text-center">
            <h2 className="heading-font text-3xl md:text-4xl max-w-2xl mx-auto">
              Agenda una demo y míralo con tu operación
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Te mostramos cómo {moduleData.title} funciona dentro de tu
              restaurante.
            </p>
            <Link href="/contacto" className="fb-button mt-7">
              Agendar demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
