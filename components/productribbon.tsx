"use client";

import { LanguageContent } from "./language";


import Link from "next/link";
import { useState } from "react";
import { products } from "../data/products";
import ProductImage from "./productimage";

export default function ProductRibbon() {
  const [paused, setPaused] = useState(false);
  return (
    <LanguageContent><section className={`home-products${paused ? " ribbon-paused" : ""}`} aria-labelledby="home-products-title">
      <div className="section-heading"><div><span className="eyebrow">DE NUESTRA TIENDA</span><h2 id="home-products-title">Un mundo de cacao.</h2></div><div className="ribbon-actions"><button className="ribbon-pause" type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Reanudar movimiento" : "Pausar movimiento"}</button><Link href="/tienda" className="text-link">Ver toda la tienda →</Link></div></div>
      <div className="ribbon-window">
        <div className="ribbon-track">
          {[0, 1].map((copy) => (
            <div className="ribbon-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {products.map((product) => <Link key={product.id} href={`/tienda/${product.slug}`} className="ribbon-card" tabIndex={copy === 1 ? -1 : 0}><ProductImage src={product.image} name={product.name} /><span className="ribbon-category">{product.category}</span><h3>{product.name}</h3><p>{product.weight}</p><strong>{product.price !== null ? `S/ ${product.price.toFixed(2)}` : "Consultar precio"}</strong><span className="ribbon-more">Descubrir producto →</span></Link>)}
            </div>
          ))}
        </div>
      </div>
    </section></LanguageContent>
  );
}
