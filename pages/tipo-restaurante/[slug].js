import Head from "next/head";
import Link from "next/link";
import NavBar from "../../components/foodbot/NavBar";
import { restaurantTypes } from "../../data/restaurantTypes";

export async function getStaticPaths() {
  return {
    paths: Object.keys(restaurantTypes).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { data: restaurantTypes[params.slug] } };
}

/* Muestra la imagen si existe; si no, un placeholder con la descripción. */
function ImageSlot({ image, className }) {
  if (image?.src) {
    return <img src={image.src} alt={image.alt} className={className} />;
  }
  return (
    <div className={`fb-img-placeholder ${className || ""}`}>
      <span>{image?.alt || "Imagen"}</span>
    </div>
  );
}

export default function RestaurantTypePage({ data }) {
  return (
    <div>
      <Head>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
      </Head>
      <NavBar />

      {/* 1. Hero */}
      <section className="fb-hero">
        <div className="fb-container">
          <div className="fb-hero-grid">
            <div>
              <span className="fb-pill">{data.hero.pill}</span>
              <h1 className="heading-font mt-5 text-4xl md:text-5xl font-semibold leading-tight">
                {data.hero.title}
              </h1>
              <p className="mt-5 text-lg text-slate-600">
                {data.hero.subtitle}
              </p>
              <a href={data.hero.ctaHref} className="fb-button mt-7">
                {data.hero.cta}
              </a>
            </div>
            <div className="fb-hero-visual">
              <ImageSlot
                image={data.hero.image}
                className="fb-hero-visual-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problema */}
      <section className="fb-section fb-section-muted">
        <div className="fb-container">
          <h2 className="heading-font text-3xl md:text-4xl text-center max-w-3xl mx-auto">
            {data.problem.title}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {data.problem.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="heading-font text-xl">{card.title}</h3>
                <p className="mt-2 text-slate-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Cómo funciona */}
      <section id="como-funciona" className="fb-section">
        <div className="fb-container">
          <h2 className="heading-font text-3xl md:text-4xl text-center max-w-3xl mx-auto">
            {data.how.title}
          </h2>
          <div className="mt-10 max-w-3xl mx-auto flex flex-col gap-5">
            {data.how.steps.map((step) => (
              <div
                key={step.n}
                className="flex gap-4 items-start rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="fb-step-num">{step.n}</span>
                <div>
                  <h3 className="heading-font text-lg">{step.title}</h3>
                  <p className="mt-1 text-slate-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonio */}
      <section className="fb-section fb-section-muted">
        <div className="fb-container">
          <div className="fb-feature-grid">
            <div className="fb-feature-visual fb-feature-visual--image">
              <ImageSlot
                image={data.testimonial.image}
                className="fb-feature-visual-image"
              />
            </div>
            <div>
              <span className="fb-pill">{data.testimonial.pill}</span>
              <blockquote className="heading-font mt-5 text-2xl md:text-3xl leading-snug text-slate-800">
                “{data.testimonial.quote}”
              </blockquote>
              <p className="mt-5 text-lg font-semibold">
                {data.testimonial.name}
              </p>
              <p className="text-slate-500">{data.testimonial.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Beneficios */}
      <section className="fb-section">
        <div className="fb-container">
          <h2 className="heading-font text-3xl md:text-4xl text-center">
            {data.benefits.title}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.benefits.items.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="fb-check">✓</span>
                <h3 className="heading-font mt-3 text-lg">{benefit.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Galería */}
      <section className="fb-section fb-section-muted">
        <div className="fb-container">
          <h2 className="heading-font text-3xl md:text-4xl text-center max-w-3xl mx-auto">
            {data.gallery.title}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {data.gallery.images.map((image, i) => (
              <div
                key={i}
                className="fb-feature-visual fb-feature-visual--image"
              >
                <ImageSlot image={image} className="fb-feature-visual-image" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Cierre */}
      <section className="fb-section">
        <div className="fb-container">
          <div className="fb-cta text-center">
            <h2 className="heading-font text-3xl md:text-4xl max-w-3xl mx-auto">
              {data.closing.title}
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              {data.closing.text}
            </p>
            <Link href={data.closing.ctaHref} className="fb-button mt-7">
              {data.closing.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
