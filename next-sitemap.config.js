module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.growthsuite.com.mx",
  generateRobotsTxt: true, // (optional)
  // /manuales-de-procesos, /impacto-resultados, /indicadores-kpis: contenido
  // interno (procesos, métricas de negocio), ya protegido con meta
  // robots noindex,nofollow en cada página — se excluye también del sitemap
  // para que nunca aparezca ahí aunque alguien quite el meta por error.
  // /abastur: landing temporal de un evento (QR de stand), no debe indexarse
  // ni competir en resultados con las páginas evergreen del sitio.
  // Estas rutas son alias que reexportan literalmente el Home
  // (`export { default } from "./index"`, sin contenido propio) — quedan
  // con canonical hacia "/" (ver components/Seo.js) para no ser contenido
  // duplicado, y por eso tampoco deben aparecer en el sitemap como si
  // fueran URLs propias a indexar.
  exclude: [
    "/manuales-de-procesos",
    "/impacto-resultados",
    "/indicadores-kpis",
    "/abastur",
    "/blog",
    "/casosexito",
    "/casosexitos/*",
    "/comolohacemos",
    "/comolohacemos/*",
    "/cotiza",
    "/demogratis",
    "/encuesta",
    "/gracias",
    "/gracias_ads",
    "/layout",
    "/plans",
    "/prueba",
    "/pruebagratis",
    "/terms_service",
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/manuales-de-procesos" },
      { userAgent: "*", disallow: "/abastur" },
      { userAgent: "*", allow: "/" },
    ],
  },
  outDir: "./out",
};
