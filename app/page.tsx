"use client";

import { useState } from "react";
import { Navbar } from "@/components/custom/nav-bar/Navbar";
import HeroImage from "@/components/custom/hero-image/HeroImage";
import FeaturedPost from "@/components/custom/featured-post/FeaturedPost";
import PostList from "@/components/custom/post-list/PostList";
import Sidebar from "@/components/custom/sidebar/Sidebar";
import Footer from "@/components/custom/footer/Footer";
import { posts } from "@/data/posts";
import { categories } from "@/data/categories";
import { handleCategorySelect } from "@/utils/handleCategorySelect";
import { Post } from "@/types/blog";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  // Filtrar posts según la categoría seleccionada
  const filteredPosts =
    selectedCategory === "Todos"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const featuredPost: Post | undefined = filteredPosts[0];

  return (
    <div className="min-h-screen bg-background px-40">
      <Navbar />

      {/* Imagen de Encabezado */}
      <HeroImage />

      <main className="container mx-auto px-4 py-8 flex flex-col justify-center lg:flex-row gap-8">
        {/* Columna principal */}
        <section className="lg:w-3/4">
          <h3 className="text-xl font-bold py-10">Post Destacado</h3>
          <div className="flex flex-col items-start gap-10">
            {/* Filtro de Categorías */}
            <div className="flex gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-3 py-1.5 rounded-sm font-medium ${
                    selectedCategory === category
                      ? "bg-card-foreground/10 text-white border"
                      : "bg-card text-gray-400 border"
                  }`}
                  onClick={() =>
                    handleCategorySelect(category, setSelectedCategory)
                  }
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Post destacado */}
            {featuredPost && <FeaturedPost post={featuredPost} />}
          </div>

          {/* Listado de posts */}
          <h3 className="text-xl font-bold py-10">
            Últimos Posts - {selectedCategory}
          </h3>
          <PostList posts={filteredPosts.slice(1)} />
        </section>

        {/* Barra lateral */}
        <aside className="lg:w-1/4 ">
          <Sidebar />
        </aside>
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
