import Link from "next/link";
import NavBar from "../components/foodbot/NavBar";
import Seo from "../components/Seo";

/* Instrucciones de eliminación de datos que pide Meta a las apps que usan
 * el inicio de sesión de Facebook / WhatsApp Business (campo "URL de
 * instrucciones para la eliminación de datos" de la app). Usa los mismos
 * estilos que el Aviso de Privacidad (pp-*). */
export default function EliminacionDeDatos() {
  return (
    <div>
      <Seo
        title="Eliminación de datos de Meta y WhatsApp | Growthsuite"
        description="Cómo desconectar WhatsApp, Facebook o Instagram de Growthsuite y pedir que borremos los datos recibidos de Meta. Respuesta en máximo 30 días."
        path="/eliminacion-de-datos"
      />
      <NavBar />

      <section className="pp-hero">
        <div className="fb-container">
          <div className="pp-hero-inner">
            <span className="pp-badge">Legal</span>
            <h1 className="pp-hero-title">Eliminación de datos</h1>
            <p className="pp-hero-sub">
              Cómo desconectar tus cuentas de Meta (WhatsApp, Facebook e
              Instagram) de Growthsuite y pedir que borremos los datos que
              recibimos de ellas.
            </p>
            <div className="pp-hero-meta">
              <span>Ultima actualizacion: 20 de noviembre de 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="fb-section" style={{ paddingTop: "2rem" }}>
        <div className="fb-container">
          <div className="pp-content">
            <article id="desconectar" className="pp-article">
              <div className="pp-article-header">
                <span className="pp-num">01</span>
                <h2>Si eres un restaurante cliente de Growthsuite</h2>
              </div>
              <p>Puedes desconectar tu cuenta en cualquier momento:</p>
              <ol>
                <li>
                  Entra al Panel admin en{" "}
                  <a
                    href="https://admin.growthsuite.com.mx/"
                    className="pp-link"
                  >
                    admin.growthsuite.com.mx
                  </a>
                  .
                </li>
                <li>
                  Ve a <strong>Marketing → Cuentas conectadas</strong> y pulsa{" "}
                  <strong>Desconectar</strong>.
                </li>
              </ol>
              <p>
                Al desconectar, la conexión se desactiva de inmediato y dejamos
                de recibir mensajes y datos de esa cuenta. Si además quieres que
                borremos lo que ya recibimos, sigue el punto 02.
              </p>
              <p>
                También puedes quitar el acceso desde Facebook: entra a{" "}
                <strong>
                  Configuración → Integraciones comerciales
                </strong>{" "}
                (o, en Meta Business Suite,{" "}
                <strong>Configuración → Integraciones</strong>), elige
                Growthsuite y pulsa <strong>Eliminar</strong>.
              </p>
            </article>

            <article id="borrar" className="pp-article">
              <div className="pp-article-header">
                <span className="pp-num">02</span>
                <h2>Pedir que borremos todos tus datos</h2>
              </div>
              <p>
                Escribe a{" "}
                <a
                  href="mailto:clientes@growthsuite.com.mx?subject=Eliminaci%C3%B3n%20de%20datos"
                  className="pp-link"
                >
                  clientes@growthsuite.com.mx
                </a>{" "}
                con el asunto <strong>&ldquo;Eliminación de datos&rdquo;</strong>{" "}
                e indica el nombre del restaurante y el número de WhatsApp o la
                página de Facebook conectada.
              </p>
              <p>
                Borramos los tokens de acceso, los mensajes guardados, los datos
                de conversaciones y las métricas de campañas recibidas de Meta en un plazo máximo de{" "}
                <strong>30 días</strong> y te confirmamos por correo con un
                número de folio. Solo conservamos lo que la ley nos obligue a
                guardar (por ejemplo, información fiscal).
              </p>
            </article>

            <article id="clientes" className="pp-article">
              <div className="pp-article-header">
                <span className="pp-num">03</span>
                <h2>Si eres cliente de un restaurante y le escribiste por WhatsApp</h2>
              </div>
              <p>
                Tus mensajes los administra el restaurante al que le escribiste.
                Pídeselo directamente a él, o escríbenos a{" "}
                <a
                  href="mailto:clientes@growthsuite.com.mx?subject=Eliminaci%C3%B3n%20de%20datos"
                  className="pp-link"
                >
                  clientes@growthsuite.com.mx
                </a>{" "}
                con tu número de teléfono y el nombre del restaurante; lo
                borramos en máximo 30 días. Sin solicitud, los mensajes se
                borran solos a los 18 meses.
              </p>
            </article>

            <p>
              Más detalles en nuestro{" "}
              <Link href="/privacy-policy#meta" className="pp-link">
                Aviso de Privacidad
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
