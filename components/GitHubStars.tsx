import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface GitHubStarsProps {
  url: string;
  text: string;
}

const GitHubStars: React.FC<GitHubStarsProps> = ({ url, text }) => {
  return (
    <a
      href={url}
      className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-100 hover:!no-underline"
      aria-label={`Star ${text} on GitHub`}
    >
      <FontAwesomeIcon icon={faGithub} />
      <span>Star</span>
      <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
    </a>
  );
};

export default GitHubStars;
