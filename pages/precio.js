import { useState } from "react";
import Link from "next/link";
import NavBar from "../components/foodbot/NavBar";
import Seo from "../components/Seo";
import { growthsuitePlans, planById } from "../data/growthsuitePlans";
import { growthsuiteModules } from "../data/growthsuiteModules";

/**
 * Precio — tres planes. El copy explica cómo funcionan los módulos ahora: se encienden por
 * plan, y el de arriba contiene al de abajo. Antes esta página prometía "todo Growthsuite"
 * por $799, que ya no es cierto desde que web, reservaciones, marketing y RRHH son módulos.
 *
 * Al elegir una tarjeta, la sección de abajo explica qué hacemos por ese precio. Sale del
 * mismo catálogo de módulos, así que no hay un segundo texto que se desincronice.
 */
export default function Precio() {
  const [elegidoId, setElegidoId] = useState(
    growthsuitePlans.find((p) => p.highlight)?.id || growthsuitePlans[0].id
  );
  const elegido = planById(elegidoId);
  const incluyeElegido = elegido.includesPlanId
    ? planById(elegido.includesPlanId)
    : null;
  const modulosElegido = growthsuiteModules.filter((m) => m.plan === elegido.id);

  return (
    <div>
      <Seo
        title="Precio y planes de Growthsuite para restaurantes"
        description="Tres planes: Básico $799 con los módulos de operación, Impulso $4,999 que suma web, reservaciones y marketing, e Impulso + Talento $6,999 que además te busca personal, lleva el checklist y la asistencia."
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
            <p className="mt-2 text-sm text-slate-500">
              Elige un plan para ver qué hacemos por ese precio.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {growthsuitePlans.map((plan) => {
              const incluye = plan.includesPlanId
                ? planById(plan.includesPlanId)
                : null;
              const activo = plan.id === elegidoId;
              return (
                <div
                  key={plan.id}
                  role="button"
                  tabIndex={0}
                  aria-pressed={activo}
                  onClick={() => setElegidoId(plan.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setElegidoId(plan.id);
                    }
                  }}
                  className="fb-feature-card flex cursor-pointer flex-col transition-shadow"
                  style={
                    activo
                      ? {
                          borderColor: "var(--brand-blue)",
                          borderWidth: 2,
                          boxShadow: "0 12px 32px rgba(15, 23, 42, 0.12)",
                        }
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
                    {plan.priceFootnote && <sup className="text-xl">*</sup>}
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
                  {plan.fineprint && (
                    <p className="mt-1 text-xs text-slate-500">{plan.fineprint}</p>
                  )}
                  {plan.addonLabel && (
                    <p className="mt-3 text-sm font-semibold text-slate-700">{plan.addonLabel}</p>
                  )}

                  {plan.monthlyPriceLabel && (
                    <p className="mt-3 text-sm text-slate-500">
                      Mes a mes: {plan.monthlyPriceLabel} MXN / {plan.period}
                    </p>
                  )}
                  {plan.priceFootnote && (
                    <p className="mt-1 text-sm text-slate-400">*{plan.priceFootnote}</p>
                  )}

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

          <div className="mx-auto mt-16 max-w-4xl" aria-live="polite">
            <h2 className="heading-font text-center text-3xl font-semibold">
              {elegido.name}: ¿qué hacemos por ese precio?
            </h2>
            <p className="mt-3 text-center text-lg text-slate-600">{elegido.tagline}.</p>
            {incluyeElegido && (
              <p className="mt-2 text-center text-sm font-semibold text-slate-700">
                Todo el plan {incluyeElegido.name}, más:
              </p>
            )}

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {modulosElegido.map((m) => (
                <Link
                  key={m.id}
                  href={`/modulo/${m.slug}`}
                  className="rounded-2xl border border-slate-200 bg-white p-6 no-underline shadow-sm hover:border-slate-300"
                >
                  <h3 className="heading-font text-xl text-primary">{m.title}</h3>
                  <p className="mt-2 text-slate-600">{m.description}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-primary">
                    Ver el módulo →
                  </span>
                </Link>
              ))}
            </div>

            {elegido.pasos && (
              <>
                <h3 className="heading-font mt-12 text-2xl">Cómo es cada búsqueda</h3>
                <ol className="mt-6 space-y-4">
                  {elegido.pasos.map(([titulo, texto], i) => (
                    <li key={titulo} className="flex items-start gap-3">
                      <span className="fb-check">{i + 1}</span>
                      <p className="text-base text-slate-700">
                        <strong>{titulo}.</strong> {texto}
                      </p>
                    </li>
                  ))}
                </ol>
              </>
            )}
            {elegido.limites && (
              <p className="mt-8 text-sm text-slate-500">{elegido.limites}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
