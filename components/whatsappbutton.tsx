
import { LanguageContent } from "./language";
export const whatsappUrl = "https://wa.me/51953494818?text=" + encodeURIComponent("Hola KUNTIQ, quisiera información sobre sus productos.");

export default function WhatsAppButton() {
  return (
    <LanguageContent><a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Consultar a KUNTIQ por WhatsApp (abre en otra pestaña)">
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 .8A15.1 15.1 0 0 0 3 23.6L.8 31.2l7.8-2.1A15.2 15.2 0 1 0 16 .8Zm0 27.7a12.5 12.5 0 0 1-6.4-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A12.6 12.6 0 1 1 16 28.5Zm6.9-9.4c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2l-1.2 1.4c-.2.2-.4.3-.8.1-1.1-.5-2-1.1-2.9-1.9-.8-.7-1.4-1.6-1.9-2.4-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.2-2.8c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.1s1.4 3.6 1.6 3.9c.2.2 2.8 4.3 6.7 6 .9.4 1.6.6 2.2.8.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5Z" /></svg>
    </a></LanguageContent>
  );
}
