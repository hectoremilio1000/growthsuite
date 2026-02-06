import Link from "next/link";

const locations = [
  {
    title: "México",
    lines: ["Ciudad de México"],
  },
  {
    title: "India",
    lines: ["Bengaluru"],
  },
  {
    title: "Canadá",
    lines: ["Toronto"],
  },
];

export default function FoodbotFooter() {
  return (
    <footer className="fb-footer">
      <div className="fb-container">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <img src="/brand/logo.png" alt="Growthsuite" className="h-9" />
            <p className="mt-4 text-sm text-slate-300">
              Growthsuite es el POS conectado a WhatsApp que centraliza pedidos,
              comandas, caja e inventario para operar en tiempo real y vender
              más sin fricción.
            </p>
          </div>
          {locations.map((location) => (
            <div key={location.title}>
              <h4 className="heading-font">{location.title}</h4>
              {location.lines.map((line) => (
                <p key={line} className="text-sm text-slate-300">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-slate-700 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <Link href="/contacto">Contacto</Link>
            <Link href="/privacy-policy">Aviso de Privacidad</Link>
          </div>
          <p>Powered by Growthsuite technologies</p>
        </div>
      </div>
    </footer>
  );
}
