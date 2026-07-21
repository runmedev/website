import type { Metadata } from 'next';
import AuthorImage from "@/components/AuthorImage";
import SocialIcons from "@/components/SocialIcons";
import Link from "next/link";
import { notFound } from "next/navigation";
import path from "path";
import { cache } from "react";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "@/components/Post";
import fsPostsMapping from "@/utils/fsPosts.json";
import { formatPostDate } from "@/utils/postDate";
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

  const publishedDate = formatPostDate(post.date);
  const taxonomy = [post.category, ...(post.tags ?? [])].filter(Boolean).join(", ");

  return (
    <article className="overflow-hidden bg-[#f8f7fb]">
      <header className="relative isolate overflow-hidden bg-purpledk text-white">
        {post.cover?.url && (
          <img
            src={post.cover.url}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full scale-110 object-cover opacity-25 blur-2xl"
          />
        )}
        <div className="absolute inset-0 -z-10 bg-purpledk/80" />
        <div className="mx-auto flex max-w-screen-lg min-w-0 flex-col gap-10 px-4 py-10 md:px-0 md:py-14">
          <div className="flex flex-col gap-4 text-sm font-medium text-neutral-200 md:flex-row md:items-center md:justify-between">
            <Link href="/blog" className="text-purpleish-200 hover:text-white hover:underline">
              {"< Back to blog"}
            </Link>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
              <time dateTime={post.date}>{publishedDate}</time>
              {taxonomy && (
                <div className="flex items-start gap-2 text-neutral-200 md:items-center">
                  <FontAwesomeIcon icon={faTag} className="mt-1 text-purpleish-200 md:mt-0" />
                  <span>{taxonomy}</span>
                </div>
              )}
              <div className="text-neutral-200">
                <SocialIcons />
              </div>
            </div>
          </div>

          <div className="grid min-w-0 items-stretch gap-8 md:grid-cols-[minmax(0,1fr)_360px] md:gap-10">
            <div className="flex min-w-0 flex-col gap-6">
              <div className="flex flex-row items-center space-x-3">
                <div>
                  <AuthorImage post={post} />
                </div>
                <div className="font-medium text-neutral-100 hover:underline">
                  {post.author && (
                    <Link href={post.author.url || "/blog"}>
                      <div>{post.author.name}</div>
                    </Link>
                  )}
                </div>
              </div>
              <div className="min-w-0 max-w-full md:max-w-3xl">
                <h1 className="max-w-full break-words text-3xl font-semibold leading-tight md:text-5xl">
                  {post.title}
                </h1>
                {post.preview && (
                  <p className="mt-5 max-w-full break-words text-base leading-7 text-neutral-200 md:max-w-2xl md:text-lg md:leading-8">
                    {post.preview}
                  </p>
                )}
              </div>
            </div>

            {post.cover?.url && (
              <div className="w-full min-w-0 max-w-full overflow-hidden rounded-md shadow-2xl [mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.12)_12%,rgba(0,0,0,0.42)_34%,rgba(0,0,0,0.82)_58%,black_78%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.12)_12%,rgba(0,0,0,0.42)_34%,rgba(0,0,0,0.82)_58%,black_78%)] md:h-full md:w-[146%] md:max-w-none">
                <img
                  src={post.cover.url}
                  alt=""
                  aria-hidden="true"
                  className="block h-auto w-full max-w-full object-cover opacity-90 md:h-full"
                />
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-screen-md px-4 py-12 md:px-0">
        <Post post={post} />
      </div>
    </article>
  );
}
