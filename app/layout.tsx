
import "./globals.css";
import { LanguageProvider, LanguageContent } from "../components/language";
import Header from "../components/header";
import Footer from "../components/footer";
import WhatsAppButton from "../components/whatsappbutton";

export const metadata = {
  title: "Agromia | Cacao, Café y Experiencias",
  description:
    "Descubre el mundo del cacao y café peruano con Agromia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body><LanguageProvider><LanguageContent>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </LanguageContent></LanguageProvider></body>
    </html>
  );
}


