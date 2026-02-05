import type { Post } from '@/types/blog';

interface AuthorImageProps {
  post: Post;
}

const AuthorImage: React.FC<AuthorImageProps> = ({ post }) => {
  return (
    <div className="relative w-10 h-10 rounded-full">
      {post?.author && <img src={post?.author?.photo?.url} alt={`${post?.author?.name}`} />}
    </div>
  );
};

export default AuthorImage;
