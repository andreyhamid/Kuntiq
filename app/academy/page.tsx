import { LanguageContent } from "../../components/language";

export const metadata = {
  title: "Academy | Agromia",
  description: "Aprende sobre cacao y café con cursos presenciales y virtuales, talleres prácticos y experiencias de cata.",
};

const formats = [
  { id: "presenciales", title: "Cursos presenciales", intro: "Aprende de cerca, conecta con el origen.", description: "Un espacio para conocer el cacao y el café, conversar sobre sus procesos y desarrollar tus habilidades junto a otras personas que comparten tu curiosidad.", topics: ["Del grano al chocolate: ingredientes y procesos", "Fundamentos del cacao y del café", "Aprendizaje acompañado y en comunidad"] },
  { id: "virtuales", title: "Cursos virtuales", intro: "El conocimiento, donde estés.", description: "Acércate al mundo del cacao y el café desde casa. Una propuesta para comprender sus ingredientes, explorar técnicas y encontrar nuevas ideas para tus preparaciones.", topics: ["Conceptos para empezar desde cero", "Técnicas y preparaciones para explorar en casa", "Consulta la modalidad y los materiales de cada curso"] },
  { id: "talleres", title: "Talleres prácticos", intro: "Aprende haciendo, crea con tus manos.", description: "Sesiones enfocadas en transformar ingredientes en algo propio. Explora preparaciones con cacao, descubre nuevas texturas y disfruta el proceso de crear.", topics: ["Elaboración de chocolates y preparaciones con cacao", "Exploración de ingredientes y técnicas", "Consulta los materiales incluidos en cada taller"] },
  { id: "catas", title: "Catas y experiencias", intro: "Haz una pausa y despierta tus sentidos.", description: "Descubre los matices del cacao y el café a través del aroma, la textura y el sabor. Una invitación a probar con atención, compartir sensaciones y conectar con el origen.", topics: ["Introducción a la degustación de cacao y café", "Reconocimiento de aromas, sabores y texturas", "Momentos para descubrir y compartir"] },
];

export default function AcademyPage() {
  return <LanguageContent><main id="contenido" className="academy-page">
    <section className="experience-hero">
      <span className="eyebrow">Agromia · ACADEMY</span>
      <h1>El origen se descubre.<br />El conocimiento se comparte.</h1>
      <p>Un espacio para aprender, crear y despertar tus sentidos alrededor del cacao y el café. Encuentra una forma de explorar que conecte contigo.</p>
      <a className="btn-primary" href="#formacion">Explora Academy ↓</a>
      <span className="experience-caption">Propuesta formativa en preparación. Consulta fechas, modalidades, precios y disponibilidad.</span>
    </section>
    <nav className="academy-navigation" aria-label="Modalidades de Academy">
      {formats.map(format => <a href={`#${format.id}`} key={format.id}>{format.title} <span aria-hidden="true">↘</span></a>)}
    </nav>
    <section id="formacion" className="academy-grid" aria-label="Nuestra propuesta de aprendizaje">
      {formats.map((format, index) => <article id={format.id} key={format.id} className="academy-card">
        <span className="eyebrow">0{index + 1} · ACADEMY</span>
        <h2>{format.title}</h2>
        <h3>{format.intro}</h3>
        <p>{format.description}</p>
        <ul>{format.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
        <a className="product-button" href={`https://wa.me/51953494818?text=${encodeURIComponent(`Hola Agromia, quisiera información sobre Academy: ${format.title}. ¿Cuáles son las próximas fechas, modalidad, precio y disponibilidad?`)}`} target="_blank" rel="noopener noreferrer">Consultar esta modalidad ↗</a>
      </article>)}
    </section>
    <section className="experience-merch"><span className="eyebrow">APRENDER ES PARTE DEL VIAJE</span><h2>Tu curiosidad es el punto de partida.</h2><p>No necesitas experiencia previa para empezar a descubrir. Escríbenos y te ayudamos a elegir una propuesta según tus intereses y el nivel de cada actividad.</p><a className="product-button" href="/contacto">Conversemos sobre Academy →</a></section>
  </main></LanguageContent>;
}
