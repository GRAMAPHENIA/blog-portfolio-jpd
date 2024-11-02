// components/FeaturedPost.tsx
"use client";

import { Post } from "@/types/blog";
import { PostCard } from "@/components/custom/post-card/PostCard";

interface FeaturedPostProps {
  post: Post;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="container mx-auto px-4 py-8">
      <h3 className="text-xl font-bold mb-4">Post Destacado</h3>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <PostCard post={post} />
      </div>
    </section>
  );
}
