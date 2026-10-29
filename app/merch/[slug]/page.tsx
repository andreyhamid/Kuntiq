
import { LanguageContent } from "../../../components/language";
﻿import Link from "next/link";
import { notFound } from "next/navigation";
import ProductImage from "../../../components/productimage";
import { merch } from "../../../data/merch";
export function generateStaticParams() { return merch.map(({ slug }) => ({ slug })); }
export default async function MerchDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = merch.find((item) => item.slug === slug);
  if (!product) notFound();
  const url = "https://wa.me/51953494818?text=" + encodeURIComponent(`Hola Agromia, quisiera consultar modelos, precio y disponibilidad de ${product.name}.`);
  return <LanguageContent><main id="contenido" className="shop-page"><Link href="/merch" className="back-link">← Volver a Merchandising</Link><article className="product-detail"><ProductImage src={product.image} name={product.name} /><div className="product-info"><span className="eyebrow">{product.category}</span><h1>{product.name}</h1><p>{product.description}</p><strong className="detail-price">Consultar precio</strong><p>{product.weight}</p><p>Colección en preparación. Consulta los detalles antes de realizar tu pedido.</p><a href={url} className="product-button" target="_blank" rel="noopener noreferrer">Consultar por WhatsApp ↗</a></div></article></main></LanguageContent>;
}
