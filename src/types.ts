export interface Post {
    title: string;
    slug: string;
    image_url: string; // Esta propiedad debe ser un string
    content: string;
  }
  
  export type Posts = {
    [key: string]: Post;
  };
  