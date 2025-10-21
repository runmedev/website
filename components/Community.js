import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const communityMap = {
  star: {
    title: "Star and Contribute",
    description: <>All Runme code is open source and APL-2.0 licensed. We love contributions.</>,
    icon: <FontAwesomeIcon icon={faStar} size="2xl" className="group-hover:text-yellow-400" />,
    href: "https://github.com/stateful",
  },
  community: {
    title: "Join the community",
    description: (
      <>
        Join the Runme Discord Community for instant support and rich conversations about the future
        of docs as code.
      </>
    ),
    icon: <FontAwesomeIcon icon={faDiscord} size="2xl" className="group-hover:text-[#7289da]" />,
    color: "text-[#7289da]",
    href: "https://discord.gg/runme",
  },
  touch: {
    title: "Stay in touch",
    icon: <FontAwesomeIcon icon={faXTwitter} size="2xl" className="group-hover:text-[#1DA1F2]" />,
    href: "https://twitter.com/runmedev",
    description: (
      <>
        We want to stay connected with our users on Twitter. Follow{" "}
        <span className="font-semibold text-neutral-300">@runmedev</span> for all the latest
        updates.
      </>
    ),
  },
};

const CommunityBox = ({ entry }) => {
  const entryObj = communityMap[entry];
  return (
    <Link
      href={entryObj.href}
      className="flex flex-col items-center justify-center w-full p-12 space-y-3 group hover:bg-neutral-800/30"
    >
      <div>{entryObj.icon}</div>
      <div className="text-xl font-medium">{entryObj.title}</div>
      <div className="text-sm text-center text-neutral-400">{entryObj.description}</div>
    </Link>
  );
};

const Community = () => {
  return (
    <div className="flex flex-col w-full mt-32 divide-y border-y md:divide-y-0 md:divide-x md:flex-row justify-evenly border-neutral-100/20 divide-neutral-100/20">
      {Object.keys(communityMap).map((entry, i) => {
        return <CommunityBox key={i} entry={entry} />;
      })}
    </div>
  );
};

export default Community;
