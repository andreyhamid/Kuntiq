import Image from "next/image";
import Link from "next/link";
import { LanguageContent } from "../../components/language";
import { experienceKits } from "../../data/experiences";

export const metadata = {
  title: "Experiencia: crea con cacao | Agromia",
  description: "Explora kits para crear chocolate, jabones con manteca de cacao e infusiones de cáscarilla en casa.",
};

function NatureMark() {
  return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M7 25C2 10 14 5 27 5c0 14-7 23-20 20Z" stroke="currentColor" strokeWidth="1.7" /><path d="M5 28 23 10M12 21l-1-7m7 1 6 1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>;
}

export default function ExperienciaPage() {
  return (
    <LanguageContent>
      <main id="contenido" className="experience-shop">
        <section className="experience-hero experience-hero-nature">
          <Image src="/images/experiencia/origen-vivo.png" alt="" fill priority sizes="100vw" className="experience-hero-image" />
          <div className="experience-hero-overlay" />
          <div className="experience-hero-content">
            <span className="eyebrow">Agromia · EXPERIENCIA</span>
            <h1>No solo lo disfrutes.<br />Créalo tú.</h1>
            <p>De tus manos nace algo especial. Explora el cacao, transforma sus ingredientes y construye tu propio momento con nuestros kits.</p>
            <a className="btn-primary" href="#kits">Encuentra tu experiencia ↓</a>
            <span className="experience-caption">Kits en preparación · Contenido y disponibilidad por confirmar</span>
          </div>
          <div className="experience-origin"><NatureMark /><span>Del origen a tus manos</span></div>
        </section>

        <div className="experience-senses" aria-label="Una experiencia para tus sentidos">
          <span><NatureMark />Conecta con la naturaleza</span>
          <span>Descubre aromas y texturas</span>
          <span>Crea algo con tus manos</span>
        </div>

        <section className="experience-intro" aria-label="Cómo elegir tu experiencia">
          <div><span>01</span><h2>Elige qué crear</h2><p>Chocolate, jabón o una infusión. Cada kit propone una forma distinta de explorar el cacao.</p></div>
          <div><span>02</span><h2>Arma tu kit</h2><p>Consulta los ingredientes, accesorios y presentaciones que acompañarán tu proyecto.</p></div>
          <div><span>03</span><h2>Hazlo tuyo</h2><p>Disfruta el proceso de crear, personalizar y compartir algo hecho por ti.</p></div>
        </section>

        <section className="experience-collection" id="kits" aria-labelledby="experience-collection-title">
          <div className="experience-collection-heading"><NatureMark /><span className="eyebrow">TRES FORMAS DE EXPLORAR EL CACAO</span><h2 id="experience-collection-title">Un ingrediente. Muchas formas de crear.</h2><p>Elige el ritual que más se parece a ti.</p></div>
          <nav className="experience-kit-nav" aria-label="Elegir un kit"><a href="#kit-chocolate">Chocolate</a><a href="#kit-jabon">Jabón</a><a href="#kit-infusion">Infusión</a></nav>
          <div className="experience-kit-list">
            {experienceKits.map((kit) => (
              <article key={kit.id} className="experience-kit" id={`kit-${kit.id}`}>
                <div className="experience-kit-photo">
                  <div className="experience-kit-image"><Image src={kit.image} alt={kit.imageAlt} fill sizes="(max-width: 768px) 100vw, 560px" /></div>
                  <div className="experience-photo-caption"><NatureMark /><div><span className="kit-index">EXPERIENCIA {kit.number}</span><small>Imagen referencial del kit</small></div></div>
                </div>
                <div className="experience-kit-copy">
                  <span className="eyebrow">{kit.category}</span><h2>{kit.name}</h2><p>{kit.description}</p>
                  <h3>Contenido propuesto del kit</h3>
                  <ul>{kit.includes.map((item) => <li key={item}>{item}</li>)}</ul>
                  <div className="kit-process">{kit.steps.map((step, index) => <span key={step}>{index + 1}. {step}</span>)}</div>
                  <details className="kit-details"><summary>Detalles antes de elegir</summary><p>{kit.note}</p></details>
                  <div className="kit-purchase"><strong>Consultar precio</strong><a className="product-button" href={"https://wa.me/51953494818?text=" + encodeURIComponent(`Hola Agromia, me interesa la experiencia «${kit.name}». Quisiera conocer el contenido del kit, precio y disponibilidad.`)} target="_blank" rel="noopener noreferrer">Quiero crear con este kit ↗</a></div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="experience-merch"><NatureMark /><span className="eyebrow">OBJETOS CON ESENCIA</span><h2>Completa tu ritual.</h2><p>Una taza artesanal, un bolso o un polo para llevar contigo un poco de Agromia.</p><Link href="/merch" className="product-button">Descubrir Merchandising →</Link></section>
      </main>
    </LanguageContent>
  );
}
