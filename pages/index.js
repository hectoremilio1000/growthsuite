import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/foodbot/NavBar";

const heroStats = [
  { label: "Integraciones (WhatsApp, POS, etc.)", value: "10+" },
  { label: "En tiempo real Pedidos y operación", value: "24/7" },
  { label: "Para empezar a operar", value: "< 1 min" },
];

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

const features = [
  {
    id: "central-de-pedidos",
    title: "Central de pedidos",
    kicker: "Un solo tablero, todas tus apps",
    description:
      "Agrupa los pedidos de delivery en una interfaz única y concilia ventas con menos fricción al cierre de caja.",
    chips: ["Agregadores", "Consolidación", "Cortes diarios"],
    visualImage: "/imagen4.png",
    visualAlt: "Growthsuite sincroniza pedidos en POS, cocina y WhatsApp",
  },
  {
    id: "punto_de_venta​",
    title: "Punto de venta​",
    kicker: "¡El corazón de la gestión de tu restaurante 💚 !",
    description:
      "Nuestro punto de venta cloudbase, no solo tiene todas las funcionalidades que tu restaurante necesita, también esta diseñado para que puedas identificar a cada uno de tus clientes.",
    chips: ["Menús", "Precios", "Disponibilidad"],
    visualImage: "/imagen_3.png",
  },
  {
    id: "tienda-en-linea",
    title: "Tienda en línea",
    kicker: "Tu canal directo sin comisiones",
    description:
      "Recibe pedidos a domicilio o pick-up con una experiencia de marca consistente y márgenes más altos.",
    chips: ["Pick-up", "Delivery propio", "Marca"],
    visualImage: "/imagen_2.png",
  },
  {
    id: "rewards",
    title: "Rewards",
    kicker: "Lealtad personalizada",
    description:
      "Diseña programas de recompensas con cashback, cumpleaños y referidos para aumentar recurrencia.",
    chips: ["Cashback", "Cumpleaños", "Referidos"],
    visualImage: "/reward.png",
  },
  {
    id: "bots",
    title: "Bots",
    kicker: "Atención en redes sin fricción",
    description:
      "Automatiza respuestas en WhatsApp y Messenger para que tu equipo se enfoque en el servicio.",
    chips: ["WhatsApp", "Messenger", "FAQ"],
    visualImage: "/bots.png",
  },
  {
    id: "control-whatsapp",
    title: "Control por WhatsApp",
    kicker: "Gestiona tu operación en segundos",
    description:
      "Desde tu WhatsApp controlas inventarios, cancelas cuentas y consultas todo en tiempo real sin abrir el POS.",
    chips: ["Inventarios", "Cancelaciones", "Tiempo real"],
    visualImage: "/imagen9.png",
  },
  {
    id: "qr-en-ticket",
    title: "QR en ticket",
    kicker: "Feedback después de cada compra",
    description:
      "Mide la satisfacción del cliente con encuestas al escanear el QR del ticket y convierte opiniones en mejoras.",
    chips: ["Encuestas", "Satisfacción", "Insights"],
    visualImage: "/imagen10.png",
  },
  // {
  //   id: "kiosko",
  //   title: "Kiosko",
  //   kicker: "Autoservicio con ticket más alto",
  //   description:
  //     "Reduce filas y permite que tus clientes ordenen a su ritmo con una experiencia digital premium.",
  //   chips: ["Autoservicio", "Upsell", "Velocidad"],
  // },
  {
    id: "monitor_pedidos",
    title: "Monitor de pedidos",
    kicker: "Adiós papel, hola velocidad",
    description:
      "Recibe comandas en tiempo real en cocina o barra. Prioriza por tiempo, reduce errores y acelera la salida de platillos y bebidas.",
    chips: ["KDS", "Cocina/Barra", "Tiempo real"],
    visualImage: "/imagen7.png",
  },
  {
    id: "tableta-de-pedidos",
    title: "Tableta de pedidos",
    kicker: "Pedidos claros, equipos ágiles",
    description:
      "Los meseros capturan órdenes desde una tableta táctil. Envía a cocina al instante, reduce errores y acelera el servicio.",
    chips: ["Comandero", "Meseros", "Envío a cocina"],
    visualImage: "/imagen8.png",
  },
  {
    id: "factura-inteligente",
    title: "Factura inteligente",
    kicker: "Cumple y reporta sin dolor",
    description:
      "Facturación integrada con reportes listos para finanzas y control operativo.",
    chips: ["Facturación", "Reportes", "Control"],
    visualImage: "/factura.avif",
  },
  // {
  //   id: "delivery-hub",
  //   title: "Delivery Hub",
  //   kicker: "Define tus reglas de entrega",
  //   description:
  //     "Configura zonas, costos y tiempos para operar tu delivery propio con claridad.",
  //   chips: ["Zonas", "Costos", "Restricciones"],
  // },
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
              Un punto de venta único conectado a tu WhatsApp para operar
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
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
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

      {features.map((feature, index) => (
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
              Controla tu restaurante desde WhatsApp, con un POS que se adapta a
              tu operación.
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
