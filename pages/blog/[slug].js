import Link from "next/link";
import NavBar from "../../components/foodbot/NavBar";
import Seo, { SITE_URL, DEFAULT_OG_IMAGE } from "../../components/Seo";
import {
  listBlogPosts,
  getBlogPostBySlug,
  fmtDate,
  postExcerpt,
} from "../../lib/blogApi";

/**
 * Un bloque del artículo. El backend guarda el contenido como lista tipada
 * (paragraph / heading / image), no como HTML, así que aquí se decide cómo se
 * ve cada tipo. Un tipo que no conozcamos se ignora en silencio en vez de
 * romper la página: el backend puede agregar tipos nuevos sin tumbar el build.
 */
function Block({ block }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="heading-font mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
          {block.text}
        </h2>
      );
    case "paragraph":
      return <p className="mt-6 text-lg leading-relaxed text-slate-700">{block.text}</p>;
    case "image":
      return block.imageUrl ? (
        <figure className="mt-10">
          <img
            src={block.imageUrl}
            alt={block.caption || ""}
            loading="lazy"
            className="w-full rounded-2xl"
          />
          {block.caption && (
            <figcaption className="mt-3 text-center text-sm text-slate-500">
              {block.caption}
            </figcaption>
          )}
        </figure>
      ) : null;
    default:
      return null;
  }
}

export default function BlogPost({ post }) {
  if (!post) return null;

  const author = post.authorName || post?.author?.name || "Growthsuite";
  const fecha = fmtDate(post.publishedAt);
  const blocks = [...(post.blocks || [])].sort(
    (a, b) => (a.order ?? a.sortOrder ?? 0) - (b.order ?? b.sortOrder ?? 0)
  );

  return (
    <div>
      <Seo
        title={post.title}
        description={
          postExcerpt(post) ||
          `${post.title} — artículo del blog de Growthsuite para restaurantes.`
        }
        path={`/blog/${post.slug}`}
        image={post.coverImage || DEFAULT_OG_IMAGE}
        type="article"
      />
      <NavBar />

      <article>
        {/* Portada. El h1 vive aquí y es el único de la página. */}
        <header className="relative isolate overflow-hidden bg-slate-900 pb-16 pt-32 md:pb-24 md:pt-40">
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
            />
          )}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-900" />

          <div className="fb-container">
            <div className="mx-auto max-w-3xl text-center text-white">
              <Link
                href="/blog"
                className="text-sm font-medium text-white/70 transition hover:text-white"
              >
                ← Volver al blog
              </Link>
              <h1 className="heading-font mt-6 text-3xl font-semibold leading-tight md:text-5xl">
                {post.title}
              </h1>
              {post.bannerPhrase && (
                <p className="mt-5 text-lg italic text-white/80">{post.bannerPhrase}</p>
              )}
              <p className="mt-6 text-sm text-white/60">
                {author}
                {fecha && ` · ${fecha}`}
              </p>
            </div>
          </div>
        </header>

        <section className="fb-section">
          <div className="fb-container">
            <div className="mx-auto max-w-3xl">
              {blocks.length ? (
                blocks.map((b) => <Block key={b.id} block={b} />)
              ) : (
                <p className="text-slate-500">Este artículo todavía no tiene contenido.</p>
              )}

              <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
                <p className="heading-font text-xl font-semibold text-slate-900">
                  ¿Quieres que tu restaurante opere así de ordenado?
                </p>
                <p className="mt-3 text-slate-600">
                  Growthsuite junta punto de venta, inventarios, personal y clientes en un
                  solo lugar.
                </p>
                <Link href="/precio" className="fb-btn fb-btn-primary mt-6 inline-flex">
                  Ver planes
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  try {
    const posts = await listBlogPosts(200, 1);
    return { paths: posts.map((p) => ({ params: { slug: p.slug } })), fallback: false };
  } catch (e) {
    console.error("[blog] no se pudieron listar los slugs:", e.message);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  try {
    const post = await getBlogPostBySlug(params.slug);
    if (!post || !post.slug) return { notFound: true };
    return { props: { post } };
  } catch (e) {
    console.error(`[blog] no se pudo leer "${params.slug}":`, e.message);
    return { notFound: true };
  }
}
