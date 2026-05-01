import Head from "next/head";
import NavBar from "../components/foodbot/NavBar";
import BookingWidget from "../components/BookingWidget";

export default function Contacto() {
  return (
    <div>
      <Head>
        <title>Contacto | Growthsuite</title>
      </Head>

      <NavBar />

      <section className="fb-section">
        <div className="fb-container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="fb-pill">Contacto</span>
            <h1 className="heading-font mt-4 text-4xl font-semibold">
              Agenda una demo con nuestro equipo
            </h1>
            <p className="mt-3 text-base text-slate-600">
              Selecciona el día y horario que mejor te acomode. Te confirmamos
              la cita por correo.
            </p>
          </div>

          <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white p-2 md:p-4 shadow-sm overflow-hidden">
            <BookingWidget />
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            ¿Prefieres escribirnos? <a href="mailto:clientes@growthsuite.com.mx" className="font-medium text-slate-700 underline">clientes@growthsuite.com.mx</a>
          </p>
        </div>
      </section>
    </div>
  );
}
