import { fetchFsPosts } from "@/utils/fetchFsPosts";
import matter from "gray-matter";

const convertMarkdownUrlToString = (headline) => {
  const pattern = /\[(.*?)\]\((.*?)\)/;
  const match = pattern.exec(headline);
  if (match) {
    return match[1];
  }
  return headline;
};

export const getHeadings = (source) => {
  const headingLines = source.split("\n").filter((line) => {
    return line.match(/^##*\s/);
  });
  return headingLines.map((raw) => {
    const text = raw.replace(/^##*\s/, "");
    const textConverted = convertMarkdownUrlToString(text);

    // tracks h1 and h2.
    const level = raw.slice(0, 2) === "##" ? 2 : 1;
    return { text: textConverted, level };
  });
};

export const frontToPreview = (front) => {
  const author = {
    name: front.post_author,
    url: front.post_author_url || "",
    photo: {
      url: `/img/blog/${front.post_author_avatar}`,
    },
  };

  return {
    author: author,
    preview: front.post_excerpt,
    date: front.date,
    cover: {
      url: `/img/blog/${front.post_image}`,
    },
    title: front.post_title,
    category: front.tags[1] || "general",
    slug: front.post_slug,
    runmeBlog: front.runmeBlog,
    canonicalUrl: front.canonical_url,
  };
};

export async function getPost(slug) {
  const fsPosts = await fetchFsPosts();
  let post;

  if (fsPosts && Object.hasOwnProperty.call(fsPosts, slug)) {
    const markdown = fsPosts[slug];
    const { content, data: frontmatter } = matter(markdown);
    post = frontToPreview(frontmatter);
    post.body = content;
  }

  return { post };
}
