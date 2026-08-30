---
name: seo-checklist
description: Checklist de SEO técnico del sitio Growthsuite (Next.js, export estático). Úsalo SIEMPRE que se cree, edite o borre una página, ruta, componente que se renderiza en pages/, o contenido en data/ — no solo cuando el usuario pida "SEO" explícitamente. Antes de dar por terminado cualquier cambio visible en el sitio, revisa este checklist.
user-invocable: true
---

# SEO en Growthsuite — checklist de todo cambio al sitio

## Por qué existe esto

En agosto 2026 se auditó el sitio y se encontraron bugs de SEO activos:
`robots.txt` apuntando al dominio de otro proyecto, `og:image` a un dominio
que no es el real, 27 URLs sirviendo contenido idéntico al home sin
canonical, cero structured data, cero hreflang. Se arregló todo, pero nada
de eso se habría roto si el hábito hubiera sido "cada cambio de página pasa
por el checklist de SEO" desde el principio. Ese es el punto de este
archivo: el usuario no debería tener que pedir "hazme SEO" cada vez —
es parte de terminar el trabajo, igual que probar que compila.

**Dominio real: `https://www.growthsuite.com.mx`** (confirmado en
`.env`/`.env.example`). Nunca hardcodees otro dominio en ningún lado —
importa `SITE_URL` / `DEFAULT_OG_IMAGE` desde `components/Seo.js`.

## Checklist — aplica lo que corresponda al cambio que estás haciendo

### 1. ¿Es una página nueva o le tocaste el `<Head>` a una existente?
Debe renderizar `<Seo>` de `components/Seo.js` (no `next/head` a mano,
no repetir og/twitter tags sueltos). Mínimo:

```jsx
import Seo from "../components/Seo"; // ajusta la ruta relativa

<Seo
  title="Algo específico de ESTA página | Growthsuite" // ~50-60 chars, palabra clave al frente
  description="Qué es, para quién, y por qué le sirve. Sin relleno." // ~140-160 chars
  path="/la-ruta-real-de-esta-pagina"
/>
```

- `title`/`description` **únicos** — nunca copiados de otra página ni del
  genérico del home. Si dos páginas dicen lo mismo, Google las trata como
  duplicadas.
- Si la página tiene una imagen representativa (foto del módulo, del caso
  de éxito, etc.), pásala como `image={`${SITE_URL}/esa-imagen.png`}` —
  si no, se usa el logo por default, está bien.
- Página en inglés, legal, o cualquier variante de idioma: usa `alternates`
  (ver `pages/index.js` / `pages/en/index.js` como ejemplo) para hreflang
  bidireccional `es-mx` / `en` / `x-default`.
- `pages/_document.js` es SOLO para lo que nunca cambia por página
  (favicons, `og:site_name`, `og:locale`, JSON-LD global). Si necesitas
  algo que varía por página, va en el `<Seo>` de esa página, nunca ahí —
  si lo pones en los dos lugares se duplica el tag (ya pasó, es un bug
  real que sale en el HTML final).

### 2. ¿La página es contenido real, o es un duplicado/alias de otra?
Si estás creando una página que reexporta otra (`export { default } from
"./index"`) o que en la práctica muestra el mismo contenido que ya existe
en otra ruta: dale `path` de la página ORIGINAL en su `<Seo>` (así el
canonical apunta a la de verdad), y agrégala a `exclude` en
`next-sitemap.config.js` (con glob si es toda una carpeta, ej.
`"/comolohacemos/*"`). No debe competir con la original en el sitemap.

### 3. ¿La página es interna / no debe salir en buscadores?
(paneles internos, manuales, landings temporales de un evento/campaña,
data de negocio sensible)
- `<Seo noindex ... />` (queda `noindex,follow`).
- Agrégala también a `exclude` en `next-sitemap.config.js` para que ni
  siquiera aparezca en el sitemap generado.
- Si de verdad es sensible (cifras de ventas, KPIs internos) y no solo
  "no la quiero en Google", el `noindex` NO la oculta de alguien con el
  link directo — eso es un tema de control de acceso, no de SEO. Avisa al
  usuario si ves este caso, no lo resuelvas solo.

### 4. Encabezados (`h1`/`h2`/`h3`)
Exactamente **un `<h1>` por página** — el título principal, con la
palabra clave de esa página. Todo lo demás (secciones internas) usa
`h2`/`h3` en orden, nunca saltarse de `h1` a `h3`. Si copiaste una
sección de otra página revisa que no haya quedado un segundo `h1`.

### 5. Imágenes (`<img>`)
Todo `<img>` que aporte información necesita `alt` descriptivo (qué se ve
o qué representa, no el nombre del archivo, no "imagen1"). Excepción:
imágenes puramente decorativas o clones (ej. el logo duplicado del
carrusel infinito en `fb-logo-marquee`) — esas sí llevan `alt=""` pero el
contenedor debe tener `aria-hidden="true"`. Si no estás seguro de cuál es
tu caso, dale alt descriptivo — es la opción segura.

### 6. Rutas dinámicas (`[slug].js`)
Si tocas `pages/modulo/[slug].js`, `pages/tipo-restaurante/[slug].js`, o
agregas un patrón `[slug]` nuevo: el `<Seo>` debe usar los datos reales
de CADA slug (title/description/image ya vienen de `data/*.js` — no
generalices con un Head estático igual para todos). Verifica que
`getStaticPaths` genere todos los slugs esperados y que el `path` del
`<Seo>` incluya el slug real (`/modulo/${data.slug}`, no una ruta fija).

### 7. Enlaces internos y anchor text
Cuando agregues un link a otra página del sitio, usa texto descriptivo
del destino ("Ver el módulo de Punto de Venta", no "clic aquí"). Ayuda al
SEO interno y a accesibilidad al mismo tiempo.

### 8. Antes de dar el cambio por terminado
```bash
npm run build   # corre next build + postbuild (next-sitemap)
```
Y una revisión rápida del HTML exportado en `out/`:
- `grep -c 'property="og:title"' out/<pagina>.html` → debe dar **1**
  (si da 2+, hay un tag duplicado entre `_document.js` y el `<Seo>` de la
  página).
- `grep '<link rel="canonical"' out/<pagina>.html` → debe existir y
  apuntar a la URL correcta.
- `grep -rlE "lalloronacantina|impulsorestaurantero|growthsuite\.tech" out/`
  → no debe devolver nada. Si alguna vez aparece, es que alguien copió/
  pegó un componente viejo sin revisar sus dominios (ya pasó una vez,
  ver `git log` del commit "feat(seo): SEO técnico completo del sitio").

## Dónde está cada cosa (referencia rápida)
- `components/Seo.js` — el componente de SEO por página. `SITE_URL` y
  `DEFAULT_OG_IMAGE` se exportan desde aquí.
- `pages/_document.js` — solo lo global: favicons, `og:site_name`,
  `og:locale`, JSON-LD `Organization`+`WebSite`, `<html lang>` dinámico
  (detecta `/en` vía `Document.getInitialProps`).
- `next-sitemap.config.js` — `siteUrl` + `exclude` (páginas duplicadas/
  internas que no deben aparecer en el sitemap).
- `public/robots.txt` — fallback estático; el real que se sirve en
  producción lo genera `next-sitemap` en el postbuild hacia `out/`.
