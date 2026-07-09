"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface GitHubStarsProps {
  url: string;
  text: string;
}

const GitHubStars: React.FC<GitHubStarsProps> = ({ url, text }) => {
  const [stars, setStars] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://sourishkrout-runmetotals.web.val.run/", {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch Runme totals");
        }

        return res.json() as Promise<{ data?: { stars?: number } }>;
      })
      .then((resp) => {
        const starCount = resp.data?.stars;

        if (typeof starCount === "number") {
          setStars(formatStars(starCount));
        }
      })
      .catch((error: Error) => {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <a
      href={url}
      className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-100 hover:!no-underline"
      aria-label={`Star ${text} on GitHub`}
    >
      <FontAwesomeIcon icon={faGithub} />
      <span>Star</span>
      <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
      {stars && (
        <span className="border-l border-neutral-300 pl-2 tabular-nums" aria-label={`${stars} GitHub stars`}>
          {stars}
        </span>
      )}
    </a>
  );
};

function formatStars(stars: number): string {
  if (stars < 1000) {
    return stars.toString();
  }

  return `${Math.round(stars / 100) / 10}k`;
}

export default GitHubStars;
