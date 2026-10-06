import Link from "next/link";
import NavBar from "../../components/foodbot/NavBar";
import Seo from "../../components/Seo";
import { listBlogPosts, fmtDate, postExcerpt } from "../../lib/blogApi";

/**
 * Índice del blog. Los artículos se traen en BUILD TIME, no desde el navegador:
 * con `output: "export"` el HTML sale ya con los títulos adentro, que es lo que
 * un buscador puede leer. Si el backend está caído durante el build, la página
 * se publica vacía en vez de tumbar el deploy entero.
 */
export default function BlogIndex({ posts }) {
  return (
    <div>
      <Seo
        title="Blog de Growthsuite: cómo se dirige un restaurante"
        description="Liderazgo, servicio y operación de restaurantes, contado por quienes lo hacen todos los días. Artículos de Growthsuite."
        path="/blog"
      />
      <NavBar />

      <section className="fb-section">
        <div className="fb-container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="fb-pill">Blog</span>
            <h1 className="heading-font mt-4 text-4xl font-semibold md:text-5xl">
              Cómo se dirige un restaurante
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Liderazgo, servicio y operación, contados por quienes lo hacen todos los
              días. Sin teoría de escritorio.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="mt-16 text-center text-slate-500">
              Estamos preparando los siguientes artículos. Vuelve pronto.
            </p>
          ) : (
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-primary/40 hover:shadow-lg"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                      {post.coverImage ? (
                        <img
                          src={post.coverImage}
                          alt={`Portada del artículo ${post.title}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : null}
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h2 className="heading-font text-xl font-semibold leading-snug text-slate-900">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </h2>

                    {postExcerpt(post) && (
                      <p className="text-sm leading-relaxed text-slate-600">
                        {postExcerpt(post)}
                      </p>
                    )}

                    <p className="mt-auto pt-2 text-xs uppercase tracking-wide text-slate-400">
                      {post.authorName || post?.author?.name || "Growthsuite"}
                      {fmtDate(post.publishedAt) && ` · ${fmtDate(post.publishedAt)}`}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const posts = await listBlogPosts(100, 1);
    return { props: { posts } };
  } catch (e) {
    console.error("[blog] no se pudo leer el backend:", e.message);
    return { props: { posts: [] } };
  }
}
