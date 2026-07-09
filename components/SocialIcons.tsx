import { faDiscord, faXTwitter, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import type { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  children: ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, children }) => {
  return (
    <Link className="hover:brightness-75" href={href}>
      {children}
    </Link>
  );
};

const SocialIcons: React.FC = () => {
  return (
    <div className="flex flex-row items-center space-x-3">
      <SocialLink href="https://discord.gg/jFy92yxT">
        <FontAwesomeIcon icon={faDiscord} size="lg" />
      </SocialLink>
      <SocialLink href="https://github.com/runmedev/runme">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </SocialLink>
      <SocialLink href="https://twitter.com/runmedev">
        <FontAwesomeIcon icon={faXTwitter} size="lg" />
      </SocialLink>
      <SocialLink href="/list">
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </SocialLink>
      <SocialLink href="https://www.youtube.com/@statefulhq">
        <FontAwesomeIcon icon={faYoutube} size="lg" />
      </SocialLink>
    </div>
  );
};

export default SocialIcons;
