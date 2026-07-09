import type { Metadata } from 'next';
import SocialIcons from "@/components/SocialIcons";
import { format } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";
import path from "path";
import { cache } from "react";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "@/components/Post";
import fsPostsMapping from "@/utils/fsPosts.json";
import { frontToPreview } from "@/utils/postUtils";
import matter from "gray-matter";
import type { Post as BlogPost, PostFrontmatter } from "@/types/blog";
import { readFile } from "fs/promises";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams(): Array<{ slug: string }> {
  return Object.keys(fsPostsMapping).map((slug) => ({ slug }));
}

const getPost = cache(async (slug: string): Promise<BlogPost | undefined> => {
  const postFile = (fsPostsMapping as Record<string, string>)[slug];

  if (!postFile) {
    return undefined;
  }

  const markdown = await readFile(path.join(process.cwd(), "fsPosts", postFile), {
    encoding: "utf8",
  });
  const { content, data: frontmatter } = matter(markdown);
  const post = frontToPreview(frontmatter as PostFrontmatter);
  post.body = content;

  return { ...post, slug };
});

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
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
            },
          ],
          locale: "en-US",
          type: "website" as const,
        },
        twitter: {
          card: "summary_large_image" as const,
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
export default async function BlogSlug({ params }: PageParams) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
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
              {(post?.tags?.length ?? 0) > 0 && ", "} {post?.tags?.join(", ")}
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
