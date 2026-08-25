import FooterFinal from "./FooterFinal";
import WhatsappButton from "./WhatsappButton";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Aquí arriba podrías renderizar tu <NavBar> si quieres */}
      <main className="flex-grow">{children}</main>
      <WhatsappButton />
      <FooterFinal />
    </div>
  );
}
