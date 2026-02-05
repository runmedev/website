import type { ReactNode } from 'react';
import type { Post } from './blog';

export interface LayoutProps {
  children: ReactNode;
}

export interface PostProps {
  post: Post;
}

export interface AuthorImageProps {
  post: Post;
}

export interface PostImageProps {
  src: string;
  alt?: string;
  caption?: string;
}

export interface ImageWithCaptionProps {
  src: string;
  alt?: string;
  caption?: string;
}

export interface VideoWithCaptionProps {
  src: string;
  caption?: string;
}

export interface CommandProps {
  children?: ReactNode;
  command?: string;
}

export interface CopyLinkProps {
  url?: string;
}

export interface JobApplyFormProps {
  jobTitle?: string;
}

export interface JobDetailsProps {
  title?: string;
  location?: string;
  type?: string;
}

export interface PlaygroundIDEProps {
  folder?: string;
}

export interface LoadingPlaygroundProps {
  message?: string;
}

export interface MenuItem {
  text: string;
  href: string;
  subItems?: MenuItem[];
}
