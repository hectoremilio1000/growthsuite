import Head from "next/head";
import NavBar from "../components/foodbot/NavBar";

export default function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>Aviso de privacidad | Growthsuite</title>
      </Head>
      <NavBar />
      <section className="fb-section">
        <div className="fb-container">
          <div className="max-w-3xl">
            <span className="fb-pill">Aviso de privacidad</span>
            <h1 className="heading-font mt-4 text-3xl font-semibold">
              Política de privacidad de Growthsuite
            </h1>
            <p className="mt-4 text-base text-slate-600">
              Este aviso explica qué información recopilamos, cómo la usamos y
              qué opciones tienes respecto a tus datos cuando utilizas nuestros
              servicios.
            </p>

            <div className="mt-8 space-y-6 text-base text-slate-600">
              <div>
                <h2 className="heading-font text-xl text-slate-900">
                  Información que recopilamos
                </h2>
                <p className="mt-2">
                  Podemos recopilar datos que nos proporcionas directamente al
                  solicitar una demo o comunicarte con nuestro equipo, además de
                  información básica sobre el uso del sitio.
                </p>
              </div>

              <div>
                <h2 className="heading-font text-xl text-slate-900">
                  Cómo usamos tu información
                </h2>
                <p className="mt-2">
                  Usamos los datos para responder solicitudes, mejorar el
                  servicio y mantener una comunicación relevante con tu negocio.
                </p>
              </div>

              <div>
                <h2 className="heading-font text-xl text-slate-900">
                  Compartición de información
                </h2>
                <p className="mt-2">
                  No vendemos tu información. Solo compartimos datos con
                  proveedores que nos ayudan a operar la plataforma bajo acuerdos
                  de confidencialidad.
                </p>
              </div>

              <div>
                <h2 className="heading-font text-xl text-slate-900">Seguridad</h2>
                <p className="mt-2">
                  Implementamos medidas técnicas y organizativas razonables para
                  proteger tu información frente a accesos no autorizados.
                </p>
              </div>

              <div>
                <h2 className="heading-font text-xl text-slate-900">
                  Tus opciones
                </h2>
                <p className="mt-2">
                  Puedes solicitar acceso, corrección o eliminación de tus datos
                  escribiendo a nuestro equipo de privacidad.
                </p>
              </div>

              <div>
                <h2 className="heading-font text-xl text-slate-900">Contacto</h2>
                <p className="mt-2">Email: privacidad@growthsuite.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
