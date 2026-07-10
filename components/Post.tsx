import "/styles/markdown.css";
import Command from "@/components/Command";
import BeforeYouGo from "@/components/BeforeYouGo";
import BlogImageLightbox from "@/components/BlogImageLightbox";
import ExtensionCTA from "@/components/ExtensionCTA";
import ImageWithCaption from "@/components/ImageWithCaption";
import GitHubStars from "@/components/GitHubStars";
import VideoWithCaption from "@/components/VideoWithCaption";
import { InstallButton } from "@/components/InstallButton";
import { DocsCta } from "@/components/Cta";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Post as PostType } from "@/types/blog";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="markdown-body">
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
            GitHubStars,
          }}
        />
      </BlogImageLightbox>
    </div>
  );
};

export default Post;
