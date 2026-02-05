import Link from "next/link";
import type { Post } from "@/types/blog";

interface PostImageProps {
  post: Post;
}

const PostImage: React.FC<PostImageProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post?.slug}`} passHref>
      <div className="overflow-hidden cursor-pointer">
        {post.cover?.url && (
          <img
            src={post.cover?.url}
            alt={post.title}
            className="object-cover rounded-md shadow-xl"
          />
        )}
      </div>
    </Link>
  );
};

export default PostImage;
