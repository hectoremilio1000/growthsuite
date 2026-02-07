import Head from "next/head";
import { useState } from "react";
import NavBar from "../components/foodbot/NavBar";

const locations = [
  { title: "México", line: "Ciudad de México" },
  { title: "India", line: "Bengaluru" },
  { title: "Canadá", line: "Toronto" },
];

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://impulsorestauranteromercado-production.up.railway.app";

export default function Contacto() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);

    const form = new FormData(event.currentTarget);
    const fullName = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const whatsapp = String(form.get("whatsapp") || "").trim();

    if (!fullName || !email || !whatsapp) {
      setStatus({ type: "error", message: "Completa todos los campos." });
      return;
    }

    const [first_name, ...lastParts] = fullName.split(" ");
    const last_name = lastParts.join(" ");

    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/prospects-growthsuite`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          whatsapp,
          status: "nuevo",
          origin: "growthsuite-foodbot",
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar");
      }

      setStatus({
        type: "success",
        message: "¡Gracias! Te contactaremos pronto.",
      });
      event.currentTarget.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: "No pudimos enviar tus datos. Intenta de nuevo.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>Contacto | Growthsuite</title>
      </Head>

      <NavBar />

      <section className="fb-section">
        <div className="fb-container">
          <span className="fb-pill">Contacto</span>
          <h1 className="heading-font mt-4 text-4xl font-semibold">
            Agenda una demo con nuestro equipo
          </h1>
          <p className="mt-3 text-base text-slate-600">
            Cuéntanos sobre tu operación y te mostraremos cómo Growthsuite puede
            ayudarte a vender más y operar con claridad.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <form className="fb-form" onSubmit={handleSubmit}>
              <input
                className="fb-input"
                type="text"
                name="name"
                placeholder="Nombre y apellido"
              />
              <input
                className="fb-input"
                type="email"
                name="email"
                placeholder="Correo electrónico"
              />
              <input
                className="fb-input"
                type="text"
                name="whatsapp"
                placeholder="WhatsApp"
              />
              <button type="submit" className="fb-button" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </button>
              {status && (
                <p
                  className={`text-sm ${
                    status.type === "success" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>

            <div className="fb-feature-card">
              <h2 className="heading-font text-2xl">¿Prefieres hablar ya?</h2>
              <p className="mt-3 text-slate-600">
                Escríbenos y te contactamos en minutos. Para nosotros tu
                operación es prioridad.
              </p>
              <div className="mt-6 space-y-3">
                {locations.map((location) => (
                  <div key={location.title}>
                    <p className="font-semibold">{location.title}</p>
                    <p className="text-sm text-slate-500">{location.line}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <p className="text-sm text-slate-500">Email</p>
                <p className="font-medium">clientes@growthsuite.com.mx</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
