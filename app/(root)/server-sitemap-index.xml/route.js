import { getServerSideSitemapIndex } from "next-sitemap";
import { fetchFsPosts } from "@/utils/fetchFsPosts";
import matter from "gray-matter";

async function getPosts() {
  const fsPosts = await fetchFsPosts();
  const fsPostsArray = Object.entries(fsPosts)
    .map(([slug, markdown]) => {
      const { content, data: frontmatter } = matter(markdown);
      return { ...frontmatter, slug };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return fsPostsArray;
}

export async function GET(request) {
  const posts = await getPosts();
  const postUrlArr = posts.map((post) => {
    return `https://runme.dev/blog/${post.slug}`;
  });

  return getServerSideSitemapIndex(postUrlArr);
}
