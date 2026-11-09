import Link from "next/link";
import NavBar from "../components/foodbot/NavBar";
import Seo from "../components/Seo";

const EMAIL = "clientes@growthsuite.com.mx";

const sections = [
  { id: "responsable", num: "01", title: "Responsable" },
  { id: "datos", num: "02", title: "Datos que recabamos" },
  { id: "finalidades", num: "03", title: "Para qué los usamos" },
  { id: "consentimiento", num: "04", title: "Tu consentimiento" },
  { id: "transferencias", num: "05", title: "Con quién los compartimos" },
  { id: "conservacion", num: "06", title: "Cuánto tiempo los guardamos" },
  { id: "arco", num: "07", title: "Derechos ARCO y revocación" },
  { id: "menores", num: "08", title: "Menores de edad" },
  { id: "cambios", num: "09", title: "Cambios y contacto" },
];

export default function AvisoReclutamiento() {
  return (
    <div>
      <Seo
        title="Aviso de Privacidad para Candidatos | Growthsuite"
        description="Cómo trata Growthsuite los datos de quienes solicitan empleo o agendan una entrevista de reclutamiento por WhatsApp: datos, finalidades y derechos ARCO."
        path="/aviso-reclutamiento"
      />

      <NavBar />

      <section className="pp-hero">
        <div className="fb-container">
          <div className="pp-hero-inner">
            <span className="pp-badge">Legal</span>
            <h1 className="pp-hero-title">
              Aviso de Privacidad para Candidatos
            </h1>
            <p className="pp-hero-sub">
              Si nos escribes para buscar empleo o agendar una entrevista, este
              aviso te explica qué datos guardamos, para qué los usamos y cómo
              ejercer tus derechos.
            </p>
            <div className="pp-hero-meta">
              <span>Última actualización: 9 de noviembre de 2026</span>
              <span className="pp-hero-dot" aria-hidden="true" />
              <span>Conforme a la LFPDPPP</span>
            </div>
          </div>
        </div>
      </section>

      <section className="fb-section" style={{ paddingTop: "2rem" }}>
        <div className="fb-container">
          <div className="pp-layout">
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

            <div className="pp-content">
              <p className="pp-intro">
                Este aviso se emite conforme a la Ley Federal de Protección de
                Datos Personales en Posesión de los Particulares y aplica a los
                procesos de reclutamiento que opera Growthsuite. Para todo lo
                demás aplica nuestro{" "}
                <Link href="/privacy-policy" className="pp-link">
                  Aviso de Privacidad Integral
                </Link>
                .
              </p>

              <article id="responsable" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">01</span>
                  <h2>Responsable del tratamiento</h2>
                </div>
                <div className="pp-card-grid">
                  <div className="pp-info-card">
                    <span className="pp-info-label">Responsable</span>
                    <span className="pp-info-value">Growthsuite</span>
                  </div>
                  <div className="pp-info-card">
                    <span className="pp-info-label">Correo de privacidad</span>
                    <a href={`mailto:${EMAIL}`} className="pp-info-value pp-link">
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </article>

              <article id="datos" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">02</span>
                  <h2>Datos personales que recabamos</h2>
                </div>
                <div className="pp-data-section">
                  <ul>
                    <li>Nombre</li>
                    <li>Número de teléfono o WhatsApp</li>
                    <li>Puesto que buscas</li>
                    <li>Fecha y estado de tu entrevista</li>
                    <li>Correo electrónico, solo si decides dárnoslo</li>
                    <li>Los mensajes que intercambias con nosotros</li>
                  </ul>
                </div>
                <p>
                  No solicitamos datos personales sensibles, como salud,
                  religión, afiliación política u orientación sexual. Te pedimos
                  no enviarlos por este medio.
                </p>
              </article>

              <article id="finalidades" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">03</span>
                  <h2>Para qué usamos tus datos</h2>
                </div>
                <div className="pp-data-section">
                  <ul>
                    <li>Atender tu interés en un empleo</li>
                    <li>Agendar, confirmar, cambiar o cancelar tu entrevista</li>
                    <li>Darle seguimiento a tu proceso de reclutamiento</li>
                    <li>
                      Comunicarnos contigo por WhatsApp o, si nos lo diste, por
                      correo electrónico
                    </li>
                    <li>
                      Que una persona de nuestro equipo te atienda cuando lo
                      pidas
                    </li>
                  </ul>
                </div>
                <p>
                  Estas finalidades son necesarias para el proceso. No usamos
                  tus datos de candidato para enviarte publicidad.
                </p>
              </article>

              <article id="consentimiento" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">04</span>
                  <h2>Tu consentimiento</h2>
                </div>
                <p>
                  Antes de pedirte datos te preguntamos si aceptas este aviso.
                  Si respondes que no, no continuamos con el registro de tu
                  solicitud. Guardamos la fecha y la versión del aviso que
                  aceptaste.
                </p>
              </article>

              <article id="transferencias" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">05</span>
                  <h2>Con quién compartimos tus datos</h2>
                </div>
                <p>
                  Growthsuite no vende tu información. Solo la compartimos con:
                </p>
                <div className="pp-data-section">
                  <ul>
                    <li>
                      Proveedores que nos ayudan a operar el servicio (hosting,
                      base de datos, mensajería y correo), bajo obligaciones de
                      confidencialidad y seguridad
                    </li>
                    <li>
                      Autoridades competentes, cuando exista un requerimiento
                      legal
                    </li>
                  </ul>
                </div>
                <p>
                  No compartiremos tus datos con restaurantes ni con otros
                  posibles empleadores sin pedirte antes tu autorización.
                </p>
              </article>

              <article id="conservacion" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">06</span>
                  <h2>Cuánto tiempo guardamos tus datos</h2>
                </div>
                <p>
                  Los conservamos mientras dure tu proceso de reclutamiento y el
                  tiempo necesario para darle seguimiento, cumplir obligaciones
                  legales o resolver disputas. Después podremos anonimizarlos o
                  eliminarlos de forma segura.
                </p>
              </article>

              <article id="arco" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">07</span>
                  <h2>Derechos ARCO y revocación</h2>
                </div>
                <p>
                  Puedes acceder a tus datos, rectificarlos, cancelarlos u
                  oponerte a su uso, y también revocar tu consentimiento.
                  Escríbenos a{" "}
                  <a href={`mailto:${EMAIL}`} className="pp-link">
                    {EMAIL}
                  </a>{" "}
                  con el asunto &ldquo;Solicitud ARCO&rdquo; o
                  &ldquo;Revocación de consentimiento&rdquo; e incluye:
                </p>
                <div className="pp-data-section">
                  <ul>
                    <li>Tu nombre y un medio para responderte</li>
                    <li>El derecho que deseas ejercer</li>
                    <li>
                      El teléfono con el que nos escribiste, para localizar tu
                      información
                    </li>
                    <li>Una identificación que acredite tu identidad</li>
                  </ul>
                </div>
                <p>Responderemos en los plazos que establece la LFPDPPP.</p>
              </article>

              <article id="menores" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">08</span>
                  <h2>Menores de edad</h2>
                </div>
                <p>
                  Este proceso no está dirigido a menores de edad. Si detectamos
                  datos de menores sin autorización, podremos eliminarlos.
                </p>
              </article>

              <article id="cambios" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">09</span>
                  <h2>Cambios y contacto</h2>
                </div>
                <p>
                  Publicaremos en esta página la versión vigente con su fecha de
                  actualización. Para cualquier duda sobre privacidad escríbenos
                  a{" "}
                  <a href={`mailto:${EMAIL}`} className="pp-link">
                    {EMAIL}
                  </a>
                  .
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
