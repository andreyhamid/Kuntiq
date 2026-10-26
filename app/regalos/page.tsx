import ProductCard from "../../components/productcard";
import { gifts } from "../../data/gifts";

export const metadata = { title: "Regalos | KUNTIQ", description: "Descubre nuestras propuestas de packs de regalo con cacao." };
export default function RegalosPage() {
  return <main id="contenido" className="shop-page"><div className="shop-heading"><span>KUNTIQ · REGALOS</span><h1>Detalles para compartir.</h1><p>Un momento de cacao también puede ser un regalo.</p><p className="catalog-note">Packs de ejemplo. Consulta la composición, presentación y disponibilidad por WhatsApp.</p></div><div className="product-grid">{gifts.map((product) => <ProductCard key={product.id} product={product} basePath="/regalos" />)}</div></main>;
}
