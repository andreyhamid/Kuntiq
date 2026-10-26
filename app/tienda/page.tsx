
import ProductCard from "../../components/productcard";
import { products } from "../../data/products";

export default function TiendaPage() {
  return (
    <main id="contenido" className="shop-page">
      <div className="shop-heading">
        <span>KUNTIQ · PRODUCTOS</span>

        <h1>Nuestra tienda</h1>

        <p>
          Descubre el cacao en su esencia más pura.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}

