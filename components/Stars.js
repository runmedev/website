"use client";
import GitHubButton from "react-github-btn";

const Stars = ({ url, text }) => {
  return (
    <GitHubButton
      href={url}
      data-text={text}
      title={text}
      // data-size="large"
      data-show-count="true"
      aria-label="Star buttons/github-buttons on GitHub"
      data-color-scheme={"light"}
    >
      Stars
    </GitHubButton>
  );
};

export default Stars;
