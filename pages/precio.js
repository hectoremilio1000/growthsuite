import Head from "next/head";
import NavBar from "../components/foodbot/NavBar";
import Link from "next/link";

const plans = [
  {
    title: "Esencial",
    tag: "Restaurante chico",
    price: "$799 MXN / mes",
    description: "Lo básico para comenzar a operar con Growthsuite.",
    features: [
      "POS (salón)",
      "Caja / cortes",
      "Catálogo / precios",
      "Reportes básicos",
      "WhatsApp Control (Lite): ventas del día, estado de caja, consultas simples de inventario",
    ],
  },
  {
    title: "Growth",
    tag: "Restaurante mediano",
    price: "$1,499 MXN / mes",
    description: "Optimiza ventas, operaciones y lealtad con módulos clave.",
    features: [
      "Todo Esencial",
      "Central de pedidos (si ya la tienes lista)",
      "KDS cocina/barra (1)",
      "Tableta meseros (1)",
      "Inventario recetas/mermas",
      "WhatsApp Control (Full): consultar inventario, cancelar órdenes, reportes automáticos por WhatsApp",
      "Marketing (starter): genera promo + copy + mensaje de WhatsApp (plantillas)",
    ],
  },
  {
    title: "Enterprise",
    tag: "Restaurante grande",
    price: "$2,999 MXN / mes",
    description: "Soluciones personalizadas para cadenas o grupos grandes.",
    features: [
      "Todo Growth",
      "Multi-sucursal / multi-almacén",
      "Permisos/roles avanzados",
      "SLA + onboarding serio",
      "Marketing pro: calendar, campañas, segmentos",
      "Integraciones a medida",
    ],
  },
];

export default function Precio() {
  return (
    <div>
      <Head>
        <title>Precio | Growthsuite</title>
      </Head>
      <NavBar />

      <section className="fb-section">
        <div className="fb-container">
          <span className="fb-pill">Precio</span>
          <h1 className="heading-font mt-4 text-4xl font-semibold">
            Planes flexibles para cada restaurante
          </h1>
          <p className="mt-3 text-base text-slate-600">
            Cuéntanos tu operación y diseñaremos el plan ideal para ti.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.title} className="fb-feature-card">
                <h2 className="heading-font text-2xl">{plan.title}</h2>
                <p className="mt-1 text-sm font-semibold text-slate-500">
                  {plan.tag}
                </p>
                <p className="mt-2 text-2xl font-semibold text-primary">
                  {plan.price}
                </p>
                <p className="mt-3 text-slate-600">{plan.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="fb-check" aria-hidden="true">
                        &#10003;
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/525531491808?text=${encodeURIComponent(
                    `Hola, quiero una demo del plan ${plan.title} (${plan.price}).`
                  )}`}
                  className="fb-button fb-button-whatsapp mt-6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar demo por WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
