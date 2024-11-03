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
import { Separator } from "@radix-ui/react-separator";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const featuredPost: Post | undefined =
    selectedCategory === "Todos"
      ? posts[0]
      : posts.find((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background px-4 lg:px-44">
      <Navbar />

      <main className="container mx-auto  py-8 flex flex-col justify-center lg:flex-row gap-8 px-4">
        <section className="lg:w-3/4">
          {/* <h3 className="text-xl font-bold pt-10">Post Destacado</h3> */}

          {/* Post destacado */}
          {featuredPost && <FeaturedPost post={featuredPost} />}

          <h3 className="text-xl font-bold mt-6">Filtrar por</h3>
          <Separator className="my-2 bg-card-foreground/50 data-[orientation=horizontal]:h-px" />

          {/* Filtro de Categorías */}
          <div className="flex flex-col items-start gap-10">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>

          {/* Listado de posts */}
          <PostFilter posts={posts} selectedCategory={selectedCategory} />
        </section>
        <aside className="lg:w-1/4 lg:mt-8">
          <Sidebar />
        </aside>
      </main>

      {/* <HeroImage /> */}
      <HeroImage />
      <Footer />
    </div>
  );
}
