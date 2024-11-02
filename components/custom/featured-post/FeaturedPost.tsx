

import { PostCard } from "@/components/custom/post-card/PostCard";
import { Post } from "@/types/blog";

interface FeaturedPostProps {
  post: Post | undefined;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => (
  <div>{post && <PostCard post={post} />}</div>
);

export default FeaturedPost;
