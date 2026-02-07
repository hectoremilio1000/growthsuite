import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/foodbot/NavBar";
import { growthsuiteModules } from "../data/growthsuiteModules";

const logoCloud = [
  {
    src: "/logos/bar-bunny-universidad-logo-300x300.jpg",
    alt: "Bar Bunny",
    size: "lg",
    scale: 1.15,
  },
  {
    src: "/logos/lalloronblanco.png",
    alt: "La Llorona",
    variant: "dark",
    size: "xl",
    scale: 1.05,
  },
  {
    src: "/logos/logoDonde.png",
    alt: "Dónde",
    variant: "dark",
    size: "wide",
    scale: 1.2,
  },
  {
    src: "/logos/mayta-logo-new.svg",
    alt: "Mayta",
    variant: "soft",
    size: "wide",
    scale: 1.1,
  },
  {
    src: "/logos/mr+lucho.jpg",
    alt: "Mr Lucho",
    variant: "soft",
    size: "lg",
    scale: 1.15,
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Growthsuite | Plataforma para restaurantes</title>
        <meta
          name="description"
          content="Growthsuite reúne ventas, operación y lealtad para restaurantes en una sola plataforma."
        />
      </Head>

      <NavBar />

      <section className="fb-hero">
        <div className="fb-container fb-hero-grid">
          <div>
            <span className="fb-pill">Growthsuite</span>
            <h1 className="heading-font mt-6 text-4xl font-semibold leading-tight md:text-5xl">
              Por primera vez, controla tu restaurante desde WhatsApp
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Un Punto de Venta único conectado a tu WhatsApp para operar
              pedidos, cancelaciones e inventarios sin complicarte
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto" className="fb-button">
                Agenda una demo
              </Link>
              {/* <Link href="#central-de-pedidos" className="fb-button-outline">
                Ver módulos
              </Link> */}
            </div>
          </div>
          <div className="fb-hero-visual">
            <img
              src="/imagen_6.png"
              alt="Growthsuite sincroniza pedidos e inventario en un solo tablero"
              className="fb-hero-visual-image"
            />
          </div>
        </div>
      </section>

      <section className="fb-section fb-logo-section">
        <div className="fb-container">
          <p className="text-sm font-semibold text-blue-600">
            Ellos ya confían en nosotros
          </p>
          <div className="mt-4 fb-proof-badge-wrap fb-proof-badge-wrap--wide">
            <span className="fb-proof-badge">
              <span className="fb-proof-badge__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.5l2.7 5.47 6.03.88-4.36 4.25 1.03 6.01L12 16.9l-5.4 2.86 1.03-6.01-4.36-4.25 6.03-.88L12 2.5z" />
                </svg>
              </span>
              <img src="/meta.png" alt="Meta" />
              <span>Startup incubada en el programa Potencia de Meta.</span>
            </span>
          </div>
          <div className="fb-logo-header">
            <h2 className="heading-font text-2xl md:text-3xl text-slate-900">
              Restaurantes que operan con Growthsuite
            </h2>
            <a
              href="https://wa.me/525531491808?text=Hola%20quiero%20una%20demo%20de%20Growthsuite"
              className="fb-button-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conversemos
            </a>
          </div>
          <div className="fb-logo-panel">
            <div className="fb-logo-grid">
              {logoCloud.map((logo, index) => (
                <div
                  key={`${logo.alt}-${index}`}
                  className={`logo-card ${
                    logo.variant === "dark" ? "logo-card--dark" : ""
                  } ${logo.variant === "soft" ? "logo-card--soft" : ""} ${
                    logo.size === "lg" ? "logo-card--lg" : ""
                  } ${logo.size === "xl" ? "logo-card--xl" : ""} ${
                    logo.size === "wide" ? "logo-card--wide" : ""
                  }`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ transform: `scale(${logo.scale || 1})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {growthsuiteModules.map((feature, index) => (
        <section
          key={feature.id}
          id={feature.id}
          className={`fb-section ${index % 2 === 1 ? "fb-section-muted" : ""}`}
        >
          <div className="fb-container">
            {index === 0 && (
              <div className="mb-10">
                <h2 className="heading-font mt-2 text-3xl md:text-4xl">
                  Todo lo que necesitas en una sola plataforma
                </h2>
              </div>
            )}
            <div className="fb-feature-grid">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Módulo
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-500">
                  {feature.kicker}
                </p>
                <h2 className="heading-font mt-2 text-3xl">{feature.title}</h2>
                <p className="mt-4 text-base text-slate-600">
                  {feature.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {feature.chips.map((chip) => (
                    <span key={chip} className="fb-pill">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div
                  className={`fb-feature-visual ${
                    feature.visualImage ? "fb-feature-visual--image" : ""
                  }`}
                >
                  {feature.visualImage ? (
                    <img
                      src={feature.visualImage}
                      alt={feature.visualAlt || feature.title}
                      className="fb-feature-visual-image"
                    />
                  ) : (
                    <>
                      <div className="visual-chip">{feature.title}</div>
                      <div className="visual-chip">Operación conectada</div>
                      <div className="visual-chip">Clientes felices</div>
                      <div className="visual-chip">Más ingresos</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="fb-section">
        <div className="fb-container">
          <div className="fb-cta">
            <p className="text-sm font-semibold text-slate-500">
              Por primera vez, tu WhatsApp es tu centro de operación
            </p>

            <h2 className="heading-font mt-2 text-3xl md:text-4xl">
              Controla tu restaurante desde WhatsApp, con un Punto de Venta
              (POS) que se adapta a tu operación.
            </h2>

            <p className="mt-4 text-base text-slate-600">
              Agenda una demo personalizada y mira cómo Growthsuite conecta
              pedidos, caja e inventario para que tengas control total sin
              fricción.
            </p>

            <div className="mt-6">
              <Link href="/contacto" className="fb-button">
                Agenda una demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
