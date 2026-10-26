import ProductCard from "../../components/productcard";
import { merch } from "../../data/merch";
export const metadata = { title: "Merch y artesanía | KUNTIQ", description: "Polos, tazas, bolsos y piezas artesanales para llevar la esencia de KUNTIQ contigo." };
export default function MerchPage() {
  return <main id="contenido" className="shop-page"><div className="shop-heading"><span>KUNTIQ · MERCH</span><h1>La esencia también se lleva.</h1><p>Polos, tazas, bolsos y detalles artesanales para acompañar tus momentos.</p><p className="catalog-note">Colección en preparación. Modelos, materiales, precios y disponibilidad por confirmar.</p></div><div className="product-grid">{merch.map((product) => <ProductCard key={product.id} product={product} basePath="/merch" />)}</div></main>;
}
