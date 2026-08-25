import Head from "next/head";

/**
 * Componente único para todo el <Head> de SEO de una página: title,
 * description, canonical, Open Graph, Twitter Card y hreflang.
 *
 * Antes cada página no tenía canonical y el og:title/og:description los
 * ponía _document.js igual para TODO el sitio (compartir /modulo/pos en
 * redes mostraba el título genérico del home). Con esto cada página manda
 * su propio contenido social, y _document.js solo deja lo que de verdad
 * no cambia por página (og:type, og:site_name, favicons, JSON-LD).
 *
 * `path` SIEMPRE debe empezar con "/" (o ser "/") — se concatena con
 * SITE_URL para armar canonical/og:url/hreflang absolutos.
 */
export const SITE_URL = "https://www.growthsuite.com.mx";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/growthsuite-logo-blue-1024.png`;

export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  type = "website",
  alternates = null, // [{ hrefLang: "es-mx", path: "/" }, { hrefLang: "en", path: "/en" }]
}) {
  const url = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />

      {noindex && <meta name="robots" content="noindex,follow" />}

      {alternates &&
        alternates.map((alt) => (
          <link
            key={alt.hrefLang}
            rel="alternate"
            hrefLang={alt.hrefLang}
            href={`${SITE_URL}${alt.path}`}
          />
        ))}
    </Head>
  );
}
