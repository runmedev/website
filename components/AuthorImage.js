const AuthorImage = ({ post }) => {
  return (
    <div className="relative w-10 h-10 rounded-full">
      {post?.author && <img src={post?.author?.photo?.url} alt={`${post?.author?.name}`} />}
    </div>
  );
};

export default AuthorImage;
