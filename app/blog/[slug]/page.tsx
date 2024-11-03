import { posts } from "@/data/posts";
import { CommentSection } from "@/components/custom/comment-section/CommentSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/custom/footer/Footer";

// Generar parámetros estáticos para las rutas del blog
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Interfaz de propiedades de la página
interface PageProps {
  params: {
    slug: string;
  };
}

// Componente principal del blog
export default function BlogPost({ params }: PageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  // Manejo de caso en que el post no se encuentra
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Cabecera */}
      <header className="bg-card/50 backdrop-blur-2xl shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost" size="sm" className="hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Blog
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Columna principal */}
      <article className="container mx-auto px-4 py-8 max-w-4xl bg-card rounded-lg shadow-lg mb-20 mt-4">
        <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div className="flex items-center gap-4 mb-8">
          <Avatar>
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-lg">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">
              {new Date(post.createdAt).toLocaleDateString("es-AR", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </p>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-foreground ">
          {post.title}
        </h1>

        <div className="flex gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm transition-colors duration-200 hover:bg-secondary-dark"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose dark:prose-invert max-w-none mb-8">
          {post.content}
        </div>

        <hr className="my-8 border-t border-gray-300" />

        {/* Sección de comentarios */}
        <CommentSection postId={post.id} />
      </article>

      {/* Pie de página */}
      <Footer />
    </main>
  );
}
