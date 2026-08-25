/**
 * Render mínimo del formato que usa el Brain.
 *
 * El agente redacta con markdown ligero (**negritas**) porque su canal original es WhatsApp.
 * En una landing eso se veía como asteriscos crudos — "**$296,835.80**" — que arruina
 * justo el momento WOW: la cifra es lo que el visitante vino a ver.
 *
 * Se resuelve del lado de la vista, no pidiéndole al modelo que cambie su estilo: el mismo
 * texto debe seguir viéndose bien en WhatsApp, donde el markdown SÍ se interpreta.
 *
 * Construye nodos de React, nunca HTML: no hay superficie de inyección aunque el texto
 * viniera manipulado.
 */
export default function RichText({ text }) {
  const parts = String(text || "").split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") && part.length > 4 ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
