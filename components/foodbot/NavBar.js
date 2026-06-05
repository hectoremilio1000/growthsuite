import Link from "next/link";
import { useEffect, useState } from "react";
import { growthsuiteModules } from "../../data/growthsuiteModules";

const productLinks = growthsuiteModules.map((module) => ({
  label: module.title,
  href: `/modulo/${module.slug}`,
}));

const restaurantLinks = [
  { label: "Fast casual", href: "/tipo-restaurante/fast-casual" },
  { label: "Comida rápida", href: "/tipo-restaurante/comida-rapida" },
  { label: "Casual dining", href: "/tipo-restaurante/casual-dining" },
  { label: "Dark kitchen", href: "/tipo-restaurante/dark-kitchen" },
];

/* Apps POS — las URLs vienen de .env (NEXT_PUBLIC_APP_*_URL).
 * Si una URL está vacía, el link no se muestra en el dropdown.
 * Los iconos están en /public/brand/apps/. */
const APP_LINKS = [
  { label: "Panel admin", icon: "/brand/apps/pos-admin.png", url: process.env.NEXT_PUBLIC_APP_ADMIN_URL || "" },
  { label: "Caja", icon: "/brand/apps/pos-cash.png", url: process.env.NEXT_PUBLIC_APP_CASH_URL || "" },
  { label: "Comandero", icon: "/brand/apps/pos-comandero.png", url: process.env.NEXT_PUBLIC_APP_COMANDERO_URL || "" },
  { label: "Monitor de cocina", icon: "/brand/apps/pos-monitor.png", url: process.env.NEXT_PUBLIC_APP_MONITOR_URL || "" },
].filter((a) => a.url);

export default function FoodbotNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroups, setMobileGroups] = useState({
    product: false,
    restaurant: false,
    apps: false,
  });

  const toggleMobileGroup = (key) => {
    setMobileGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Bloquea el scroll del body mientras el menú móvil está abierto
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Cierra el dropdown de escritorio al hacer click en un enlace (el :hover lo
  // mantenía abierto tras navegar). Se reactiva al salir con el mouse.
  const closeDropdownOnLink = (e) => {
    if (e.target.closest("a")) {
      e.currentTarget.closest(".fb-nav-dropdown")?.classList.add("fb-dd-closing");
    }
  };
  const reopenDropdown = (e) => {
    e.currentTarget.classList.remove("fb-dd-closing");
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
          <div className="fb-nav-dropdown" onMouseLeave={reopenDropdown}>
            <button className="fb-nav-link" type="button">
              Producto
            </button>
            <div className="fb-nav-panel" onClick={closeDropdownOnLink}>
              {productLinks.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="fb-nav-dropdown" onMouseLeave={reopenDropdown}>
            <button className="fb-nav-link" type="button">
              Tipo de restaurante
            </button>
            <div className="fb-nav-panel" onClick={closeDropdownOnLink}>
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
              AGENDAR DEMO
            </Link>
          </span>
          {APP_LINKS.length > 0 && (
            <div className="fb-nav-dropdown hidden md:inline-flex">
              <button
                type="button"
                className="fb-button"
                style={{
                  background: "#eff6ff",
                  color: "#0f63d6",
                  border: "1.5px solid #bfdbfe",
                  boxShadow: "0 2px 6px rgba(29, 133, 244, 0.15)",
                  fontWeight: 700,
                }}
              >
                Iniciar sesión ▾
              </button>
              <div className="fb-nav-panel" style={{ right: 0, left: "auto" }}>
                <div
                  style={{
                    padding: "8px 12px",
                    fontSize: 11,
                    color: "#0f63d6",
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    borderBottom: "1px solid #dbeafe",
                    marginBottom: 4,
                    background: "#eff6ff",
                    fontWeight: 600,
                  }}
                >
                  Entrar a tus apps
                </div>
                {APP_LINKS.map((app) => (
                  <a
                    key={app.label}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <span
                      style={{
                        width: 56,
                        height: 56,
                        flexShrink: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: 10,
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={app.icon}
                        alt={app.label}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          padding: 2,
                        }}
                      />
                    </span>
                    <span>{app.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
          <button
            className="fb-mobile-toggle"
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? "Cerrar" : "Menú"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fb-mobile-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget || e.target.closest("a"))
              setMobileOpen(false);
          }}
        >
          <div className="fb-container fb-mobile-menu">
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
          {APP_LINKS.length > 0 && (
            <div className="fb-mobile-group">
              <button
                type="button"
                className={`fb-mobile-accordion-toggle ${
                  mobileGroups.apps ? "is-open" : ""
                }`}
                onClick={() => toggleMobileGroup("apps")}
                aria-expanded={mobileGroups.apps}
                aria-controls="mobile-apps-links"
              >
                <span>Iniciar sesión</span>
                <span className="fb-mobile-accordion-icon" aria-hidden="true">
                  {mobileGroups.apps ? "-" : "+"}
                </span>
              </button>
              <div
                id="mobile-apps-links"
                className={`fb-mobile-accordion-panel ${
                  mobileGroups.apps ? "is-open" : ""
                }`}
              >
                {APP_LINKS.map((app) => (
                  <a
                    key={app.label}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fb-mobile-link fb-mobile-link--sub"
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <span
                      style={{
                        width: 36,
                        height: 36,
                        flexShrink: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: 8,
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={app.icon}
                        alt={app.label}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          padding: 4,
                        }}
                      />
                    </span>
                    <span>{app.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
          <Link href="/contacto" className="fb-button fb-mobile-cta">
            AGENDAR UNA DEMO
          </Link>
          </div>
        </div>
      )}
    </header>
  );
}
