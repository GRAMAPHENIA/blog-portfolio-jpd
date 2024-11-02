"use client";

import { useState } from "react";
import { Navbar } from "@/components/custom/nav-bar/Navbar";
import HeroImage from "@/components/custom/hero-image/HeroImage";
import FeaturedPost from "@/components/custom/featured-post/FeaturedPost";
import PostFilter from "@/components/custom/post-filter/PostFilter";
import Sidebar from "@/components/custom/sidebar/Sidebar";
import Footer from "@/components/custom/footer/Footer";
import CategoryFilter from "@/components/custom/category-filter/CategoryFilter";
import { posts } from "@/data/posts";
import { categories } from "@/data/categories";
import { Post } from "@/types/blog";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const featuredPost: Post | undefined =
    selectedCategory === "Todos"
      ? posts[0]
      : posts.find((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background px-40">
      <Navbar />
      <HeroImage />
      <main className="container mx-auto px-4 py-8 flex flex-col justify-center lg:flex-row gap-8">
        <section className="lg:w-3/4">
          <h3 className="text-xl font-bold py-10">Post Destacado</h3>
          <div className="flex flex-col items-start gap-10">
            {/* Filtro de Categorías */}

            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />

            {/* Post destacado */}
            {featuredPost && <FeaturedPost post={featuredPost} />}
          </div>

          {/* Listado de posts */}
          <PostFilter posts={posts} selectedCategory={selectedCategory} />
        </section>
        <aside className="lg:w-1/4">
          <Sidebar />
        </aside>
      </main>
      <Footer />
    </div>
  );
}
