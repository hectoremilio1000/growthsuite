import Head from "next/head";

const sections = [
  { id: "kpi-1", num: "1.1", title: "Clientes B2B activos" },
  { id: "kpi-2", num: "1.2", title: "Concentración de ingresos" },
  { id: "kpi-3", num: "1.3", title: "Ventas anuales" },
  { id: "kpi-4", num: "1.4", title: "Modelo de ingresos" },
  { id: "kpi-5", num: "1.5", title: "Productividad operativa" },
  { id: "kpi-6", num: "1.6", title: "Precisión del modelo de IA" },
  { id: "kpi-7", num: "1.7", title: "ROI operativo" },
  { id: "kpi-8", num: "1.8", title: "Satisfacción del cliente" },
  { id: "kpi-9", num: "1.9", title: "Escalabilidad del sistema" },
  { id: "resumen-kpis", num: "2", title: "Resumen de KPIs" },
  { id: "control-documental", num: "3", title: "Control documental" },
];

export default function IndicadoresKpis() {
  return (
    <div>
      <Head>
        <title>Indicadores actuales — KPIs | Growthsuite</title>
        <meta
          name="description"
          content="Indicadores actuales y KPIs de Growthsuite: clientes B2B, ventas, modelo de ingresos, productividad y escalabilidad."
        />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="googlebot" content="noindex,nofollow" />
      </Head>

      {/* Hero */}
      <section className="pp-hero">
        <div className="fb-container">
          <div className="pp-hero-inner">
            <span className="pp-badge">Indicadores actuales</span>
            <h1 className="pp-hero-title">KPIs de Growthsuite</h1>
            <p className="pp-hero-sub">
              Indicadores actuales de Growthsuite relacionados con clientes B2B
              activos, ventas anuales, concentración de ingresos por cliente,
              modelo de ingresos, productividad operativa, precisión funcional
              del asistente de IA, retorno operativo, satisfacción del cliente
              y escalabilidad del sistema.
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
                Growthsuite es una plataforma tecnológica para restaurantes que
                integra punto de venta, operación diaria, reportes, inventario,
                caja, comandero, monitores de producción y un asistente
                conectado a WhatsApp para que dueños y gerentes puedan
                consultar información clave del negocio en tiempo real. Este
                documento reúne los indicadores actuales del negocio.
              </p>

              {/* 1.1 Clientes B2B activos */}
              <article id="kpi-1" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">1.1</span>
                  <h2>Clientes B2B activos</h2>
                </div>

                <div className="pp-data-section">
                  <p>
                    Growthsuite actualmente atiende restaurantes y negocios del
                    sector gastronómico bajo un modelo B2B.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Clientes principales</h3>
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
                    <strong>Indicador</strong>
                    <p>
                      Número de clientes B2B activos: 5 clientes principales
                      identificados.
                    </p>
                  </div>
                </div>
              </article>

              {/* 1.2 Concentración de ingresos */}
              <article id="kpi-2" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">1.2</span>
                  <h2>Concentración de ingresos por cliente</h2>
                </div>

                <div className="pp-data-section">
                  <p>
                    La empresa mantiene una distribución de ingresos donde el
                    cliente principal representa aproximadamente el 10% de los
                    ingresos, mientras que otros clientes representan
                    porcentajes menores de participación.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Indicador</h3>
                  <ul>
                    <li>Cliente principal: MR LUCHO — 10% de ingresos.</li>
                    <li>
                      Otros clientes principales: participación aproximada de
                      1% cada uno.
                    </li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Interpretación</h3>
                  <p>
                    La empresa no depende completamente de un solo cliente, lo
                    cual permite construir una base comercial más diversificada
                    conforme se incorporen nuevos restaurantes al sistema.
                  </p>
                </div>
              </article>

              {/* 1.3 Ventas anuales */}
              <article id="kpi-3" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">1.3</span>
                  <h2>Ventas anuales registradas</h2>
                </div>

                <div className="pp-data-section">
                  <p>
                    Durante el periodo reportado, la empresa registra ventas
                    anuales aproximadas por $500,000 MXN.
                  </p>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Indicador</strong>
                    <p>Ventas anuales actuales: $500,000 MXN.</p>
                  </div>
                </div>

                <div className="pp-data-section">
                  <h3>Interpretación</h3>
                  <p>
                    Este monto valida que existe tracción comercial inicial y
                    capacidad de generar ingresos mediante servicios
                    tecnológicos y comerciales para restaurantes.
                  </p>
                </div>
              </article>

              {/* 1.4 Modelo de ingresos */}
              <article id="kpi-4" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">1.4</span>
                  <h2>Modelo de ingresos</h2>
                </div>

                <div className="pp-data-section">
                  <p>
                    Growthsuite opera bajo un modelo híbrido que puede incluir:
                  </p>
                  <ul>
                    <li>Suscripción SaaS.</li>
                    <li>Venta de hardware o equipos.</li>
                    <li>Servicios profesionales.</li>
                    <li>Licenciamiento.</li>
                    <li>Ingresos transaccionales.</li>
                    <li>Implementación y soporte.</li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div>
                    <strong>Indicador</strong>
                    <p>Modelo de ingresos: híbrido.</p>
                  </div>
                </div>

                <div className="pp-data-section">
                  <h3>Interpretación</h3>
                  <p>
                    El modelo permite diversificar fuentes de ingreso,
                    combinando ingresos recurrentes por software con ingresos
                    adicionales por implementación, equipamiento, integraciones
                    y servicios especializados.
                  </p>
                </div>
              </article>

              {/* 1.5 Productividad */}
              <article id="kpi-5" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">1.5</span>
                  <h2>Productividad operativa</h2>
                </div>

                <div className="pp-data-section">
                  <p>
                    Growthsuite mejora la productividad al centralizar procesos
                    que normalmente se realizan de forma manual o en sistemas
                    separados.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Procesos optimizados</h3>
                  <ul>
                    <li>Captura de órdenes.</li>
                    <li>Control de caja.</li>
                    <li>Consulta de ventas.</li>
                    <li>Revisión de cancelaciones.</li>
                    <li>Revisión de descuentos.</li>
                    <li>Gestión de productos.</li>
                    <li>Reportes gerenciales.</li>
                    <li>Consulta de información desde WhatsApp.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Indicador cualitativo</h3>
                  <p>
                    Reducción de tiempos operativos en consulta de información,
                    generación de reportes y seguimiento de operación diaria.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Interpretación</h3>
                  <p>
                    El dueño o gerente ya no necesita revisar manualmente
                    múltiples reportes o estar físicamente en el restaurante
                    para conocer información básica de la operación.
                  </p>
                </div>
              </article>

              {/* 1.6 Precisión IA */}
              <article id="kpi-6" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">1.6</span>
                  <h2>Precisión y utilidad del modelo de IA</h2>
                </div>

                <div className="pp-data-section">
                  <p>
                    El asistente de Growthsuite está orientado a interpretar
                    preguntas operativas del restaurante y responder con
                    información basada en datos reales del negocio.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Ejemplos de consultas</h3>
                  <ul>
                    <li>¿Cuánto vendí hoy?</li>
                    <li>¿Cuánto vendí ayer?</li>
                    <li>¿Qué producto se vendió más?</li>
                    <li>¿Quién canceló más?</li>
                    <li>¿Cuánto tengo en descuentos?</li>
                    <li>¿Cómo va la caja?</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Indicador</h3>
                  <p>
                    Capacidad funcional actual: interpretación de preguntas
                    operativas y consulta de datos estructurados del
                    restaurante.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Interpretación</h3>
                  <p>
                    El sistema no se limita a responder texto genérico, sino
                    que busca conectar la inteligencia artificial con fuentes
                    reales de operación del restaurante.
                  </p>
                </div>
              </article>

              {/* 1.7 ROI */}
              <article id="kpi-7" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">1.7</span>
                  <h2>Retorno de inversión operativo</h2>
                </div>

                <div className="pp-data-section">
                  <p>
                    El valor generado para el restaurante se mide principalmente
                    por la reducción de errores, mejor control administrativo y
                    mayor visibilidad de la operación.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Áreas donde se genera ROI</h3>
                  <ul>
                    <li>Menor pérdida por cancelaciones no controladas.</li>
                    <li>Mejor control de descuentos.</li>
                    <li>Mayor visibilidad de ventas.</li>
                    <li>Mejor seguimiento de caja.</li>
                    <li>Reducción de errores en comandas.</li>
                    <li>Mejor toma de decisiones del dueño o gerente.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Indicador cualitativo</h3>
                  <p>
                    ROI operativo basado en control, trazabilidad y reducción
                    de errores administrativos.
                  </p>
                </div>
              </article>

              {/* 1.8 Satisfacción */}
              <article id="kpi-8" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">1.8</span>
                  <h2>Satisfacción del cliente</h2>
                </div>

                <div className="pp-data-section">
                  <p>
                    La satisfacción del cliente se evalúa a partir de la
                    utilidad percibida por los restaurantes al tener mayor
                    control de su operación.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Factores evaluados</h3>
                  <ul>
                    <li>Facilidad de uso.</li>
                    <li>Acceso rápido a información.</li>
                    <li>Claridad en reportes.</li>
                    <li>Control de caja y comandas.</li>
                    <li>Acompañamiento en implementación.</li>
                    <li>Utilidad de WhatsApp como canal de consulta.</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>Indicador cualitativo</h3>
                  <p>
                    Clientes actuales utilizan la solución para mejorar control
                    operativo y seguimiento gerencial.
                  </p>
                </div>
              </article>

              {/* 1.9 Escalabilidad */}
              <article id="kpi-9" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">1.9</span>
                  <h2>Escalabilidad del sistema</h2>
                </div>

                <div className="pp-data-section">
                  <p>
                    Growthsuite está construido para iniciar en restaurantes,
                    pero con una arquitectura que puede evolucionar hacia otros
                    sectores donde existan procesos operativos repetitivos,
                    datos transaccionales y necesidad de asistencia
                    inteligente.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Indicador</h3>
                  <p>
                    Capacidad de replicar el sistema en múltiples restaurantes
                    bajo un modelo de software escalable.
                  </p>
                </div>

                <div className="pp-data-section">
                  <h3>Interpretación</h3>
                  <p>
                    El sistema no depende de una operación manual por cliente,
                    sino de una plataforma tecnológica que puede configurarse
                    para distintos restaurantes y, posteriormente, otros giros
                    comerciales.
                  </p>
                </div>
              </article>

              {/* Resumen de KPIs */}
              <article id="resumen-kpis" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">2</span>
                  <h2>Resumen de KPIs actuales</h2>
                </div>

                <div className="pp-card-grid">
                  <div className="pp-info-card">
                    <span className="pp-info-label">Clientes B2B principales</span>
                    <span className="pp-info-value">5</span>
                  </div>
                  <div className="pp-info-card">
                    <span className="pp-info-label">Cliente principal</span>
                    <span className="pp-info-value">MR LUCHO</span>
                  </div>
                  <div className="pp-info-card">
                    <span className="pp-info-label">Participación cliente principal</span>
                    <span className="pp-info-value">10%</span>
                  </div>
                  <div className="pp-info-card">
                    <span className="pp-info-label">Ventas anuales aproximadas</span>
                    <span className="pp-info-value">$500,000 MXN</span>
                  </div>
                  <div className="pp-info-card">
                    <span className="pp-info-label">Modelo de ingresos</span>
                    <span className="pp-info-value">Híbrido</span>
                  </div>
                  <div className="pp-info-card">
                    <span className="pp-info-label">Sector inicial</span>
                    <span className="pp-info-value">Restaurantes</span>
                  </div>
                  <div className="pp-info-card">
                    <span className="pp-info-label">Producto principal</span>
                    <span className="pp-info-value">POS conectado a WhatsApp</span>
                  </div>
                  <div className="pp-info-card">
                    <span className="pp-info-label">IA aplicada</span>
                    <span className="pp-info-value">Asistente operativo</span>
                  </div>
                  <div className="pp-info-card">
                    <span className="pp-info-label">Escalabilidad</span>
                    <span className="pp-info-value">Plataforma replicable</span>
                  </div>
                </div>

                <div className="pp-data-section">
                  <p>
                    El modelo híbrido combina SaaS, servicios, hardware,
                    licenciamiento y transaccional. La productividad mejora en
                    consulta de reportes, caja, órdenes y operación.
                  </p>
                </div>
              </article>

              {/* Control documental */}
              <article id="control-documental" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">3</span>
                  <h2>Control documental</h2>
                </div>

                <div className="pp-card-grid">
                  <div className="pp-info-card">
                    <span className="pp-info-label">Documento</span>
                    <span className="pp-info-value">
                      Indicadores actuales — KPIs
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
                  de KPIs e indicadores actuales de Growthsuite.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
