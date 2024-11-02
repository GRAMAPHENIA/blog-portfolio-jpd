"use client";

import { useState } from "react";
import { PostCard } from "@/components/custom/post-card/PostCard";
import { posts } from "@/data/posts";
import { ThemeToggle } from "@/components/theme-toggle";
import { CategoryFilter } from "@/components/custom/category-filter/CategoryFilter";
import { Navbar } from "@/components/custom/nav-bar/Navbar";
import Footer from "@/components/custom/footer/Footer";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const categories = ["Todos", "Tecnología", "Salud", "Estilo de vida"]; // Lista de categorías

  // Filtrar posts según la categoría seleccionada
  const filteredPosts =
    selectedCategory === "Todos"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const featuredPost = filteredPosts[0]; // Post destacado de la categoría seleccionada

  // Función para manejar la selección de categoría
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-background px-40">
      {/* Cabecera */}
      <Navbar />

      {/* Encabezado principal */}
      <div className="text-center bg-background text-foreground transition-colors duration-300 my-52">
        <h2 className="text-7xl font-bold px-56">
          404: Porque no todo lo que buscas es lo que necesitas encontrar.
        </h2>
        <p className="mt-2 text-xl text-indigo-400">
          Explora temas interesantes, aprende nuevas habilidades y mantente
          informado.
        </p>
      </div>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-8 flex flex-col justify-center lg:flex-row gap-8">
        {/* Columna principal */}
        <section className="lg:w-3/4">
          {/* Post destacado */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Post Destacado</h3>
            <div className="">
              {featuredPost && <PostCard post={featuredPost} />}
            </div>
          </div>

          {/* Listado de posts */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Últimos Posts - {selectedCategory}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredPosts.slice(1).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Barra lateral */}
        <aside className="lg:w-1/4">
          <div className="sticky top-24 rounded-lg bg-primary-foreground dark:bg-card mt-11">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />
          </div>
        </aside>
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
