import "/styles/markdown.css";
import Command from "@/components/Command";
import BeforeYouGo from "@/components/BeforeYouGo";
import BlogImageLightbox from "@/components/BlogImageLightbox";
import ExtensionCTA from "@/components/ExtensionCTA";
import ImageWithCaption from "@/components/ImageWithCaption";
import VideoWithCaption from "@/components/VideoWithCaption";
import { InstallButton } from "@/components/InstallButton";
import { DocsCta } from "@/components/Cta";
import { MDXRemote } from "next-mdx-remote/rsc";
import AuthorImage from "@/components/AuthorImage";
import Link from "next/link";
import type { Post as PostType } from "@/types/blog";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
      <div className="flex flex-col py-16">
        <div className="flex flex-row items-center justify-center space-x-3">
          <div>
            <AuthorImage post={post} />
          </div>
          <div className="font-medium hover:underline">
            {post?.author && (
              <Link href={post?.author?.url || "/blog"}>
                <div>{post?.author?.name}</div>
              </Link>
            )}
          </div>
        </div>
        <h1 className="pt-4 pb-12 mx-auto text-4xl font-semibold text-center">{post?.title}</h1>
        <div className="px-4 markdown-body md:px-0">
          <BlogImageLightbox>
            <MDXRemote
              source={post.body || ""}
              components={{
                BeforeYouGo,
                Command,
                DocsCta,
                ExtensionCTA,
                ImageWithCaption,
                InstallButton,
                VideoWithCaption,
              }}
            />
          </BlogImageLightbox>
        </div>
      </div>
    </div>
  );
};

export default Post;
