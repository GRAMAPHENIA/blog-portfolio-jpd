"use client";

import { useState, useEffect } from "react";
import { Comment } from "@/types/blog";

// In a real app, this would be fetched from an API
const mockComments: Comment[] = [
  {
    id: "1",
    content: "Great article! Thanks for sharing.",
    author: {
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    createdAt: "2024-03-20T14:00:00Z",
    postId: "1",
  },
];

export function useComments(postId: string) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    // In a real app, fetch comments from an API
    setComments(mockComments.filter((comment) => comment.postId === postId));
  }, [postId]);

  const addComment = (content: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      content,
      author: {
        name: "Gramaphenia", // In a real app, get from auth context
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      },
      createdAt: new Date().toISOString(),
      postId,
    };

    setComments((prev) => [newComment, ...prev]);
  };

  return {
    comments,
    addComment,
  };
}