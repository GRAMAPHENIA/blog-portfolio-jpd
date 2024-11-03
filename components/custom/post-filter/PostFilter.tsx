// src/components/custom/post-filter/PostFilter.tsx

import React from "react";
import { Post } from "@/types/blog";
import { PostCard } from "@/components/custom/post-card/PostCard";

interface PostFilterProps {
  posts: Post[];
  selectedCategory: string;
}

const PostFilter: React.FC<PostFilterProps> = ({ posts, selectedCategory }) => {
  // Filtrar posts según la categoría seleccionada
  const filteredPosts =
    selectedCategory === "Todos"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div>
      <h3 className="text-xl font-bold pt-10">
        Publicaciones sobre {selectedCategory}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostFilter;
