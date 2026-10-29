
import { LanguageContent } from "../../../components/language";
﻿import Link from "next/link";
import { notFound } from "next/navigation";
import ProductImage from "../../../components/productimage";
import { gifts } from "../../../data/gifts";

export function generateStaticParams() { return gifts.map(({ slug }) => ({ slug })); }
export default async function GiftPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gift = gifts.find((item) => item.slug === slug);
  if (!gift) notFound();
  const url = "https://wa.me/51953494818?text=" + encodeURIComponent(`Hola Agromia, quisiera consultar el contenido, precio y disponibilidad del ${gift.name}.`);
  return <LanguageContent><main id="contenido" className="shop-page"><Link href="/regalos" className="back-link">← Volver a regalos</Link><article className="product-detail"><ProductImage src={gift.image} name={gift.name} /><div className="product-info"><span className="eyebrow">{gift.category}</span><h1>{gift.name}</h1><p>{gift.description}</p><strong className="detail-price">Consultar precio</strong><p>{gift.weight}</p><a href={url} className="product-button" target="_blank" rel="noopener noreferrer">Consultar este pack por WhatsApp ↗</a></div></article></main></LanguageContent>;
}
