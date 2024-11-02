// En types/blog.ts
export interface Comment {
  id: string;
  content: string;
  author: Author;
  createdAt: string;
  postId: string;
}

export interface Author {
  name: string;
  avatar: string;
}

export interface Post {
  id: string;
  title: string;
  category: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author;
  createdAt: string;
  tags: string[];
  updatedAt: string;
  comments?: Comment[];
}
