import Head from "next/head";

const sections = [
  { id: "impacto-1", num: "3.1", title: "Impacto operativo" },
  { id: "impacto-2", num: "3.2", title: "Impacto en toma de decisiones" },
  { id: "impacto-3", num: "3.3", title: "Impacto comercial" },
  { id: "impacto-4", num: "3.4", title: "Impacto tecnológico" },
  { id: "impacto-5", num: "3.5", title: "Control y trazabilidad" },
  { id: "conclusion", num: "4", title: "Conclusión" },
  { id: "control-documental", num: "5", title: "Control documental" },
];

export default function ImpactoResultados() {
  return (
    <div>
      <Head>
        <title>Evidencia de impacto y resultados | Growthsuite</title>
        <meta
          name="description"
          content="Evidencia de impacto y resultados de Growthsuite en restaurantes: control operativo, toma de decisiones, adopción comercial y trazabilidad."
        />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="googlebot" content="noindex,nofollow" />
      </Head>

      {/* Hero */}
      <section className="pp-hero">
        <div className="fb-container">
          <div className="pp-hero-inner">
            <span className="pp-badge">Evidencia de impacto</span>
            <h1 className="pp-hero-title">Impacto y resultados</h1>
            <p className="pp-hero-sub">
              Growthsuite ha generado impacto operativo en restaurantes
              mediante mayor control de ventas, comandas, caja, cancelaciones,
              descuentos, productos, inventario y reportes. La plataforma
              permite que dueños y gerentes consulten información clave desde
              WhatsApp, mejorando la toma de decisiones y reduciendo la
              dependencia de reportes manuales.
            </p>
            <div className="pp-hero-meta">
              <span>Última actualización: abril de 2026</span>
              <span className="pp-hero-dot" aria-hidden="true" />
              <span>Versión 1.0</span>
              <span className="pp-hero-dot" aria-hidden="true" />
              <span>Growthsuite</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="fb-section" style={{ paddingTop: "2rem" }}>
        <div className="fb-container">
          <div className="pp-layout">
            {/* Sidebar TOC */}
            <aside className="pp-sidebar">
              <nav className="pp-toc">
                <p className="pp-toc-label">Contenido</p>
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="pp-toc-link">
                    <span className="pp-toc-num">{s.num}</span>
                    {s.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Main content */}
            <div className="pp-content">
              <p className="pp-intro">
                Esta página reúne la evidencia de impacto y resultados de
                Growthsuite, una plataforma tecnológica para restaurantes que
                integra punto de venta, comandero, caja, monitores de
                producción, reportes e inteligencia conectada a WhatsApp. La
                solución ya cuenta con adopción inicial en clientes B2B del
                sector gastronómico.
              </p>

              {/* 3.1 Impacto operativo */}
              <article id="impacto-1" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">3.1</span>
                  <h2>Impacto operativo</h2>
                </div>

                <div className="pp-data-section">
                  <p>
                    Growthsuite permite que los restaurantes tengan mayor
                    control de su operación diaria mediante herramientas
                    digitales para punto de venta, comandero, caja, reportes,
                    inventario y asistencia por WhatsApp.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Resultados observados</h3>
                  <ul>
                    <li>Mayor visibilidad de ventas diarias.</li>
                    <li>Mejor control de comandas.</li>
                    <li>Reducción de errores en captura de órdenes.</li>
                    <li>Mayor trazabilidad en cancelaciones y descuentos.</li>
                    <li>Mejor seguimiento de caja y cierres de turno.</li>
                    <li>Mayor facilidad para consultar información operativa.</li>
                  </ul>
                </div>
              </article>

              {/* 3.2 Toma de decisiones */}
              <article id="impacto-2" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">3.2</span>
                  <h2>Impacto en toma de decisiones</h2>
                </div>

                <div className="pp-data-section">
                  <p>
                    Uno de los principales resultados de Growthsuite es
                    permitir que el dueño o gerente consulte información clave
                    sin depender únicamente de reportes manuales o comunicación
                    verbal del equipo.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Ejemplos de decisiones habilitadas</h3>
                  <ul>
                    <li>Identificar productos más vendidos.</li>
                    <li>Detectar descuentos inusuales.</li>
                    <li>Revisar cancelaciones por usuario.</li>
                    <li>Comparar ventas entre días.</li>
                    <li>Consultar desempeño de operación desde WhatsApp.</li>
                    <li>Revisar caja y cortes.</li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Resultado</strong>
                    <p>
                      La empresa ayuda a convertir datos operativos del
                      restaurante en información accionable para la toma de
                      decisiones.
                    </p>
                  </div>
                </div>
              </article>

              {/* 3.3 Impacto comercial */}
              <article id="impacto-3" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">3.3</span>
                  <h2>Impacto comercial</h2>
                </div>

                <div className="pp-data-section">
                  <p>
                    Growthsuite ya cuenta con clientes reales dentro del sector
                    gastronómico, lo que valida la necesidad del mercado y la
                    aplicabilidad de la solución.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Clientes usados como evidencia comercial</h3>
                  <ul>
                    <li>MR LUCHO</li>
                    <li>FINCA</li>
                    <li>BAMBUU</li>
                    <li>CANTINA LA LLORONA</li>
                    <li>MERKAVA</li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Resultado</strong>
                    <p>
                      La empresa cuenta con adopción inicial en restaurantes y
                      negocios relacionados, demostrando que existe demanda por
                      herramientas tecnológicas especializadas para operación
                      restaurantera.
                    </p>
                  </div>
                </div>
              </article>

              {/* 3.4 Impacto tecnológico */}
              <article id="impacto-4" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">3.4</span>
                  <h2>Impacto tecnológico</h2>
                </div>

                <div className="pp-data-section">
                  <p>
                    Growthsuite combina software operativo con inteligencia
                    artificial aplicada a un caso de uso concreto: la operación
                    restaurantera.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Componentes tecnológicos</h3>
                  <ul>
                    <li>POS para restaurantes.</li>
                    <li>Comandero digital.</li>
                    <li>Caja y turnos.</li>
                    <li>Reportes operativos.</li>
                    <li>Control de productos.</li>
                    <li>Inventario y recetas.</li>
                    <li>Asistente conectado a WhatsApp.</li>
                    <li>Arquitectura escalable para múltiples restaurantes.</li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Resultado</strong>
                    <p>
                      La plataforma avanza hacia un modelo de inteligencia
                      vertical para restaurantes, donde el sistema no solo
                      registra información, sino que ayuda a interpretarla y
                      convertirla en acciones.
                    </p>
                  </div>
                </div>
              </article>

              {/* 3.5 Control y trazabilidad */}
              <article id="impacto-5" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">3.5</span>
                  <h2>Impacto en control y trazabilidad</h2>
                </div>

                <div className="pp-data-section">
                  <p>
                    El sistema permite registrar eventos operativos importantes
                    como ventas, descuentos, cancelaciones, pagos, turnos y
                    usuarios responsables.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Resultados</h3>
                  <ul>
                    <li>Mayor claridad sobre quién realizó una operación.</li>
                    <li>Mejor control de permisos.</li>
                    <li>Registro de motivos de cancelación.</li>
                    <li>Registro de descuentos autorizados.</li>
                    <li>Seguimiento de turnos de caja.</li>
                    <li>Separación de responsabilidades por rol.</li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Resultado</strong>
                    <p>
                      Growthsuite reduce la dependencia de controles informales
                      y mejora la administración interna del restaurante.
                    </p>
                  </div>
                </div>
              </article>

              {/* Conclusión */}
              <article id="conclusion" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">4</span>
                  <h2>Conclusión</h2>
                </div>

                <p>
                  Growthsuite presenta indicadores actuales de tracción
                  comercial, adopción inicial, ventas registradas, clientes B2B
                  activos y desarrollo tecnológico aplicado al sector
                  restaurantero.
                </p>
                <p>
                  El impacto principal se concentra en mejorar la productividad
                  operativa, aumentar el control administrativo, reducir
                  errores, facilitar la toma de decisiones y permitir que los
                  restaurantes consulten información clave desde canales
                  simples como WhatsApp.
                </p>
                <p>
                  La evidencia muestra que Growthsuite no es únicamente un
                  sistema POS, sino una plataforma escalable orientada a
                  construir un cerebro operativo para restaurantes y,
                  posteriormente, para otras industrias con procesos
                  repetitivos, datos transaccionales y necesidad de
                  inteligencia aplicada.
                </p>
              </article>

              {/* Control documental */}
              <article id="control-documental" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">5</span>
                  <h2>Control documental</h2>
                </div>

                <div className="pp-card-grid">
                  <div className="pp-info-card">
                    <span className="pp-info-label">Documento</span>
                    <span className="pp-info-value">
                      Evidencia de impacto y resultados
                    </span>
                  </div>
                  <div className="pp-info-card">
                    <span className="pp-info-label">Versión</span>
                    <span className="pp-info-value">1.0</span>
                  </div>
                  <div className="pp-info-card">
                    <span className="pp-info-label">Responsable</span>
                    <span className="pp-info-value">Growthsuite</span>
                  </div>
                  <div className="pp-info-card">
                    <span className="pp-info-label">Última actualización</span>
                    <span className="pp-info-value">Abril 2026</span>
                  </div>
                </div>

                <p>
                  Documento utilizado como evidencia para repositorio digital
                  de impacto y resultados de Growthsuite.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
