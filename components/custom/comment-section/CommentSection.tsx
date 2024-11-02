"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Comment } from "@/types/blog";
import { useComments } from "@/hooks/use-comments";

interface CommentSectionProps {
  postId: string;
}

export function CommentSection({ postId }: CommentSectionProps) {
  const { comments, addComment } = useComments(postId);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    addComment(newComment);
    setNewComment("");
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Comentarios</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Deja un comentario... "
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px]"
        />
        <Button type="submit">Enviar comentario</Button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar>
              <AvatarImage
                className="object-cover"
                src={comment.author.avatar}
                alt={comment.author.name}
              />
              <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">{comment.author.name}</span>
                <span className="text-sm text-muted-foreground">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-muted-foreground">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
