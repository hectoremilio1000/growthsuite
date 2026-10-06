/**
 * Cliente del backend del blog (Adonis, el mismo que ya alimenta a Impulso).
 *
 * Se llama SOLO en build time (getStaticProps/getStaticPaths): el sitio es
 * `output: "export"`, así que los artículos quedan como HTML plano en `out/`.
 * Eso es lo que hace que Google los pueda leer — el blog de Impulso los pide
 * desde el navegador con useEffect y por eso su índice no indexa.
 *
 * `normalizeBase` existe por un bug real: el .env de Impulso guarda la URL con
 * "/" al final y sin "/api", y el backend contesta 404 a "//blog-posts". En vez
 * de exigir que la variable venga escrita con un formato exacto, la normalizamos
 * aquí una sola vez: así ni un slash de más ni un "/api" faltante rompen el build.
 */
const RAW = process.env.NEXT_PUBLIC_BLOG_API || "";

export function normalizeBase(raw) {
  const base = String(raw || "").trim().replace(/\/+$/, "");
  if (!base) return "";
  return base.endsWith("/api") ? base : `${base}/api`;
}

const API = normalizeBase(RAW);

async function get(path) {
  if (!API) throw new Error("NEXT_PUBLIC_BLOG_API no está configurada");
  const res = await fetch(`${API}${path}`);
  if (!res.ok) throw new Error(`GET ${path} → ${res.status}`);
  return res.json();
}

/** Lista pública paginada → { meta, data } */
export async function listBlogPosts(limit = 100, page = 1) {
  const json = await get(`/blog-posts?limit=${limit}&page=${page}`);
  const rows = Array.isArray(json?.data) ? json.data : Array.isArray(json) ? json : [];
  return rows.filter((p) => p && p.slug);
}

/** Detalle por slug, con sus bloques de contenido */
export async function getBlogPostBySlug(slug) {
  return get(`/blog-posts/${encodeURIComponent(slug)}`);
}

/** Fecha legible en español; cadena vacía si no hay fecha válida. */
export function fmtDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" });
}

/** Texto de arranque para la tarjeta y para la meta description. */
export function postExcerpt(post, max = 160) {
  const raw = String(post?.excerpt || post?.bannerPhrase || "").trim();
  if (!raw) return "";
  return raw.length > max ? `${raw.slice(0, max - 1).trimEnd()}…` : raw;
}
