import NavBar from "./Navbar";
import FooterFinal from "./FooterFinal";
import WhatsappButton from "./WhatsappButton";

import { useRouter } from "next/router";
import NavBarEn from "../components/NavBarEn/NavBarEn";
import NavBarEs from "../components/NavBarEs/NavBarEs";

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

  // const router = useRouter();
  // const { locale } = router;

  // let NavBarComponent;

  // switch (locale) {
  //     case 'en':
  //         NavBarComponent = NavBarEn;
  //         break;
  //     case 'es':
  //         NavBarComponent = NavBarEs;
  //         break;
  //     default:
  //         NavBarComponent = NavBarEs;
  // }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Aquí arriba podrías renderizar tu <NavBar> si quieres */}
      <main className="flex-grow">{children}</main>
      {showWhatsappFab && <WhatsappButton />}
      <FooterFinal />
    </div>
  );
}
