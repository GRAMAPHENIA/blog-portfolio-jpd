// components/PostList.tsx
"use client";

import { Post } from "@/types/blog";
import { PostCard } from "@/components/custom/post-card/PostCard";

interface PostListProps {
  posts: Post[];
  selectedCategory: string;
}

export function PostList({ posts, selectedCategory }: PostListProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-xl font-bold mb-4">
        Últimos Posts - {selectedCategory}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
