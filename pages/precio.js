import Link from "next/link";
import NavBar from "../components/foodbot/NavBar";
import Seo from "../components/Seo";
import { growthsuitePlans, planById } from "../data/growthsuitePlans";

/**
 * Precio — tres planes. El copy explica cómo funcionan los módulos ahora: se encienden por
 * plan, y el de arriba contiene al de abajo. Antes esta página prometía "todo Growthsuite"
 * por $799, que ya no es cierto desde que web, reservaciones, marketing y RRHH son módulos.
 */
export default function Precio() {
  return (
    <div>
      <Seo
        title="Precio y planes de Growthsuite para restaurantes"
        description="Tres planes: Básico $799 con los módulos de operación, Impulso $4,999 que suma web, reservaciones, marketing y recursos humanos, y Empresas a la medida."
        path="/precio"
      />
      <NavBar />

      <section className="fb-section">
        <div className="fb-container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="fb-pill">Precio</span>
            <h1 className="heading-font mt-4 text-4xl font-semibold md:text-5xl">
              Opera hoy. Crece cuando quieras.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Growthsuite se enciende por módulos. El plan{" "}
              <strong>Básico</strong> trae los de operación; <strong>Impulso</strong>{" "}
              incluye esos mismos y suma los de crecimiento. Cambias de plan cuando
              lo necesites.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {growthsuitePlans.map((plan) => {
              const incluye = plan.includesPlanId
                ? planById(plan.includesPlanId)
                : null;
              return (
                <div
                  key={plan.id}
                  className="fb-feature-card flex flex-col"
                  style={
                    plan.highlight
                      ? { borderColor: "var(--brand-blue)", borderWidth: 2 }
                      : undefined
                  }
                >
                  {plan.highlight && (
                    <span className="fb-pill self-start">Más elegido</span>
                  )}

                  <h2 className="heading-font mt-3 text-2xl">{plan.name}</h2>
                  <p className="mt-1 text-sm text-slate-500">{plan.tagline}</p>

                  <p className="mt-5 text-4xl font-semibold text-primary">
                    {plan.priceLabel}
                    {plan.period && (
                      <span className="ml-2 text-sm font-normal text-slate-500">
                        MXN / {plan.period}
                      </span>
                    )}
                  </p>

                  {incluye && (
                    <p className="mt-5 text-sm font-semibold text-slate-700">
                      Todo el plan {incluye.name}, más:
                    </p>
                  )}

                  <ul className="mt-3 flex-1 space-y-2">
                    {plan.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-2 text-base">
                        <span className="fb-check">✓</span>
                        {f.href ? (
                          <Link href={f.href} className="text-slate-700 no-underline hover:text-primary">
                            {f.label}
                          </Link>
                        ) : (
                          <span className="text-slate-700">{f.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-xs text-slate-500">{plan.note}</p>

                  <Link href={plan.ctaHref} className="fb-button mt-5 no-underline">
                    {plan.ctaLabel}
                  </Link>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-500">
            Todos los planes incluyen soporte, actualizaciones y tus datos en la nube.
            ¿No sabes cuál te toca? Agenda una demo y lo vemos con tu operación.
          </p>
        </div>
      </section>
    </div>
  );
}
