// Definimos un tipo para los artículos.
export type Article = {
  id: string;
  title: string;
  content: string;
  image_url?: string;
  date: string; // Fecha de publicación
  slug: string; // URL amigable
};

// Creamos una lista de artículos de ejemplo.
export const articles: Article[] = [
  {
    id: "1",
    title: "Ford Mustang Mach-E",
    content: "El precio del Ford Mustang Mach-E varía según la versión y equipamiento, pero el modelo base tiene un precio aproximado de 50,000 euros. Las versiones más equipadas pueden llegar hasta los 70,000 euros.",
    image_url: "https://www.tuningblog.eu/wp-content/uploads/2021/07/Ford-Mustang-Mach-E-auf-Forgiato-Felgen-5.jpg",
    date: "2025-01-22",
    slug: "ford-mustang-mach-e"
  },
  {
    id: "2",
    title: "Tesla Model S",
    content: "El Tesla Model S es un automóvil eléctrico de alto rendimiento, conocido por su autonomía y velocidad. Con un precio base de 80,000 euros, es uno de los autos más innovadores de la industria.",
    image_url: "https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg",
    date: "2025-01-23",
    slug: "tesla-model-s"
  },
  // Agrega más artículos según sea necesario
];

// Puedes exportar funciones para manejar los artículos, como obtener un artículo por su slug
export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

// O para obtener todos los artículos
export const getAllArticles = (): Article[] => {
  return articles;
};
