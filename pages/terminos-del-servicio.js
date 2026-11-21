import Link from "next/link";
import NavBar from "../components/foodbot/NavBar";
import Seo from "../components/Seo";

/* Términos del servicio de Growthsuite. Meta los pide en el campo "URL de
 * Condiciones del servicio" de la app (inicio de sesión con Facebook /
 * WhatsApp Business). Usa los mismos estilos que el Aviso de Privacidad. */
const sections = [
  {
    id: "servicio",
    num: "01",
    title: "Qué es Growthsuite",
    body: (
      <p>
        Growthsuite ofrece a restaurantes un sistema de punto de venta,
        reservaciones, sitio web, lealtad y herramientas de marketing, incluida
        la conexión con WhatsApp, Facebook e Instagram para medir y contestar
        las consultas de sus clientes. Estos términos aplican a todos los
        sitios y aplicaciones de Growthsuite, como admin.growthsuite.com.mx y
        centro.growthsuite.com.mx.
      </p>
    ),
  },
  {
    id: "cuenta",
    num: "02",
    title: "Cuenta y acceso",
    body: (
      <p>
        El restaurante es responsable de los usuarios que da de alta, de
        mantener sus contraseñas en secreto y de lo que se haga con su cuenta.
        Debe avisarnos de inmediato a{" "}
        <a href="mailto:clientes@growthsuite.com.mx" className="pp-link">
          clientes@growthsuite.com.mx
        </a>{" "}
        si sospecha un acceso no autorizado.
      </p>
    ),
  },
  {
    id: "uso",
    num: "03",
    title: "Uso permitido",
    body: (
      <p>
        El servicio se usa solo para operar y promover el restaurante. No se
        permite enviar spam ni mensajes a personas que no lo autorizaron,
        suplantar a terceros, ni usarlo para actividades ilegales. Al conectar
        WhatsApp, Facebook o Instagram, el restaurante también acepta las
        políticas de Meta (Políticas de WhatsApp Business y Condiciones de
        Meta) y es responsable de los mensajes que envía a sus clientes.
      </p>
    ),
  },
  {
    id: "meta",
    num: "04",
    title: "Cuentas de Meta conectadas",
    body: (
      <p>
        Solo accedemos a los datos que el restaurante autoriza al conectar su
        cuenta y solo los usamos para darle el servicio. El restaurante puede
        desconectar su cuenta en cualquier momento; ver{" "}
        <Link href="/eliminacion-de-datos" className="pp-link">
          Eliminación de datos
        </Link>
        .
      </p>
    ),
  },
  {
    id: "datos",
    num: "05",
    title: "Datos y privacidad",
    body: (
      <p>
        Los datos del restaurante y de sus clientes son del restaurante.
        Growthsuite los trata conforme a su{" "}
        <Link href="/privacy-policy" className="pp-link">
          Aviso de Privacidad
        </Link>{" "}
        y no los vende a terceros.
      </p>
    ),
  },
  {
    id: "pagos",
    num: "06",
    title: "Planes y pagos",
    body: (
      <p>
        Los precios, módulos y forma de pago de cada restaurante son los de su
        plan o cotización. Si un pago no se cubre, podemos suspender el acceso
        después de avisar al restaurante.
      </p>
    ),
  },
  {
    id: "disponibilidad",
    num: "07",
    title: "Disponibilidad y responsabilidad",
    body: (
      <p>
        Trabajamos para que el servicio esté disponible siempre, pero puede
        haber interrupciones por mantenimiento, fallas de Internet o de
        servicios de terceros (como Meta). Growthsuite no responde por daños
        indirectos ni por fallas de servicios que no controla.
      </p>
    ),
  },
  {
    id: "terminacion",
    num: "08",
    title: "Cancelación",
    body: (
      <p>
        El restaurante puede dejar de usar el servicio cuando quiera.
        Growthsuite puede suspender una cuenta que incumpla estos términos o
        las políticas de Meta.
      </p>
    ),
  },
  {
    id: "cambios",
    num: "09",
    title: "Cambios y ley aplicable",
    body: (
      <p>
        Podemos actualizar estos términos; la fecha de arriba indica la última
        versión. Se rigen por las leyes de México y los tribunales de la Ciudad
        de México.
      </p>
    ),
  },
  {
    id: "contacto",
    num: "10",
    title: "Contacto",
    body: (
      <p>
        Growthsuite · Av. Baja California 275, piso 5, Hipódromo, Cuauhtémoc,
        06100 Ciudad de México ·{" "}
        <a href="mailto:clientes@growthsuite.com.mx" className="pp-link">
          clientes@growthsuite.com.mx
        </a>
      </p>
    ),
  },
];

export default function TerminosDelServicio() {
  return (
    <div>
      <Seo
        title="Términos del servicio | Growthsuite"
        description="Términos y condiciones de uso de Growthsuite: cuentas, uso permitido, cuentas de Meta conectadas, pagos y contacto."
        path="/terminos-del-servicio"
      />
      <NavBar />

      <section className="pp-hero">
        <div className="fb-container">
          <div className="pp-hero-inner">
            <span className="pp-badge">Legal</span>
            <h1 className="pp-hero-title">Términos del servicio</h1>
            <p className="pp-hero-sub">
              Las reglas para usar Growthsuite y sus aplicaciones.
            </p>
            <div className="pp-hero-meta">
              <span>Ultima actualizacion: 21 de noviembre de 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="fb-section" style={{ paddingTop: "2rem" }}>
        <div className="fb-container">
          <div className="pp-content">
            {sections.map((s) => (
              <article key={s.id} id={s.id} className="pp-article">
                <div className="pp-article-header">
                  <span className="pp-num">{s.num}</span>
                  <h2>{s.title}</h2>
                </div>
                {s.body}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
