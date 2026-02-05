export interface Author {
  name: string;
  url: string;
  photo: {
    url: string;
  };
}

export interface PostFrontmatter {
  post_author: string;
  post_author_url?: string;
  post_author_avatar: string;
  post_excerpt: string;
  date: string;
  post_image: string;
  post_title: string;
  tags: string[];
  post_slug: string;
  runmeBlog?: boolean;
  canonical_url?: string;
}

export interface Post {
  author: Author;
  preview: string;
  date: string;
  cover: {
    url: string;
  };
  title: string;
  category: string;
  slug: string;
  runmeBlog?: boolean;
  canonicalUrl?: string;
  body?: string;
  tags?: string[];
}

export interface Heading {
  text: string;
  level: number;
}

export interface FsPostsMapping {
  [slug: string]: string;
}
