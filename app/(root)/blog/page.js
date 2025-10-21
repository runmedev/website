import AuthorImage from "@/components/AuthorImage";
import Link from "next/link";
import PostImage from "@/components/PostImage";
import SocialIcons from "@/components/SocialIcons";
import moment from "moment";
import { fetchFsPosts } from "utils/fetchFsPosts";
import { frontToPreview } from "utils/postUtils";
import matter from "gray-matter";

async function getPosts() {
  const fsPosts = await fetchFsPosts();
  const fsPostsArray = Object.entries(fsPosts)
    .map(([slug, markdown]) => {
      const { content, data: frontmatter } = matter(markdown);
      const post = frontToPreview(frontmatter);
      post.body = content;
      return post;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return fsPostsArray;
}

export const metadata = {
  title: "Blog",
  description: "The best source for news, thoughts, and announcements about the Runme ecosystem.",
  alternates: {
    canonical: `https://runme.dev/blog`,
  },
};

const BlogHero = () => {
  return (
    <div className="flex flex-col items-center justify-between space-x-2 space-y-2 md:flex-row md:space-y-0">
      <div className="flex flex-col items-center space-x-3 space-y-2 md:flex-row md:space-y-0">
        <div className="text-xl font-semibold text-purpleish-200">BLOG</div>
        <div className="hidden border-r-2 border-neutral-500 md:block">&nbsp;</div>
        <div className="font-medium leading-relaxed text-center text-neutral-200 md:text-left">
          The best source for news, thoughts, and announcements about the Runme ecosystem.
        </div>
      </div>
      <SocialIcons />
    </div>
  );
};

const Post = ({ post }) => {
  const slug = `/blog/${post?.slug}`;

  return (
    <div key={post?.id} className="border rounded-md shadow-xl">
      {post.cover?.url && <PostImage post={post} />}

      <div className="px-6 pt-2 pb-4">
        <div className="my-4 font-medium text-neutral-500">
          {moment(post?.date).format("MMMM D, YYYY")}
        </div>
        <Link
          href={slug}
          className="font-semibold line-clamp-2 text-[20px] h-16 text-heading tracking-[0.035em] hover:underline"
        >
          {post?.title}
        </Link>
        <div className="line-clamp-3 text-[18px] h-28">{post?.preview}</div>
        {post?.author && (
          <div className="flex items-center mt-4 space-x-2">
            <AuthorImage post={post} />
            <div className="font-semibold leading-none text-md text-neutral-600 hover:text-neutral-700">
              <Link href={post.author?.url || "/blog"} className="font-semibold" color="secondary">
                {post.author?.name}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const PostCards = ({ posts }) => {
  return (
    <div className="flex flex-col grid-cols-2 gap-10 px-4 mt-12 md:px-0 md:grid pb-36">
      {posts.map((post, i) => {
        return <Post key={i} post={post} />;
      })}
    </div>
  );
};

const FirstPost = ({ post }) => {
  const slug = `/blog/${post?.slug}`;
  return (
    <div className="flex flex-col-reverse px-4 md:space-x-12 md:flex-row md:space-y-0 md:px-0">
      <div className="flex flex-col space-y-6 md:w-1/2">
        <div className="text-3xl font-semibold">
          <Link href={`/blog/${post?.slug}`}>{post?.title}</Link>
        </div>
        <div className="text-neutral-300">{post?.preview}</div>
        <div className="flex flex-row items-center space-x-3">
          {post?.author && (
            <div className="flex items-center space-x-2">
              <AuthorImage post={post} />
              <div className="font-medium hover:underline">
                <Link
                  href={post.author?.url || "/blog"}
                  className="font-semibold"
                  color="secondary"
                >
                  {post.author?.name}
                </Link>
              </div>
            </div>
          )}
          <div className="border-r border-neutral-500">&nbsp;</div>
          <div className="text-neutral-400">{moment(post?.date).format("MMMM D, YYYY")}</div>
        </div>
        <div>
          <Link href={slug}>
            <div className="px-4 py-2 font-bold rounded-md bg-purpleish-700 hover:bg-purpleish-500 whitespace-nowrap max-w-min">
              Read more
            </div>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center pb-16 md:py-0 md:w-1/2">
        {post?.cover?.url && <PostImage post={post} />}
      </div>
    </div>
  );
};

export default async function BlogHome() {
  const posts = await getPosts();
  const firstPost = posts.shift();

  return (
    <div className="flex flex-col">
      <div className="w-full text-white border-b border-neutral-100/20 bg-purpledk">
        <div className="max-w-screen-lg py-12 mx-auto">
          <div className="flex flex-col space-y-12">
            <BlogHero />
            <FirstPost post={firstPost} />
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg pt-10 mx-auto">
        <PostCards posts={posts} />
      </div>
    </div>
  );
}
