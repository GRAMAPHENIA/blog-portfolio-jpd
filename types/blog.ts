export interface Author {
  name: string;
  avatar: string;
}

export interface Comment {
  id: string;
  content: string;
  author: Author;
  createdAt: string;
  postId: string;
}

export interface Post {
  category: string;
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  comments?: Comment[];
}