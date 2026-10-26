
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import WhatsAppButton from "../components/whatsappbutton";

export const metadata = {
  title: "KUNTIQ | Cacao, Café y Experiencias",
  description:
    "Descubre el mundo del cacao y café peruano con KUNTIQ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}


