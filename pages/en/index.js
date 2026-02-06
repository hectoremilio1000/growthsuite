import Head from "next/head";
import Link from "next/link";
import NavBar from "../../components/foodbot/NavBar";

const features = [
  {
    id: "order-hub",
    title: "Order hub",
    kicker: "One screen for every channel",
    description:
      "Aggregate delivery orders in one dashboard and close the day with clean reconciliations.",
    chips: ["Aggregators", "Reconciliation", "Operations"],
    visualImage: "/imagen4.png",
    visualAlt: "Growthsuite syncs orders across POS, kitchen, and WhatsApp",
  },
  {
    id: "pos",
    title: "Point of sale",
    kicker: "The core of your restaurant",
    description:
      "Cloud POS with tables, reporting, and customer profiles built in.",
    chips: ["Tables", "Reports", "Customers"],
  },
  {
    id: "online-store",
    title: "Online store",
    kicker: "Your direct channel",
    description:
      "Run delivery and pickup without commissions while keeping your brand experience.",
    chips: ["Pickup", "Delivery", "Brand"],
  },
  {
    id: "bots",
    title: "Bots",
    kicker: "Instant answers, less effort",
    description:
      "Automate WhatsApp and Messenger responses so your team can focus on service.",
    chips: ["WhatsApp", "Messenger", "FAQ"],
  },
];

export default function EnglishHome() {
  return (
    <div>
      <Head>
        <title>Growthsuite | Restaurant platform</title>
      </Head>

      <NavBar />

      <section className="fb-hero">
        <div className="fb-container fb-hero-grid">
          <div>
            <span className="fb-pill">Growthsuite</span>
            <h1 className="heading-font mt-6 text-4xl font-semibold leading-tight md:text-5xl">
              Ready to take your restaurant to the next level?
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Growthsuite is the all-in-one platform that helps restaurants sell
              more, run smarter, and build lasting customer relationships.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto" className="fb-button">
                Schedule a demo
              </Link>
              <Link href="/#central-de-pedidos" className="fb-button-outline">
                Explore modules
              </Link>
            </div>
          </div>
          <div className="fb-hero-visual">
            <img
              src="/foto_1.png"
              alt="Growthsuite keeps orders and inventory in sync"
              className="fb-hero-visual-image"
            />
          </div>
        </div>
      </section>

      {features.map((feature, index) => (
        <section
          key={feature.id}
          id={feature.id}
          className={`fb-section ${index % 2 === 1 ? "fb-section-muted" : ""}`}
        >
          <div className="fb-container fb-feature-grid">
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <p className="text-sm font-semibold text-slate-500">
                {feature.kicker}
              </p>
              <h2 className="heading-font mt-2 text-3xl">
                {feature.title}
              </h2>
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
                    <div className="visual-chip">Operations aligned</div>
                    <div className="visual-chip">Happy customers</div>
                    <div className="visual-chip">More revenue</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="fb-section">
        <div className="fb-container">
          <div className="fb-cta">
            <p className="text-sm font-semibold text-slate-500">Get started</p>
            <h2 className="heading-font mt-2 text-3xl md:text-4xl">
              Build a restaurant operation that scales with you.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Book a personalized demo and discover how Growthsuite can help you
              sell more with less friction.
            </p>
            <div className="mt-6">
              <Link href="/contacto" className="fb-button">
                Schedule a demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
