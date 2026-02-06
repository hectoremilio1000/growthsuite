import Link from "next/link";
import { useState } from "react";

const productLinks = [
  { label: "Central de pedidos", href: "#central-de-pedidos" },
  { label: "Orquestador de plataformas", href: "#orquestador" },
  { label: "Punto de venta", href: "#punto-de-venta" },
  { label: "Tienda en línea", href: "#tienda-en-linea" },
  { label: "Rewards", href: "#rewards" },
  { label: "Bots", href: "#bots" },
  { label: "Kiosko", href: "#kiosko" },
  { label: "Comandera", href: "#comandera" },
  { label: "Pantalla de pedidos", href: "#pantalla-de-pedidos" },
  { label: "Factura inteligente", href: "#factura-inteligente" },
  { label: "Delivery Hub", href: "#delivery-hub" },
];

const restaurantLinks = [
  { label: "Fast casual", href: "/contacto" },
  { label: "Comida rápida", href: "/contacto" },
  { label: "Casual dining", href: "/contacto" },
  { label: "Dark kitchen", href: "/contacto" },
];

export default function FoodbotNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fb-nav">
      <div className="fb-container fb-nav-inner">
        <Link href="/" className="flex items-center gap-3">
          <img src="/brand/logo.png" alt="Growthsuite" className="h-20" />
        </Link>

        <nav className="fb-nav-menu">
          <Link href="/" className="fb-nav-link">
            Inicio
          </Link>
          <div className="fb-nav-dropdown">
            <button className="fb-nav-link" type="button">
              Producto
            </button>
            <div className="fb-nav-panel">
              {productLinks.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="fb-nav-dropdown">
            <button className="fb-nav-link" type="button">
              Tipo de restaurante
            </button>
            <div className="fb-nav-panel">
              {restaurantLinks.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contacto" className="fb-nav-link">
            Contacto
          </Link>
          <Link href="/precio" className="fb-nav-link">
            Precio
          </Link>
          <Link href="/privacy-policy" className="fb-nav-link">
            Aviso de Privacidad
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contacto" className="fb-button hidden md:inline-flex">
            AGENDAR UNA DEMO
          </Link>
          <button
            className="fb-mobile-toggle"
            type="button"
            aria-label="Abrir menú"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            Menú
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fb-container fb-mobile-menu">
          <Link href="/">Inicio</Link>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-500">Producto</p>
            {productLinks.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-500">
              Tipo de restaurante
            </p>
            {restaurantLinks.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/contacto">Contacto</Link>
          <Link href="/precio">Precio</Link>
          <Link href="/privacy-policy">Aviso de Privacidad</Link>
          <Link href="/contacto" className="fb-button">
            AGENDAR UNA DEMO
          </Link>
        </div>
      )}
    </header>
  );
}
