import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

/* Datos de la organización, reutilizados por el JSON-LD de abajo.
 * Un solo lugar para el dominio canónico: si algún día cambia, se cambia
 * aquí y no hay que perseguir og:image/og:url regados por el código. */
const SITE_URL = "https://www.growthsuite.com.mx";
const LOGO_URL = `${SITE_URL}/growthsuite-logo-blue-1024.png`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Growthsuite",
  url: SITE_URL,
  logo: LOGO_URL,
  description:
    "Growthsuite reúne ventas, operación y lealtad para restaurantes en una sola plataforma, con Punto de Venta operado desde WhatsApp.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+52-55-3149-1808",
    contactType: "sales",
    areaServed: "MX",
    availableLanguage: ["es", "en"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Growthsuite",
  url: SITE_URL,
};

/* Document.getInitialProps corre durante el export estático (una vez por
 * página) y sí recibe ctx.pathname, así que podemos poner <html lang="en">
 * solo en /en sin volver esto un componente cliente. */
Document.getInitialProps = async (ctx) => {
  const initialProps = await NextDocument.getInitialProps(ctx);
  const isEnglish = ctx.pathname === "/en" || ctx.pathname.startsWith("/en/");
  return { ...initialProps, htmlLang: isEnglish ? "en" : "es-MX" };
};

export default function Document({ htmlLang = "es-MX" }) {
  return (
    <Html lang={htmlLang}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo192.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0088ff" />
        {/* og:title/og:description/og:image/canonical/hreflang van en cada
         * página vía components/Seo.js (aplicado a todas las páginas reales)
         * — aquí solo lo que NUNCA cambia por página, para no duplicar tags. */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Growthsuite" />
        <meta property="og:locale" content="es_MX" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M3ZX7XW2');
          `,
          }}
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M3ZX7XW2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
