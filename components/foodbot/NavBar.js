import Link from "next/link";
import { useState } from "react";
import { growthsuiteModules } from "../../data/growthsuiteModules";

const productLinks = growthsuiteModules.map((module) => ({
  label: module.title,
  href: `/#${module.id}`,
}));

const restaurantLinks = [
  { label: "Fast casual", href: "/contacto" },
  { label: "Comida rápida", href: "/contacto" },
  { label: "Casual dining", href: "/contacto" },
  { label: "Dark kitchen", href: "/contacto" },
];

export default function FoodbotNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroups, setMobileGroups] = useState({
    product: false,
    restaurant: false,
  });

  const toggleMobileGroup = (key) => {
    setMobileGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header className="fb-nav">
      <div className="fb-container fb-nav-inner">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/brand/logo.png"
            alt="Growthsuite"
            className="h-12 w-auto md:h-20"
          />
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
          <span className="hidden md:inline-flex">
            <Link href="/contacto" className="fb-button">
              AGENDAR UNA DEMO
            </Link>
          </span>
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
          <Link href="/" className="fb-mobile-link">
            Inicio
          </Link>
          <div className="fb-mobile-group">
            <button
              type="button"
              className={`fb-mobile-accordion-toggle ${
                mobileGroups.product ? "is-open" : ""
              }`}
              onClick={() => toggleMobileGroup("product")}
              aria-expanded={mobileGroups.product}
              aria-controls="mobile-product-links"
            >
              <span>Producto</span>
              <span className="fb-mobile-accordion-icon" aria-hidden="true">
                {mobileGroups.product ? "-" : "+"}
              </span>
            </button>
            <div
              id="mobile-product-links"
              className={`fb-mobile-accordion-panel ${
                mobileGroups.product ? "is-open" : ""
              }`}
            >
              {productLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="fb-mobile-link fb-mobile-link--sub"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="fb-mobile-group">
            <button
              type="button"
              className={`fb-mobile-accordion-toggle ${
                mobileGroups.restaurant ? "is-open" : ""
              }`}
              onClick={() => toggleMobileGroup("restaurant")}
              aria-expanded={mobileGroups.restaurant}
              aria-controls="mobile-restaurant-links"
            >
              <span>Tipo de restaurante</span>
              <span className="fb-mobile-accordion-icon" aria-hidden="true">
                {mobileGroups.restaurant ? "-" : "+"}
              </span>
            </button>
            <div
              id="mobile-restaurant-links"
              className={`fb-mobile-accordion-panel ${
                mobileGroups.restaurant ? "is-open" : ""
              }`}
            >
              {restaurantLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="fb-mobile-link fb-mobile-link--sub"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/contacto" className="fb-mobile-link">
            Contacto
          </Link>
          <Link href="/precio" className="fb-mobile-link">
            Precio
          </Link>
          <Link href="/privacy-policy" className="fb-mobile-link">
            Aviso de Privacidad
          </Link>
          <Link href="/contacto" className="fb-button fb-mobile-cta">
            AGENDAR UNA DEMO
          </Link>
        </div>
      )}
    </header>
  );
}
