// src/components/custom/recent-posts/RecentPosts.tsx

import { posts } from "@/data/posts";
import { Post } from "@/types/blog";

const RecentPosts = () => (
  <div className="rounded-lg bg-card dark:bg-card p-4 border shadow-md">
    <h3 className="text-lg font-semibold mb-3">Posts Recientes</h3>
    <ul className="space-y-2">
      {posts.slice(0, 3).map((post: Post) => (
        <li key={post.id} className="text-sm text-gray-700 dark:text-gray-300">
          <a href={`/posts/${post.id}`} className="hover:underline">
            {post.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default RecentPosts;
