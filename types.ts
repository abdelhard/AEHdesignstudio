
export enum ProjectCategory {
  Exterior = 'Exterior Architecture',
  Interior = 'Interior Architecture',
  Product = 'Product/Furniture Design',
  Animation = '3D Animations/Videos',
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  images: string[];
  description: string;
  context: string;
  client: string;
  role: string;
  tools: string[];
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  date: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}
