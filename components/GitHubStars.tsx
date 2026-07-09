"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface GitHubStarsProps {
  compact?: boolean;
  url: string;
  text: string;
}

const GitHubStars: React.FC<GitHubStarsProps> = ({ compact = false, url, text }) => {
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

        return res.json() as Promise<{ data?: { starsPerRepo?: { runme?: number } } }>;
      })
      .then((resp) => {
        const starCount = resp.data?.starsPerRepo?.runme;

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
      className={`inline-flex items-center rounded-md border border-neutral-300 bg-white font-semibold leading-none text-neutral-900 shadow-sm transition hover:bg-neutral-100 hover:!no-underline ${
        compact ? "h-8 gap-1.5 px-2 text-xs" : "gap-2 px-3 py-1.5 text-sm"
      }`}
      aria-label={`Star ${text} on GitHub`}
    >
      {!compact && <FontAwesomeIcon icon={faGithub} />}
      <span>Star</span>
      <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
      {stars && (
        <span
          className={`border-l border-neutral-300 tabular-nums ${compact ? "pl-1.5" : "pl-2"}`}
          aria-label={`${stars} GitHub stars`}
        >
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
