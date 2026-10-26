
import { LanguageContent } from "../../components/language";
﻿import { whatsappUrl } from "../../components/whatsappbutton";
export default function ContactoPage() {
  return <LanguageContent><main id="contenido" className="content-page"><span className="eyebrow">KUNTIQ · CONTACTO</span><h1>Conversemos.</h1><p>Somos una tienda virtual ubicada en San Miguel, Lima, Perú.</p><p>Escríbenos al <strong>+51 953 494 818</strong> para consultar productos, precios y disponibilidad, o coordinar tu pedido.</p><a className="product-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Escribir por WhatsApp ↗</a></main></LanguageContent>;
}
