import Link from "next/link";
import ProductImage from "./productimage";
import type { Product } from "../data/products";

export default function ProductCard({ product, basePath = "/tienda" }: { product: Product; basePath?: string }) {
  return (
    <article className="product-card">
      <Link href={`${basePath}/${product.slug}`}>
        <ProductImage src={product.image} name={product.name} />
        <h3>{product.name}</h3>
      </Link>
      <p className="product-category">{product.category} · {product.weight}</p>
      <p className="product-description">{product.description}</p>
      <strong>{product.price !== null ? `S/ ${product.price.toFixed(2)}` : "Consultar precio"}</strong>
      <Link href={`${basePath}/${product.slug}`} className="product-button">Ver producto <span aria-hidden="true">→</span></Link>
    </article>
  );
}

