export interface Category {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  createdAt: Date;
  name: string;
  publishedAt: Date;
  updatedAt: Date;
}
