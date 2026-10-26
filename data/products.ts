
export type Product = {
  id: number;
  slug: string;
  name: string;
  description: string;
  weight: string;
  price: number | null;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "cacao-polvo-200g",
    name: "Cacao en polvo 100%",
    description:
      "Cacao puro en polvo, presentación de 200 gramos. Ideal para preparar bebidas y recetas con cacao.",
    weight: "200 g",
    price: 15,
    image: "/images/productos/cacao-polvo-200g.jpg",
    category: "Cacao",
  },
  {
    id: 2,
    slug: "pasta-cacao-90g",
    name: "Pasta de cacao 100%",
    description:
      "Pasta de cacao al 100%, presentación de 90 gramos. Ideal para preparar chocolate caliente y otras recetas.",
    weight: "90 g",
    price: null,
    image: "/images/productos/pasta-cacao-90g.jpg",
    category: "Cacao",
  },
  {
    id: 3,
    slug: "cascarilla-de-cacao",
    name: "Cáscarilla de Cacao",
    description:
      "Cáscarilla de cacao para preparar infusiones y disfrutar del aroma del cacao.",
    weight: "Presentación por consultar",
    price: null,
    image: "/images/productos/cascarilla-de-cacao.jpg",
    category: "Cacao",
  },
  {
    id: 4,
    slug: "chocolate-55",
    name: "Chocolate al 55%",
    description:
      "Chocolate con 55% de cacao para disfrutar solo o incorporar en tus recetas.",
    weight: "Presentación por consultar",
    price: null,
    image: "/images/productos/chocolate-55.jpg",
    category: "Chocolate",
  },
  {
    id: 5,
    slug: "manteca-de-cacao",
    name: "Manteca de Cacao",
    description:
      "Manteca de cacao para la elaboración de chocolates, postres y otras preparaciones.",
    weight: "Presentación por consultar",
    price: null,
    image: "/images/productos/manteca-de-cacao.jpg",
    category: "Cacao",
  },
];

