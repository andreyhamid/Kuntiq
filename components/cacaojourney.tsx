"use client";

import { LanguageContent } from "./language";


import { useState } from "react";

const stages = [
  { title: "Cosecha", subtitle: "Todo empieza en una mazorca", text: "Se recolectan los frutos maduros y se extraen los granos rodeados de pulpa.", detail: "El chocolate empieza como una semilla dentro del fruto del cacao." },
  { title: "Fermentación", subtitle: "El sabor empieza a formarse", text: "Los granos con su pulpa fermentan. Esta transformación ayuda a desarrollar los precursores del aroma y el sabor.", detail: "Es una etapa clave del trabajo en el origen." },
  { title: "Secado", subtitle: "Del fruto al grano seco", text: "Se reduce la humedad de los granos, frecuentemente al sol, para facilitar su conservación.", detail: "Los granos se remueven para favorecer un secado uniforme." },
  { title: "Tostado y descascarillado", subtitle: "Se revela el aroma", text: "El tostado desarrolla los aromas. Al retirar la cáscara se obtienen los fragmentos del interior, llamados nibs.", detail: "La cáscara y el interior del grano siguen caminos distintos." },
  { title: "Molienda", subtitle: "Los nibs se convierten en pasta", text: "Al moler los nibs se libera su manteca y se obtiene una pasta de cacao.", detail: "La pasta contiene tanto sólidos de cacao como manteca de cacao." },
  { title: "Mezcla, refinado y conchado", subtitle: "Una textura más fina", text: "La pasta se combina con los ingredientes de la receta. El refinado y el conchado ayudan a desarrollar una textura fina y el sabor.", detail: "La formulación cambia según el chocolate que se quiere elaborar." },
  { title: "Templado y moldeado", subtitle: "Del grano al chocolate", text: "Se controla la temperatura del chocolate y se vierte en moldes para que cristalice.", detail: "El templado ayuda a lograr brillo, firmeza y una buena textura." },
];

function CacaoIllustration({ stage }: { stage: number }) {
  return <LanguageContent><svg className="cacao-illustration" viewBox="0 0 420 300" role="img" aria-label={`Ilustración de ${stages[stage].title.toLowerCase()}`}>
    <circle cx="210" cy="145" r="125" fill="#e5d5bb" /><ellipse cx="210" cy="260" rx="125" ry="12" fill="#38251f18" />
    {stage === 0 ? <g><path d="M210 55c-110 55-85 150 0 190 85-40 110-135 0-190Z" fill="#b97635" stroke="#714124" strokeWidth="4" /><path d="M210 65c-45 55-45 120 0 170m0-170c45 55 45 120 0 170m0-175v180" fill="none" stroke="#e7af58" strokeWidth="5" /><path d="M210 55q-5-30 30-32-3 25-30 32" fill="#597347" /></g> : stage === 6 ? <g transform="rotate(-12 210 150)"><rect x="125" y="65" width="170" height="175" rx="12" fill="#38251f" />{[0,1,2].flatMap((row) => [0,1].map((col) => <rect key={`${row}-${col}`} x={138+col*77} y={78+row*51} width="67" height="41" rx="5" fill="#694535" stroke="#a57856" strokeWidth="2" />))}</g> : stage >= 4 ? <g><path d="M100 170h220q-10 80-110 80t-110-80" fill="#976c4e" /><ellipse cx="210" cy="170" rx="110" ry="30" fill="#482c23" /><path d="M175 80q-30 35 20 50t5 45" stroke="#482c23" strokeWidth="17" fill="none" strokeLinecap="round" />{stage===5 && <path d="m265 90-45 90" stroke="#ba8b62" strokeWidth="12" strokeLinecap="round" />}</g> : <g>{stage===2 && <g fill="#d99d39"><circle cx="310" cy="65" r="24" /><path d="M310 25v10m0 60v10m-40-40h-10m90 0h10m-21-29-8 8m-42 42-8 8" stroke="#d99d39" strokeWidth="4" /></g>}{stage===1 && <rect x="90" y="120" width="240" height="125" rx="10" fill="#aa7c53" />}{[0,1,2].flatMap((row) => [0,1,2,3].map((col) => <g key={`${row}-${col}`} transform={`translate(${125+col*55} ${135+row*35}) rotate(-25)`}><ellipse rx="21" ry="13" fill={stage===1 ? "#f5e6c8" : "#75452e"} /><path d="M-13 0h26" stroke={stage===1 ? "#c4ac87" : "#b78458"} strokeWidth="2" /></g>))}{stage===3 && <path d="M180 95q-12-15 0-28m30 28q-12-15 0-28m30 28q-12-15 0-28" fill="none" stroke="#a5683f" strokeWidth="4" />}</g>}
  </svg></LanguageContent>;
}

export default function CacaoJourney() {
  const [active, setActive] = useState(0);
  return <LanguageContent><section className="cacao-journey" aria-label="Explora las etapas del cacao"><div className="journey-steps" aria-label="Seleccionar etapa">{stages.map((stage, index) => <button key={stage.title} type="button" aria-pressed={active===index} aria-controls="journey-detail" onClick={() => setActive(index)}><span>{String(index+1).padStart(2,"0")}</span>{stage.title}</button>)}</div><div id="journey-detail" className="journey-detail" aria-live="polite" aria-atomic="true"><div className="journey-art"><CacaoIllustration stage={active} /><span>ETAPA {active+1} DE {stages.length}</span></div><div className="journey-copy"><span className="eyebrow">{stages[active].title}</span><h2>{stages[active].subtitle}</h2><p>{stages[active].text}</p><p className="journey-fact">{stages[active].detail}</p><div className="journey-controls"><button type="button" disabled={active===0} onClick={() => setActive(active-1)}>← Anterior</button><button type="button" disabled={active===stages.length-1} onClick={() => setActive(active+1)}>Siguiente →</button></div></div></div></section></LanguageContent>;
}
