import Link from "next/link";
import { GhaCta } from "@/components/Cta";
import { DarkContentSection } from "@/components/Sections";

const description =
  "Effortlessly navigate and share deploy docs & release runbooks embedding relevant GitHub Action workflows right inside of them";
export const metadata = {
  title: "Embed GitHub Actions in your Docs",
  description,
  keywords: [],
  openGraph: {
    images: [
      {
        url: "https://runme.dev/img/embed.png",
        width: 1400,
        height: 976,
      },
      {
        url: "https://runme.dev/img/embed.gif",
        width: 640,
        height: 350,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RUNME",
    description: description,
    siteId: "10765432100123456789",
    creator: "@runmedev",
    creatorId: "10765432100123456789",
    images: ["https://runme.dev/img/embed.png"],
  },
};

const benefitsMap = [
  {
    title: "Uplevel Docs & Runbooks",
    text: "Cut releases and approve gated deploys directly from where procedures are documented.",
  },
  {
    title: "Skip Context-Switching",
    text: "No need to remember URLs, projects, logins, and passwords. Trigger workflows directly from markdown.",
  },
  {
    title: "Team Work",
    text: "Make shipping software easier by sharing how-to docs that your team can run.",
  },
  {
    title: "100% Markdown",
    text: "Won't break your existing tool chain. Based on open source and open standards.",
  },
];

const BenefitEntry = ({ title, text }) => {
  return (
    <div className="flex flex-col px-4 py-8 m-2 space-y-4 text-center border rounded shadow-xl border-purpleish-200 grow">
      <div className="text-2xl font-semibold text-purpleish-300">{title}</div>
      <div className="text-neutral-300">{text}</div>
    </div>
  );
};

const Actions = () => {
  return (
    <div>
      <div className="flex flex-col pb-6 space-y-4 text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-fuchsia-600">
          Embed GitHub Actions <br />
          in your Docs
        </h1>
        <h3 className="w-2/3 py-1 mx-auto text-xl font-normal text-neutral-300">
          Effortlessly navigate and share deploy docs & release runbooks.
        </h3>
      </div>
      <div className="flex flex-col pb-6 space-y-4 text-xl text-center">
        “This is actually insanely cool.” —Empole
      </div>
      <div className="w-full pb-8 mx-auto sm:max-w-min">
        <Link href="/blog/embed-github-actions" className="w-full sm:max-w-min hover:!no-underline">
          <div className="px-6 py-3 font-bold text-black bg-white rounded-md shadow-[0px_2px_30px_4px_rgba(0,0,0,0.56)] whitespace-nowrap shadow-purpleish-500/70 hover:brightness-90 text-center">
            Get started now
          </div>
        </Link>
      </div>
      <div className="relative w-full h-[340px] md:h-[600px] my-6">
        <video className="rounded-md" autoPlay loop muted playsInline controls>
          <source src="/videos/embed.mp4" type="video/mp4" />
          <source src="/videos/embed.webm" type="video/webm" />
        </video>
      </div>
      <div className="py-2">
        <GhaCta />
      </div>
      <div className="py-6">
        <DarkContentSection title="Open Source & Free">
          <p className="py-4">
            Unbreak your docs and runbooks. <b>Runme</b> combined with <b>GitHub Actions</b> for VS
            Code lets you understand when to trigger what workflow, monitor results, and stay in
            control without having to bend over backward.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {benefitsMap.map((benefit) => {
              return <BenefitEntry {...benefit} />;
            })}
          </div>
        </DarkContentSection>
      </div>
      <DarkContentSection title="Tell me more...">
        <div>
          Read the announcement post to learn how RUNME can help connect the dots between relevant
          GitHub Actions workflows and your deploy and release processes. We'll cover the
          fundamental concepts, discuss their benefits, and showcase practical examples
          demonstrating their versatility.
        </div>
        <div className="mt-16 mb-10 mx-auto rounded-xl p-6 text-center border-neutral-600/80 shadow-[0px_2px_40px_4px_rgba(0,0,0,0.56)] shadow-purpleish-800 hover:shadow-purpleish-600 max-w-min whitespace-nowrap text-2xl line-clamp-2">
          <Link
            href="/blog/embed-github-actions"
            className="text-2xl text-purpleish-200 whitespace-nowrap"
          >
            Read the Announcement
          </Link>
          <div className="flex items-center justify-center p-2 space-x-2 text-lg">
            <div className="relative w-10 h-10 rounded-full">
              <img src="https://media.graphassets.com/OMZhBxVxQjOil0e2ZLfg" alt="Lizz Parody" />
            </div>
            <div className="font-medium">
              by <b>Lizz Parody</b>
            </div>
          </div>
        </div>
      </DarkContentSection>
    </div>
  );
};

export default Actions;
