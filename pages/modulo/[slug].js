import Head from "next/head";
import Link from "next/link";
import NavBar from "../../components/foodbot/NavBar";
import { growthsuiteModules } from "../../data/growthsuiteModules";

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
      <Head>
        <title>{moduleData.title} | GrowthSuite</title>
        <meta name="description" content={moduleData.description} />
      </Head>
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
                <img
                  src={moduleData.visualImage}
                  alt={moduleData.visualAlt || moduleData.title}
                  className="fb-hero-visual-image"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Detalle */}
      {moduleData.detail && (
        <section className="fb-section">
          <div className="fb-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-font text-3xl md:text-4xl">
                ¿De qué trata?
              </h2>
              <p className="mt-4 text-lg text-slate-600">{moduleData.detail}</p>
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
