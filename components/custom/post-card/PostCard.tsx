"use client";

import { Post } from "@/types/blog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Share2,
  MessageCircle,
  Check,
  Copy,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useShare } from "@/hooks/use-share";

interface PostCardProps {
  post?: Post;
}

export function PostCard({ post }: PostCardProps) {
  // Valores predeterminados para evitar errores si `post` no está definido
  const { slug = "", title = "" } = post || {};

  // useShare es llamado siempre, pero recibe valores predeterminados si `post` es `undefined`
  const { copied, copyToClipboard, shareToSocial } = useShare(slug, title);

  if (!post) {
    return null; // O renderizar un mensaje alternativo si `post` es `undefined`
  }

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title || "Imagen de post"}
              fill
              className="object-cover"
            />
          ) : (
            <div className="bg-gray-200 h-full w-full flex items-center justify-center">
              <span className="text-muted-foreground">Sin imagen</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <AvatarImage
              src={post.author?.avatar || "/default-avatar.png"}
              alt={post.author?.name || "Autor desconocido"}
              className="object-cover"
            />
            <AvatarFallback>
              {post.author?.name ? post.author.name[0] : "A"}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">
              {post.author?.name || "Autor desconocido"}
            </p>
            <p className="text-sm text-muted-foreground">
              {new Date(post.createdAt).toLocaleDateString("es-AR", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </p>
          </div>
        </div>
        <Link href={`/blog/${post.slug || "#"}`}>
          <h3 className="text-2xl font-bold mb-2 hover:text-primary">
            {post.title || "Título no disponible"}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-4">
          {post.excerpt || "Sin descripción disponible."}
        </p>
        <div className="flex gap-2 mt-4">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-6 pt-0 mt-auto">
        <Link href={`/blog/${post.slug || "#"}#comments`}>
          <Button variant="ghost" size="sm">
            <MessageCircle className="h-4 w-4 mr-2" />
            Comentarios
          </Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Compartir
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuItem onClick={() => shareToSocial("twitter")}>
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => shareToSocial("facebook")}>
              <Facebook className="h-4 w-4 mr-2" />
              Facebook
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => shareToSocial("linkedin")}>
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </DropdownMenuItem>
            <DropdownMenuItem onClick={copyToClipboard}>
              {copied ? (
                <Check className="h-4 w-4 mr-2" />
              ) : (
                <Copy className="h-4 w-4 mr-2" />
              )}
              Copiar enlace
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  );
}
