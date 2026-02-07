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
        <div className="fb-footer-grid grid gap-8 md:grid-cols-4">
          <div className="fb-footer-brand">
            <img src="/brand/logo.png" alt="Growthsuite" className="h-9" />
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
        <div className="fb-footer-bottom mt-8 flex flex-col gap-2 border-t border-slate-700 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="fb-footer-links flex gap-4">
            <Link href="/contacto">Contacto</Link>
            <Link href="/privacy-policy">Aviso de Privacidad</Link>
          </div>
          <p>Powered by Growthsuite technologies</p>
        </div>
      </div>
    </footer>
  );
}
