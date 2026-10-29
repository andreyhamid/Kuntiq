"use client";

import { LanguageContent } from "./language";



import { useEffect, useState } from "react";

// Fotografías de ejemplo: reemplazar image por /images/campo/tu-foto.jpg.
const slides = [
  { image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=85", title: "Todo empieza en el origen.", text: "Una invitación a descubrir los aromas y sabores del cacao peruano.", position: "center" },
  { image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1920&q=85", title: "Inspirados en la naturaleza.", text: "El campo nos inspira. El cacao nos reúne.", position: "center" },
  { image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=85", title: "Despierta tus sentidos.", text: "Encuentra tu próxima pausa favorita en nuestra tienda virtual.", position: "center" },
];

export default function HomeBanner() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (paused || hovered || focused || reducedMotion) return;
    const timer = window.setInterval(() => setCurrent((value) => (value + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, reducedMotion]);
  return (
    <LanguageContent><section className="home-banner" aria-label="Paisajes y origen de Agromia" aria-roledescription="carrusel" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <div className="banner-photos" aria-hidden="true">
        {slides.map((slide, index) => <div key={slide.image} className={`banner-photo${index === current ? " is-active" : ""}`} style={{ backgroundImage: `url("${slide.image}")`, backgroundPosition: slide.position }} />)}
      </div>
      <div className="banner-shade" />
      <div className="banner-content">
        <span className="eyebrow">Agromia · CACAO Y ORIGEN</span>
        <h1>{slides[current].title}</h1>
        <p>{slides[current].text}</p>

      </div>
      <div className="banner-bottom">
        <span className="sample-caption">Paisajes de ejemplo · Próximamente nuestras fotos del campo</span>
        <div className="banner-controls">
          <button type="button" onClick={() => setCurrent((current + slides.length - 1) % slides.length)} aria-label="Foto anterior">←</button>
          {slides.map((_, index) => <button type="button" key={index} className="banner-dot" aria-label={`Mostrar foto ${index + 1}`} aria-pressed={current === index} onClick={() => setCurrent(index)}><span /></button>)}
          <button type="button" onClick={() => setCurrent((current + 1) % slides.length)} aria-label="Foto siguiente">→</button>
          {!reducedMotion && <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Reanudar carrusel" : "Pausar carrusel"}>{paused ? "▶" : "Ⅱ"}</button>}
        </div>
      </div>
    </section></LanguageContent>
  );
}

