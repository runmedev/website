import "/styles/markdown.css";
import Command from "@/components/Command";
import BeforeYouGo from "@/components/BeforeYouGo";
import ExtensionCTA from "@/components/ExtensionCTA";
import ImageWithCaption from "@/components/ImageWithCaption";
import VideoWithCaption from "@/components/VideoWithCaption";
import { InstallButton } from "@/components/InstallButton";
import { MDXRemote } from "next-mdx-remote/rsc";
import AuthorImage from "@/components/AuthorImage";
import Link from "next/link";

const Post = ({ post }) => {
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
          <MDXRemote
            source={post.body}
            components={{
              BeforeYouGo,
              Command,
              ExtensionCTA,
              ImageWithCaption,
              InstallButton,
              VideoWithCaption,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
