# Growthsuite — sitio web (Next.js, `output: "export"`)

Sitio corporativo de Growthsuite (POS/plataforma para restaurantes).
Next.js pages router, export estático a `out/` (Vercel), Tailwind.

## Regla fija: todo cambio al sitio pasa por SEO

Cada vez que se cree, edite o borre una página (`pages/`), un componente
que se renderiza en una página, o contenido de `data/`, carga y aplica el
skill **`seo-checklist`** antes de dar el cambio por terminado — no solo
cuando el usuario lo pida explícitamente. El diseño bonito no es el
trabajo completo si la página no tiene title/description/canonical únicos,
no está en el sitemap correcto, o rompe un `h1`/alt text. Ver
`.claude/skills/seo-checklist/SKILL.md` para el checklist completo y el
porqué (hubo bugs reales de SEO en agosto 2026 por no hacer esto desde el
inicio).

Dominio real: `https://www.growthsuite.com.mx` (nunca hardcodear otro —
usar `SITE_URL`/`DEFAULT_OG_IMAGE` de `components/Seo.js`).
