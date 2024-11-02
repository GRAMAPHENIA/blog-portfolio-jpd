import { PostCard } from "@/components/custom/post-card/PostCard";
import { Post } from "@/types/blog";

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => (
  <div>
    {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);

export default PostList;
