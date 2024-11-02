// src/pages/index.tsx

"use client";

import { useState } from "react";
import { PostCard } from "@/components/custom/post-card/PostCard";
import { posts } from "@/data/posts";
import { categories } from "@/data/categories";
import { Navbar } from "@/components/custom/nav-bar/Navbar";
import Footer from "@/components/custom/footer/Footer";
import Image from "next/image";
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
      {/* Cabecera */}
      <Navbar />

      {/* Imagen de Encabezado */}
      <div className="relative w-full h-auto overflow-hidden mt-20 px-4">
        <Image
          width={1920}
          height={600}
          src="/"
          alt="Imagen destacada"
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/90 opacity-50 rounded-lg mx-4 h-80 w-auto"></div>
        <div className="absolute inset-0 flex justify-center items-center text-white text-5xl font-bold z-10 "></div>
      </div>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-8 flex flex-col justify-center lg:flex-row gap-8">
        {/* Columna principal */}
        <section className="lg:w-3/4">
          {/* Post destacado */}
          <div className="flex flex-col items-start py-10 gap-10">
            <h3 className="text-xl font-bold ">Post Destacado</h3>

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
          </div>
          <div>{featuredPost && <PostCard post={featuredPost} />}</div>

          {/* Listado de posts */}
          <div>
            <h3 className="text-xl font-bold py-10">
              Últimos Posts - {selectedCategory}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {filteredPosts.slice(1).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Barra lateral */}
        <aside className="lg:w-1/4 space-y-8 mt-40">
          <div className="sticky top-28 space-y-8">
            {/* Posts Recientes */}
            <div className="rounded-lg bg-card dark:bg-card p-4 border shadow-md">
              <h3 className="text-lg font-semibold mb-3">Posts Recientes</h3>
              <ul className="space-y-2">
                {posts.slice(0, 3).map((post) => (
                  <li
                    key={post.id}
                    className="text-sm text-gray-700 dark:text-gray-300"
                  >
                    <a href={`/posts/${post.id}`} className="hover:underline">
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cuadro de Suscripción */}
            <div className="rounded-lg bg-card dark:bg-card p-4 border shadow-md text-center mt-4">
              <h3 className="text-lg font-semibold mb-3">Suscribite</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Recibe las últimas actualizaciones directamente en tu correo.
              </p>
              <form>
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full p-2 mb-3 rounded-md border border-gray-300 dark:border-gray-600 text-gray-900"
                />
                <button
                  type="submit"
                  className="w-full bg-card-foreground/10 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </aside>
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
