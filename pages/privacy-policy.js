import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/foodbot/NavBar";

const sections = [
  { id: "responsable", num: "01", title: "Responsable del tratamiento" },
  { id: "datos", num: "02", title: "Datos que recabamos" },
  { id: "finalidades", num: "03", title: "Finalidades del tratamiento" },
  { id: "base-legal", num: "04", title: "Base legal y consentimiento" },
  { id: "transferencias", num: "05", title: "Transferencias de datos" },
  { id: "cookies", num: "06", title: "Cookies y tecnologias" },
  { id: "conservacion", num: "07", title: "Conservacion de datos" },
  { id: "seguridad", num: "08", title: "Medidas de seguridad" },
  { id: "arco", num: "09", title: "Derechos ARCO" },
  { id: "revocacion", num: "10", title: "Revocacion del consentimiento" },
  { id: "terceros", num: "11", title: "Datos de terceros" },
  { id: "menores", num: "12", title: "Menores de edad" },
  { id: "enlaces", num: "13", title: "Enlaces a terceros" },
  { id: "cambios", num: "14", title: "Cambios al Aviso" },
  { id: "contacto", num: "15", title: "Contacto" },
];

export default function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>Aviso de Privacidad | Growthsuite</title>
        <meta
          name="description"
          content="Aviso de Privacidad Integral de Growthsuite. Conoce como protegemos tus datos personales."
        />
      </Head>

      <NavBar />

      {/* Hero */}
      <section className="pp-hero">
        <div className="fb-container">
          <div className="pp-hero-inner">
            <span className="pp-badge">Legal</span>
            <h1 className="pp-hero-title">Aviso de Privacidad Integral</h1>
            <p className="pp-hero-sub">
              En Growthsuite valoramos tu privacidad. Este aviso describe como
              recopilamos, usamos, almacenamos, compartimos y protegemos tus
              datos personales.
            </p>
            <div className="pp-hero-meta">
              <span>Ultima actualizacion: 20 de febrero de 2026</span>
              <span className="pp-hero-dot" aria-hidden="true" />
              <span>Conforme a la LFPDPPP</span>
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
                Este Aviso de Privacidad Integral (el &ldquo;Aviso&rdquo;) se
                emite conforme a la Ley Federal de Proteccion de Datos Personales
                en Posesion de los Particulares y su Reglamento (la
                &ldquo;LFPDPPP&rdquo;) y aplica cuando interactuas con nuestro
                sitio web, formularios, demostraciones, comunicaciones y la
                plataforma Growthsuite (los &ldquo;Servicios&rdquo;).
              </p>

              {/* 01 */}
              <article id="responsable" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">01</span>
                  <h2>Responsable del tratamiento de datos</h2>
                </div>
                <p>
                  El responsable del tratamiento de tus datos personales es:
                </p>
                <div className="pp-card-grid">
                  <div className="pp-info-card">
                    <span className="pp-info-label">Responsable</span>
                    <span className="pp-info-value">Growthsuite</span>
                  </div>
                  <div className="pp-info-card">
                    <span className="pp-info-label">Domicilio</span>
                    <span className="pp-info-value">
                      Av. Baja California 275, piso 5, Hipodromo, Cuauhtemoc,
                      06100 Ciudad de Mexico, CDMX
                    </span>
                  </div>
                  <div className="pp-info-card">
                    <span className="pp-info-label">Correo de privacidad</span>
                    <a
                      href="mailto:clientes@growthsuite.com.mx"
                      className="pp-info-value pp-link"
                    >
                      clientes@growthsuite.com.mx
                    </a>
                  </div>
                </div>
              </article>

              {/* 02 */}
              <article id="datos" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">02</span>
                  <h2>Datos personales que podemos recabar</h2>
                </div>
                <p>
                  Dependiendo de como uses los Servicios, podemos recabar:
                </p>

                <div className="pp-data-section">
                  <h3>A) Datos de identificacion y contacto</h3>
                  <ul>
                    <li>Nombre completo y/o nombre comercial</li>
                    <li>Correo electronico</li>
                    <li>Numero de telefono / WhatsApp</li>
                    <li>Puesto/rol en el negocio</li>
                    <li>Empresa/organizacion y giro</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>B) Datos del negocio (operacion)</h3>
                  <ul>
                    <li>Nombre del restaurante o sucursal</li>
                    <li>
                      Ubicacion aproximada (ciudad/estado), direccion del negocio
                    </li>
                    <li>
                      Necesidades operativas, tamano del equipo, horarios de
                      operacion
                    </li>
                    <li>
                      Informacion de uso del POS y flujos operativos (pedidos,
                      cancelaciones, inventario) compartida para demo/soporte
                    </li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>C) Datos de cuenta y autenticacion</h3>
                  <ul>
                    <li>Identificadores de usuario</li>
                    <li>Credenciales (contrasena/PIN) en forma cifrada/hasheada</li>
                    <li>
                      Tokens de acceso, registros de inicio de sesion y actividad
                    </li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>D) Datos tecnicos y de uso (automaticos)</h3>
                  <ul>
                    <li>
                      Direccion IP, tipo de navegador, sistema operativo, idioma
                    </li>
                    <li>Identificadores de dispositivo</li>
                    <li>
                      Paginas visitadas, clics, tiempos de navegacion, eventos de
                      uso
                    </li>
                    <li>Registros (logs) y datos de diagnostico</li>
                  </ul>
                </div>

                <div className="pp-data-section">
                  <h3>E) Comunicaciones</h3>
                  <ul>
                    <li>
                      Mensajes y solicitudes enviados por formularios, correo,
                      WhatsApp o chat
                    </li>
                    <li>
                      Grabaciones o transcripciones de llamadas/demos (solo con
                      consentimiento)
                    </li>
                  </ul>
                </div>

                <div className="pp-callout">
                  <div className="pp-callout-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 6h2v5H9V6zm0 7h2v2H9v-2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>Importante</strong>
                    <p>
                      Growthsuite no solicita datos personales sensibles (salud,
                      religion, afiliacion politica, orientacion sexual). Si por
                      error compartes datos sensibles, podremos suprimirlos o
                      pedirte que uses un canal alterno.
                    </p>
                  </div>
                </div>
              </article>

              {/* 03 */}
              <article id="finalidades" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">03</span>
                  <h2>Finalidades del tratamiento</h2>
                </div>

                <h3>Finalidades primarias (necesarias)</h3>
                <ul>
                  <li>
                    Atender solicitudes (demo, contacto, cotizacion, informacion
                    comercial)
                  </li>
                  <li>
                    Crear y administrar cuentas, perfiles y accesos a la
                    plataforma
                  </li>
                  <li>
                    Prestar los Servicios y operar funcionalidades (soporte,
                    configuracion, incidencias)
                  </li>
                  <li>
                    Procesar y dar seguimiento a tickets de soporte y atencion al
                    cliente
                  </li>
                  <li>
                    Seguridad: prevenir fraude, abusos, accesos no autorizados y
                    proteger infraestructura
                  </li>
                  <li>
                    Cumplimiento legal y atencion de requerimientos de autoridad
                    competente
                  </li>
                </ul>

                <h3>Finalidades secundarias (opcionales)</h3>
                <p>
                  Con tu consentimiento (o si no te opones cuando corresponda),
                  tambien podemos usar tus datos para:
                </p>
                <ul>
                  <li>
                    Comunicaciones de marketing (novedades, lanzamientos,
                    promociones)
                  </li>
                  <li>Encuestas de satisfaccion y estudios de mercado</li>
                  <li>
                    Mejorar la experiencia mediante analitica y medicion de
                    rendimiento
                  </li>
                  <li>
                    Invitaciones a eventos, webinars o programas piloto/beta
                  </li>
                </ul>

                <div className="pp-callout pp-callout--subtle">
                  <div className="pp-callout-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M3 10l5 5L17 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>Oposicion a finalidades secundarias</strong>
                    <p>
                      Escribe a{" "}
                      <a
                        href="mailto:clientes@growthsuite.com.mx"
                        className="pp-link"
                      >
                        clientes@growthsuite.com.mx
                      </a>{" "}
                      con el asunto &ldquo;Oposicion a finalidades
                      secundarias&rdquo;.
                    </p>
                  </div>
                </div>
              </article>

              {/* 04 */}
              <article id="base-legal" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">04</span>
                  <h2>Base legal y consentimiento</h2>
                </div>
                <p>
                  Cuando sea aplicable, tratamos tus datos con base en:
                </p>
                <ul>
                  <li>
                    La relacion comercial/contractual actual o potencial contigo
                  </li>
                  <li>
                    Tu consentimiento, cuando la LFPDPPP lo requiera (finalidades
                    secundarias, ciertos usos de cookies, grabacion de llamadas)
                  </li>
                  <li>Obligaciones legales aplicables</li>
                </ul>
              </article>

              {/* 05 */}
              <article id="transferencias" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">05</span>
                  <h2>Transferencias de datos (comparticion)</h2>
                </div>
                <p>
                  Growthsuite <strong>no vende tu informacion</strong>. Podemos
                  compartir datos unicamente en los siguientes casos:
                </p>
                <div className="pp-card-grid">
                  <div className="pp-transfer-card">
                    <h4>Proveedores</h4>
                    <p>
                      Encargados que nos apoyan a operar la plataforma (hosting,
                      base de datos, analitica, mensajeria), bajo contratos de
                      confidencialidad y seguridad.
                    </p>
                  </div>
                  <div className="pp-transfer-card">
                    <h4>Autoridades competentes</h4>
                    <p>
                      Cuando exista requerimiento legal, orden judicial o sea
                      necesario para proteger derechos, seguridad o prevenir
                      fraude.
                    </p>
                  </div>
                  <div className="pp-transfer-card">
                    <h4>Operaciones corporativas</h4>
                    <p>
                      Fusion, adquisicion o reorganizacion donde tus datos podrian
                      transferirse como parte de los activos, manteniendo medidas
                      de proteccion.
                    </p>
                  </div>
                </div>
                <p>
                  En caso de transferencias que requieran consentimiento conforme
                  a la LFPDPPP, lo solicitaremos previamente.
                </p>
              </article>

              {/* 06 */}
              <article id="cookies" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">06</span>
                  <h2>Uso de cookies y tecnologias similares</h2>
                </div>
                <p>
                  Podemos utilizar cookies, pixeles y tecnologias similares para:
                </p>
                <ul>
                  <li>Recordar preferencias y sesion</li>
                  <li>Analizar rendimiento del sitio</li>
                  <li>Medir campanas y mejorar experiencia</li>
                </ul>
                <p>
                  Puedes deshabilitar cookies desde la configuracion de tu
                  navegador. Si deshabilitas ciertas cookies, es posible que
                  algunas funciones no operen correctamente.
                </p>
              </article>

              {/* 07 */}
              <article id="conservacion" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">07</span>
                  <h2>Conservacion (retencion) de datos</h2>
                </div>
                <p>Conservaremos tus datos:</p>
                <ul>
                  <li>
                    Mientras exista una relacion comercial/contractual o sea
                    necesario para prestarte los Servicios
                  </li>
                  <li>
                    Por el tiempo requerido para cumplir obligaciones legales,
                    resolver disputas o hacer valer derechos
                  </li>
                </ul>
                <p>
                  Posteriormente, podremos anonimizar o eliminar datos de forma
                  segura.
                </p>
              </article>

              {/* 08 */}
              <article id="seguridad" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">08</span>
                  <h2>Medidas de seguridad</h2>
                </div>
                <p>
                  Implementamos medidas tecnicas, administrativas y organizativas
                  razonables para proteger tus datos, incluyendo:
                </p>
                <div className="pp-security-grid">
                  <div className="pp-security-item">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 2l6 3v5c0 3.5-2.5 6.5-6 7.5C6.5 16.5 4 13.5 4 10V5l6-3z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                    <span>Controles de acceso y autenticacion</span>
                  </div>
                  <div className="pp-security-item">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 10l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Cifrado en transito (HTTPS/TLS)</span>
                  </div>
                  <div className="pp-security-item">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 10l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Monitoreo, logs y proteccion contra intrusiones</span>
                  </div>
                  <div className="pp-security-item">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 10l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Principio de minimo privilegio</span>
                  </div>
                  <div className="pp-security-item">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 10l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Respaldos y planes de continuidad</span>
                  </div>
                </div>
                <p className="pp-muted">
                  Ningun sistema es 100% infalible; si identificamos un incidente
                  relevante, tomaremos acciones razonables para mitigarlo y, cuando
                  corresponda, notificarlo.
                </p>
              </article>

              {/* 09 */}
              <article id="arco" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">09</span>
                  <h2>Derechos ARCO</h2>
                </div>
                <p>Tienes derecho a:</p>
                <div className="pp-arco-grid">
                  <div className="pp-arco-card">
                    <span className="pp-arco-letter">A</span>
                    <div>
                      <strong>Acceso</strong>
                      <p>Conocer tus datos personales</p>
                    </div>
                  </div>
                  <div className="pp-arco-card">
                    <span className="pp-arco-letter">R</span>
                    <div>
                      <strong>Rectificacion</strong>
                      <p>Corregir datos inexactos</p>
                    </div>
                  </div>
                  <div className="pp-arco-card">
                    <span className="pp-arco-letter">C</span>
                    <div>
                      <strong>Cancelacion</strong>
                      <p>Eliminar datos innecesarios</p>
                    </div>
                  </div>
                  <div className="pp-arco-card">
                    <span className="pp-arco-letter">O</span>
                    <div>
                      <strong>Oposicion</strong>
                      <p>Oponerte a finalidades especificas</p>
                    </div>
                  </div>
                </div>

                <h3>Como ejercer ARCO</h3>
                <p>
                  Envia un correo a{" "}
                  <a
                    href="mailto:clientes@growthsuite.com.mx"
                    className="pp-link"
                  >
                    clientes@growthsuite.com.mx
                  </a>{" "}
                  con el asunto &ldquo;Solicitud ARCO&rdquo; e incluye:
                </p>
                <ul>
                  <li>Nombre del titular y medio para responderte</li>
                  <li>
                    Descripcion clara del derecho que deseas ejercer
                  </li>
                  <li>
                    Datos que ayuden a localizar tu informacion (correo, telefono,
                    empresa)
                  </li>
                  <li>
                    Identificacion oficial o documento que acredite tu identidad
                  </li>
                </ul>
                <p>
                  Responderemos en los plazos establecidos por la LFPDPPP.
                </p>
              </article>

              {/* 10 */}
              <article id="revocacion" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">10</span>
                  <h2>Revocacion del consentimiento</h2>
                </div>
                <p>
                  Puedes revocar tu consentimiento o limitar el uso/divulgacion de
                  tus datos escribiendo a{" "}
                  <a
                    href="mailto:clientes@growthsuite.com.mx"
                    className="pp-link"
                  >
                    clientes@growthsuite.com.mx
                  </a>{" "}
                  con el asunto:
                </p>
                <ul>
                  <li>&ldquo;Revocacion de consentimiento&rdquo;</li>
                  <li>&ldquo;Limitacion de uso de datos&rdquo;</li>
                </ul>
              </article>

              {/* 11 */}
              <article id="terceros" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">11</span>
                  <h2>Datos de terceros</h2>
                </div>
                <p>
                  Si nos compartes datos de terceros (por ejemplo, miembros del
                  equipo), declaras que cuentas con la autorizacion necesaria para
                  hacerlo y que les informaste este Aviso.
                </p>
              </article>

              {/* 12 */}
              <article id="menores" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">12</span>
                  <h2>Menores de edad</h2>
                </div>
                <p>
                  Los Servicios estan orientados a uso empresarial. No estan
                  dirigidos a menores. Si detectamos datos de menores sin
                  autorizacion, podremos eliminarlos.
                </p>
              </article>

              {/* 13 */}
              <article id="enlaces" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">13</span>
                  <h2>Enlaces a sitios de terceros</h2>
                </div>
                <p>
                  Nuestro sitio o comunicaciones pueden incluir enlaces a sitios de
                  terceros. Growthsuite no es responsable de sus practicas de
                  privacidad. Te recomendamos revisar sus avisos.
                </p>
              </article>

              {/* 14 */}
              <article id="cambios" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">14</span>
                  <h2>Cambios al Aviso</h2>
                </div>
                <p>
                  Podremos actualizar este Aviso por mejoras o cambios legales.
                  Publicaremos la version vigente indicando la fecha de ultima
                  actualizacion. Si los cambios son sustanciales, haremos esfuerzos
                  razonables por notificarte.
                </p>
              </article>

              {/* 15 */}
              <article id="contacto" className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">15</span>
                  <h2>Contacto</h2>
                </div>
                <p>
                  Para preguntas, solicitudes ARCO, revocacion o cualquier asunto
                  de privacidad:
                </p>
                <div className="pp-contact-card">
                  <div className="pp-contact-row">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <rect
                        x="2"
                        y="4"
                        width="16"
                        height="12"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M2 6l8 5 8-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <a
                      href="mailto:clientes@growthsuite.com.mx"
                      className="pp-link"
                    >
                      clientes@growthsuite.com.mx
                    </a>
                  </div>
                  <div className="pp-contact-row">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 2C6.7 2 4 4.7 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                    <span>
                      Av. Baja California 275, piso 5, Hipodromo, Cuauhtemoc,
                      06100 CDMX
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
