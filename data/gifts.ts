import type { Product } from "./products";

// Packs de ejemplo: confirmar composición, presentaciones y precios antes de vender.
export const gifts: Product[] = [
  { id: 101, slug: "pack-1", name: "Pack 1", description: "Propuesta de regalo con cacao en polvo y pasta de cacao para preparar una bebida especial. Contenido final por confirmar.", weight: "Presentaciones por confirmar", price: null, image: "/images/regalos/pack-1.png", category: "Pack de regalo" },
  { id: 102, slug: "pack-2", name: "Pack 2", description: "Propuesta de regalo con chocolate al 55% y cáscarilla de cacao para acompañar una pausa. Contenido final por confirmar.", weight: "Presentaciones por confirmar", price: null, image: "/images/regalos/pack-2.png", category: "Pack de regalo" },
  { id: 103, slug: "pack-3", name: "Pack 3", description: "Propuesta de regalo con cacao en polvo, manteca de cacao y chocolate al 55% para inspirar nuevas recetas. Contenido final por confirmar.", weight: "Presentaciones por confirmar", price: null, image: "/images/regalos/pack-3.png", category: "Pack de regalo" },
];
