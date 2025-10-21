import SocialIcons from "@/components/SocialIcons";
import { format } from "date-fns";
import Link from "next/link";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "@/components/Post";
import { fetchFsPosts } from "@/utils/fetchFsPosts";
import { frontToPreview } from "@/utils/postUtils";
import matter from "gray-matter";

async function getPost(slug) {
  const fsPosts = await fetchFsPosts();
  const fsPostsArray = Object.entries(fsPosts)
    .map(([slug, markdown]) => {
      const { content, data: frontmatter } = matter(markdown);
      const post = frontToPreview(frontmatter);
      post.body = content;
      return { ...post, slug };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return fsPostsArray.find((post) => post.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  // Fetch the post data for metadata generation
  const post = await getPost(slug);

  const coverUrl = post?.cover?.url;
  const description = post?.preview || "Read the latest blog post on RUNME.";
  const title = post?.title || "RUNME";
  const canonicalUrl = post?.canonicalUrl || `https://runme.dev/blog/${slug}`;

  // Open Graph and Twitter unfurl metadata
  const unfurl = coverUrl
    ? {
        openGraph: {
          title,
          description,
          images: [
            {
              url: coverUrl,
              width: 3611,
              height: 1844,
            },
          ],
          locale: "en-US",
          type: "website",
        },
        twitter: {
          card: "summary_large_image",
          title,
          description,
          siteId: "10765432100123456789",
          creator: "@runmedev",
          creatorId: "10765432100123456789",
          images: [coverUrl],
        },
      }
    : {};

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    ...unfurl,
  };
}

// Blog Post Page Component
export default async function BlogSlug({ params }) {
  const { slug } = await params;

  // Fetch the blog post data
  let post = {};
  try {
    post = await getPost(slug);
  } catch (error) {
    console.error("Error fetching post data:", error);
    return (
      <div className="max-w-screen-md py-12 mx-auto text-center">
        <h1 className="text-2xl font-bold">Post Not Found</h1>
        <p>Sorry, we couldn't load this blog post. Please try again later.</p>
        <Link href="/blog" className="text-purpleish-400 underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-screen-md py-12 mx-auto">
      <div className="flex flex-col">
        {/* Post Meta Header */}
        <div className="flex flex-col items-center space-y-2 md:flex-row justify-evenly md:space-y-0">
          <Link href="/blog" className="font-semibold text-purpleish-400">
            {"< Back"}
          </Link>
          <div className="font-medium text-neutral-600">
            {format(new Date(post?.date), "MMMM d, yyyy")}
          </div>
          <div className="flex flex-row items-center space-x-2">
            <div className="text-purpleish-500">
              <FontAwesomeIcon icon={faTag} size="lg" />
            </div>
            <div className="font-medium">
              {post?.category}
              {post?.tags?.length > 0 && ", "} {post?.tags?.join(", ")}
            </div>
          </div>
          <div className="text-neutral-500">
            <SocialIcons />
          </div>
        </div>

        {/* Post Content */}
        <div>
          <Post post={post} />
        </div>
      </div>
    </div>
  );
}
