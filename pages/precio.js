import Head from "next/head";
import NavBar from "../components/foodbot/NavBar";
import { growthsuiteModules } from "../data/growthsuiteModules";

const uniquePlan = {
  title: "Plan único",
  tag: "Para todo tipo de restaurante",
  price: "$799 MXN / mes",
  description: "Todo Growthsuite en una sola suscripción mensual.",
  features: growthsuiteModules.map((module) => module.title),
};

export default function Precio() {
  return (
    <div>
      <Head>
        <title>Precio | Growthsuite</title>
      </Head>
      <NavBar />

      <section className="fb-section">
        <div className="fb-container">
          <div className="text-center">
            <span className="fb-pill">Precio</span>
            <h1 className="heading-font mt-4 text-4xl font-semibold">
              Un solo plan con todos los módulos
            </h1>
          </div>

          <div className="mt-10 max-w-3xl mx-auto">
            <div className="fb-feature-card text-center">
              <h2 className="heading-font text-3xl">{uniquePlan.title}</h2>
              <p className="mt-2 text-base font-semibold text-slate-500">
                {uniquePlan.tag}
              </p>
              <p className="mt-3 text-3xl font-semibold text-primary">
                {uniquePlan.price}
              </p>
              <p className="mt-4 text-base text-slate-600">
                {uniquePlan.description}
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-slate-700 sm:grid-cols-2 text-left">
                {uniquePlan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
                  >
                    <span className="fb-check" aria-hidden="true">
                      &#10003;
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/525531491808?text=${encodeURIComponent(
                  `Hola, quiero una demo del ${uniquePlan.title} (${uniquePlan.price}).`
                )}`}
                className="fb-button fb-button-whatsapp mt-8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar demo por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
