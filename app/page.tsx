
import { LanguageContent } from "../components/language";
﻿import Link from "next/link";
import HomeBanner from "../components/homebanner";
import ProductRibbon from "../components/productribbon";
import { whatsappUrl } from "../components/whatsappbutton";

export default function Home() {
  return (
    <LanguageContent><main id="contenido">
      <HomeBanner />
      <section id="quienes-somos" className="home-about">
        <div><span className="eyebrow">QUIÉNES SOMOS</span><h2>El origen nos inspira.<br />El sabor nos conecta.</h2></div>
        <div className="about-copy"><p>Somos KUNTIQ, una tienda virtual de San Miguel, Lima, que nace de la pasión por el cacao, el café y las experiencias sensoriales.</p><p>Queremos acercarte a los aromas y sabores del cacao peruano, con productos para disfrutar en una bebida, una receta o una pausa en tu día.</p><Link href="/origen" className="text-link">Conoce nuestra esencia →</Link><div className="about-tags"><span>Cacao peruano</span><span>Tienda virtual</span><span>San Miguel · Lima</span></div></div>
      </section>
      <ProductRibbon />
      <section id="contacto" className="home-contact" aria-labelledby="contact-title">
        <div><span className="eyebrow">ESTAMOS CERCA</span><h2 id="contact-title">Tu próxima pausa<br />empieza aquí.</h2><p>¿Te interesa un producto? Escríbenos para consultar precios, disponibilidad y coordinar tu pedido.</p><a className="contact-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Conversemos por WhatsApp ↗</a></div>
        <div className="contact-details"><div><span>WHATSAPP</span><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">+51 953 494 818</a></div><div><span>UBICACIÓN</span><p>San Miguel, Lima, Perú</p></div><div><span>CÓMO COMPRAR</span><p>Somos una tienda virtual.<br />Atendemos consultas y pedidos por WhatsApp.</p></div></div>
      </section>
    </main></LanguageContent>
  );
}
