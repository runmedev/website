"use client";
import GitHubButton from "react-github-btn";

interface GitHubStarsProps {
  url: string;
  text: string;
}

const GitHubStars: React.FC<GitHubStarsProps> = ({ url, text }) => {
  return (
    <GitHubButton
      href={url}
      data-icon="octicon-star"
      title={text}
      // data-size="large"
      data-show-count="true"
      aria-label={`Star ${text} on GitHub`}
      data-color-scheme={"light"}
    >
      Star
    </GitHubButton>
  );
};

export default GitHubStars;
