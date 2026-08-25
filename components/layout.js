import { useRouter } from "next/router";
import FooterFinal from "./FooterFinal";
import WhatsappButton from "./WhatsappButton";

/**
 * Rutas donde el botón flotante de WhatsApp NO se muestra.
 * En /softrestaurant el chat ES el CTA: el botón fijo se encimaba con el botón de enviar
 * (ambos viven en la esquina inferior derecha) y además competía con la conversación. Los
 * CTA de WhatsApp de esa página están dentro del contenido, y sí se trackean.
 */
const HIDE_WHATSAPP_FAB = ["/softrestaurant"];

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const showWhatsappFab = !HIDE_WHATSAPP_FAB.includes(pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Aquí arriba podrías renderizar tu <NavBar> si quieres */}
      <main className="flex-grow">{children}</main>
      {showWhatsappFab && <WhatsappButton />}
      <FooterFinal />
    </div>
  );
}
