import { getServerSideSitemapIndex } from "next-sitemap";
import { fetchFsPosts } from "@/utils/fetchFsPosts";
import matter from "gray-matter";
import type { NextRequest } from "next/server";

interface PostFrontmatter {
  date: string;
  slug?: string;
  [key: string]: unknown;
}

async function getPosts(): Promise<PostFrontmatter[]> {
  const fsPosts = await fetchFsPosts();
  const fsPostsArray = Object.entries(fsPosts)
    .map(([slug, markdown]) => {
      const { data: frontmatter } = matter(markdown);
      return { ...frontmatter, slug } as PostFrontmatter;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return fsPostsArray;
}

export async function GET(request: NextRequest) {
  const posts = await getPosts();
  const postUrlArr = posts.map((post) => {
    return `https://runme.dev/blog/${post.slug}`;
  });

  return getServerSideSitemapIndex(postUrlArr);
}
