import Link from "next/link";
import { notFound } from "next/navigation";
import ProductImage from "../../../components/productimage";
import { products } from "../../../data/products";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  return (
    <main id="contenido" className="shop-page">
      <Link href="/tienda" className="back-link">← Volver a la tienda</Link>
      <article className="product-detail">
        <ProductImage src={product.image} name={product.name} />
        <div className="product-info">
          <span className="eyebrow">{product.category} · {product.weight}</span>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <strong className="detail-price">{product.price !== null ? `S/ ${product.price.toFixed(2)}` : "Consultar precio"}</strong>
          <p>Presentación: {product.weight}</p>
          <Link href="/contacto" className="product-button">Consultar disponibilidad</Link>
        </div>
      </article>
    </main>
  );
}
