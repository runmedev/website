import "@/styles/links.css";
import Link from "next/link";
import { getMetrics } from "@/components/Metrics";

export const metadata = {
  title: "Community",
  description: "Join our community!",
  alternates: {
    canonical: `https://runme.dev/community`,
  },
};

const COMMUNITY_SECTIONS = [
  {
    icon: (
      <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="2"
          y1="37"
          x2="48"
          y2="37"
          stroke="#FFDB06"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M35.3963 1.90657C33.4842 1.0241 31.4337 0.373939 29.2899 0.00156207C29.2508 -0.00562468 29.2118 0.0123354 29.1917 0.0482564C28.928 0.520011 28.6359 1.13545 28.4314 1.61919C26.1255 1.27196 23.8315 1.27196 21.5729 1.61919C21.3683 1.1247 21.0656 0.520011 20.8007 0.0482564C20.7806 0.0135339 20.7416 -0.00442618 20.7026 0.00156207C18.5599 0.372749 16.5095 1.02291 14.5962 1.90657C14.5796 1.91376 14.5654 1.92574 14.556 1.9413C10.6667 7.78564 9.60131 13.4863 10.124 19.1164C10.1263 19.1439 10.1417 19.1703 10.163 19.187C12.729 21.0824 15.2146 22.2331 17.6541 22.9958C17.6931 23.0078 17.7345 22.9934 17.7594 22.9611C18.3364 22.1685 18.8508 21.3327 19.2918 20.4538C19.3179 20.4023 19.293 20.3413 19.2398 20.3209C18.4239 20.0096 17.647 19.63 16.8997 19.199C16.8405 19.1643 16.8358 19.0792 16.8902 19.0385C17.0475 18.92 17.2048 18.7966 17.3549 18.6721C17.3821 18.6494 17.42 18.6446 17.4519 18.6589C22.3616 20.9136 27.6769 20.9136 32.5287 18.6589C32.5606 18.6434 32.5985 18.6482 32.6268 18.6709C32.7771 18.7954 32.9343 18.92 33.0928 19.0385C33.1472 19.0792 33.1436 19.1643 33.0845 19.199C32.3372 19.6384 31.5602 20.0096 30.7431 20.3197C30.6899 20.3401 30.6663 20.4023 30.6923 20.4538C31.1428 21.3315 31.6572 22.1672 32.2236 22.9599C32.2473 22.9934 32.2898 23.0078 32.3289 22.9958C34.7802 22.2331 37.2658 21.0824 39.8318 19.187C39.8543 19.1703 39.8685 19.1451 39.8708 19.1176C40.4964 12.6086 38.8231 6.95468 35.4353 1.94249C35.427 1.92574 35.4128 1.91376 35.3963 1.90657Z"
          fill="#5562EB"
        />
      </svg>
    ),
    type: "Discord",
    heading: "Connect with other developers about their tools",
    description:
      "Our Discord server is the best way to participate in our community. Bring your questions, requests, ideas, and showcases. Since Runme is Open Source, we are especially happy to help you get setup with the code and contribute.",
    link: "https://discord.gg/runme",
  },
  {
    icon: (
      <svg
        width="50"
        height="55"
        viewBox="0 0 50 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="2"
          y1="53"
          x2="48"
          y2="53"
          stroke="#42FCCC"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M14.6894 37C11.2101 34.0895 9 29.734 9 24.8667C9 16.1037 16.1634 9 25 9C33.8366 9 41 16.1037 41 24.8667C41 29.734 38.7899 34.0895 35.3106 37"
          stroke="#42FCCC"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
    type: "Open Source",
    heading: "Help and support to get Runme working for you",
    description:
      "Runme is comprised of a few different code repositories on GitHub, and we work hard to make them approachable by eating our own dogfood. We really want to support contributors, so give it a try and don't be afraid to ask for help.",
    link: "https://github.com/stateful",
  },
  // {
  //   icon: (
  //     <svg
  //       width="50"
  //       height="58"
  //       viewBox="0 0 50 58"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <line
  //         x1="2"
  //         y1="56"
  //         x2="48"
  //         y2="56"
  //         stroke="#FFDB06"
  //         strokeWidth="4"
  //         strokeLinecap="round"
  //       />
  //       <path
  //         d="M14.6894 37C11.2101 34.0895 9 29.734 9 24.8667C9 16.1037 16.1634 9 25 9C33.8366 9 41 16.1037 41 24.8667C41 29.734 38.7899 34.0895 35.3106 37"
  //         stroke="#5B3ADF"
  //         strokeWidth="4"
  //         strokeLinecap="round"
  //       />
  //     </svg>
  //   ),
  //   type: "Updates",
  //   heading: "Stay up to date with new features and functionality",
  //   description:
  //     "Get notified about Runme articles and other cool topics. We email infrequently, you can unsubscribe at any time, and we try to keep the content focused and useful.",
  //   link: "https://runme.dev/list",
  // },
  {
    icon: (
      <svg
        width="50"
        height="55"
        viewBox="0 0 50 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="2"
          y1="53"
          x2="48"
          y2="53"
          stroke="#3693FF"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M14.6894 37C11.2101 34.0895 9 29.734 9 24.8667C9 16.1037 16.1634 9 25 9C33.8366 9 41 16.1037 41 24.8667C41 29.734 38.7899 34.0895 35.3106 37"
          stroke="#FF906E"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
    heading: "Resources",
    description:
      "Access the complete documentation, explore the CLI interface, and use the GitHub Action to seamlessly integrate Runme into CI.",
    link: "https://github.com/stateful",
  },
];

export default async function CommunityHome() {
  const rawMetricsMap = await getMetrics();
  const metricsMap = ["installs", "stars", "discord"]
    .map((key) => rawMetricsMap[key])
    .filter(Boolean);

  return (
    <div className="h-full py-16 text-white bg-purpledk">
      <header className="text-center">
        <h1 className="text-6xl font-bold">Community</h1>
        <h2 className="pt-4 mx-8 text-2xl font-light">
          Get involved with Runme and stay up to date with new features and functionality!
        </h2>
      </header>

      {/* Metrics */}
      <section className="my-16 text-center">
        <div className="flex flex-wrap justify-center gap-8 max-w-screen-lg mx-auto">
          {metricsMap.map(({ title, fmt }, i) => (
            <div
              key={i}
              className="p-6 bg-purple-700 rounded-lg shadow-md hover:shadow-lg w-64 text-center"
            >
              <div className="text-5xl font-bold">{fmt}</div>
              <div className="mt-2 text-lg font-medium text-neutral-300">{title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Images */}
      <section className="flex justify-center gap-8 max-w-screen-lg mx-auto mt-16">
        <div
          className="h-64 w-64 bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url(/img/community/laura.jpg)` }}
        ></div>
        <div
          className="h-64 w-64 bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url(/img/community/adam.jpg)` }}
        ></div>
        <div
          className="h-64 w-64 bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url(/img/community/sebastian.jpg)` }}
        ></div>
      </section>

      {/* Info Boxes */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 max-w-screen-lg mx-auto">
        {COMMUNITY_SECTIONS.map(({ icon, type, heading, description, link }, i) => (
          <div
            key={i}
            className="p-6 border-2 border-purple-500 rounded-lg text-center hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-center mb-4">{icon}</div>
            <h3 className="text-sm font-semibold uppercase">{type}</h3>
            <h2 className="my-2 text-xl font-semibold">{heading}</h2>
            <p className="text-neutral-300">{description}</p>
            <Link href={link} className="mt-4 inline-block text-purple-300 hover:underline">
              Learn more &gt;
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
