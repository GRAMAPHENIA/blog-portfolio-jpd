export type Post = {
  id: string;
  title: string;
  category: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author?: {
    name: string;
    avatar: string;
  };
  createdAt?: string;
  updatedAt?: string;
  tags?: string[];
  comments?: Comment[];
};
