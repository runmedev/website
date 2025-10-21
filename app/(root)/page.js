import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";

import Features from "@/components/Features";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InstallStuff } from "@/components/InstallStuff";
import { Link, Button, Image } from "@nextui-org/react";
import Metrics from "@/components/Metrics";
import QuickStart from "@/components/QuickStart";
import Testimonials from "@/components/Testimonials";
import ActionButtons from "@/components/ActionButtons";

const description =
  "Runme turns your documentation into interactive notebooks for operating cloud infrastructure. Put another way, you can use your docs the way you use your terminal, instead of just as a reference that tends to go out of date.";
export const metadata = {
  title: "DevOps Notebooks Built with Markdown",
  description,
  alternates: {
    canonical: `https://runme.dev`,
  },
  keywords: [
    "runme",
    "notebook",
    "IT workflows",
    "cloud workflows",
    "platform workflows",
    "sre workflows",
    "simplified",
    "user experience",
    "docker",
    "kubernetes",
    "cloud infrastructure",
    "Cloud infrastructure management",
    "cli",
    "vs code extension",
    "open-source",
    "github",
    "discord community",
    "seamless integration",
    "error-free operations",
    "hands-on onboarding",
    "support simplified",
    "effortless execution",
    "updated documentation",
    "standardization",
    "audit trail",
    "improved communication",
    "makefile",
    "npm scripts",
    "pipfile",
    "rake",
    "gradle",
    "grunt/gulp",
    "collaboration",
    "learning",
    "efficiency",
    "site reliability engineering",
    "software reliability",
    "highly reliable and scalable software systems",
    "reliable software",
    "software engineering practices",
    "operations experience",
    "DevOps",
    "DevOps automation tools",
    "SRE practices",
    "SRE best practices",
    "SRE approach",
    "SRE Tools",
    "SRE role",
    "SRE journey",
    "SRE model",
    "SRE principles",
    "SRE teams",
    "system reliability",
    "service reliability",
    "reliability principles",
    "reliable systems",
    "service level objectives",
    "service level indicators",
    "software delivery lifecycle",
    "Software maintenance",
    "application lifecycle",
    "cloud-native",
    "hybrid cloud",
    "production systems",
    "processes",
    "infrastructure processes",
    "system administrators",
    "operations tasks",
    "manual tasks",
    "Release Manager",
    "release cycle",
    "incident response",
    "future incidents",
    "automation tools",
    "right tools",
    "continuous integration",
    "job role",
    "infrastructure management",
    "emergency response",
    "post-incident reviews",
    "capacity planning",
    "performance tuning",
    "new launches",
    "O'Reilly Media",
    "Error Budgets",
    "organizational silos",
    "Accept failure",
    "security practices",
    "shared responsibility",
    "system resiliency",
    "service health",
    "software development lifecycle",
    "infrastructure",
    "gitops",
    "runbooks",
    "runbook",
    "terraform",
    "bash",
    "platform",
  ],
};

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
        We want to stay connected with our users on X. Follow{" "}
        <span className="font-semibold text-neutral-300">@runmedev</span> for all the latest
        updates.
      </>
    ),
  },
};

const guidesData = [
  {
    title: "Bash Scripts",
    description: "Run bash scripts directly within your Markdown files as a Runme Notebook.",
    url: "https://docs.runme.dev/usage/hello-world",
    iconPath: "/img/guides/bash.svg",
  },
  {
    title: "Devcontainers",
    description: "Connect your Runme Notebook to a Devcontainer.",
    url: "https://docs.runme.dev/usage/devcontainers",
    iconPath: "/img/guides/devcontainer.svg",
  },
  {
    title: "Test in CI",
    description: "Run your Notebooks as tests in your CI/CD pipelines to keep them from bitrot.",
    url: "https://runme.dev/blog/readmeops-testing-docs-in-ci",
    iconPath: "/img/guides/github-actions.svg",
  },
  {
    title: "Docker",
    description: "Runme Notebooks for Docker workflows.",
    url: "https://docs.runme.dev/guide/docker",
    iconPath: "/img/guides/docker.svg",
  },
  {
    title: "Python .venv",
    description: "Create and use a virtual environment for running Python commands.",
    url: "https://docs.runme.dev/guide/pythonenv",
    iconPath: "/img/guides/python.svg",
  },
  {
    title: "Terraform",
    description: "Runme Notebooks for Terraform workflows.",
    url: "https://docs.runme.dev/guide/terraform",
    iconPath: "/img/guides/terraform.svg",
  },
  {
    title: "Dagger",
    description:
      "Easily write, develop, and run Dagger modules and pipelines within a notebook environment",
    url: "https://docs.runme.dev/guide/dagger",
    iconPath: "/img/guides/dagger.png",
  },
  {
    title: "K8s with Helm",
    description: "Runme Notebooks for k8s/Helm workflows.",
    url: "https://docs.runme.dev/guide/k8s/helm",
    iconPath: "/img/guides/k8s.svg",
  },
  {
    title: "K8s with Argo CD",
    description: "Setup and interact with Argo using Runme Notebooks.",
    url: "https://docs.runme.dev/guide/k8s/argocd",
    iconPath: "/img/guides/argo.svg",
  },
  {
    title: "AWS",
    description: "Manage AWS resources and perform operations from your Markdown environment.",
    url: "https://docs.runme.dev/guide/cloud-render/aws",
    iconPath: "/img/guides/aws.svg",
  },
  {
    title: "BigQuery",
    description: "Interact with BigQuery in GCloud and render sortable tables.",
    url: "https://docs.runme.dev/guide/bigquery",
    iconPath: "/img/guides/gcloud.svg",
  },
  {
    title: "Cloud Run",
    description:
      "Manage Google Cloud Run resources and perform operations from your Markdown environment.",
    url: "https://docs.runme.dev/guide/cloud-render/cloud-run",
    iconPath: "/img/guides/gcloud.svg",
  },
  {
    title: "GCP",
    description:
      "Manage Google Cloud resources and perform operations from your Markdown environment.",
    url: "https://docs.runme.dev/guide/cloud-render/gcp",
    iconPath: "/img/guides/gcloud.svg",
  },
];

export const LinkWrap = ({ href, alt, children }) => {
  return (
    <Link title={alt} href={href}>
      {children}
    </Link>
  );
};

const CommunityBox = ({ entry }) => {
  const entryObj = communityMap[entry];
  return (
    <Link
      href={entryObj.href}
      className="flex flex-col items-center justify-center w-full px-4 py-6 space-y-3 shadow-2xl group hover:bg-neutral-800/30"
    >
      <div>{entryObj.icon}</div>
      <h4 className="text-xl font-medium">{entryObj.title}</h4>
      <div className="text-sm tracking-wide text-center text-gray-300">{entryObj.description}</div>
    </Link>
  );
};

const Community = () => {
  return (
    <div className="flex flex-col w-full border divide-y rounded md:divide-y-0 md:divide-x md:flex-row justify-evenly border-neutral-100/10 divide-neutral-100/10">
      {Object.keys(communityMap).map((entry, i) => {
        return <CommunityBox key={i} entry={entry} />;
      })}
    </div>
  );
};

const Hero = () => {
  return (
    <div className="flex flex-col space-y-3 text-center px-4 md:px-0">
      {/* <div className="mx-4 flex flex-row items-center justify-center gap-x-6 pb-2">
        <a href="https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america">
          <div className="mx-auto cursor-pointer truncate whitespace-normal rounded-full border border-yellow-600 px-4 py-1 text-sm hover:bg-neutral-900">
            We&apos;ll be a KubeCon November 12-15. Join us at{" "}
            <span className="font-semibold">booth S51!</span>
          </div>
        </a>
      </div> */}
      {/* <a href="/blog/rollup-terminals">
        <div className="mx-auto max-w-min truncate cursor-pointer whitespace-nowrap rounded-full border border-yellow-600 px-4 py-1 text-md hover:bg-neutral-900">
          <span className="font-semibold">BLOG:</span> Roll up Terminals Into A Knowledge Base
        </div>
      </a> */}
      <h1 className="font-plexSans text-3xl sm:text-4xl md:text-[56px] text-center md:leading-tight tracking-wider">
        DevOps Notebooks
        <div>Built with Markdown</div>
      </h1>

      <h3 className="text-lg sm:text-xl md:text-[22px] font-normal tracking-widest md:w-3/5 text-center mx-auto text-gray-300">
        Codify your operational process as cloud-native, testable, interactive documentation.
      </h3>
      {/* <div className="py-4 flex flex-row space-x-2 items-center justify-center">
        <Stars text="vscode-runme" url="https://github.com/stateful/vscode-runme" />
      </div> */}
      <ActionButtons />
    </div>
  );
};

const HeroVideo = () => {
  return (
    <video
      className="rounded border border-purple-900/60"
      poster="/img/intro.png"
      autoPlay
      loop
      muted
      playsInline
      controls
    >
      <source src="/videos/hero.webm" type="video/webm" />
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
  );
};

const OssSection = () => {
  return (
    <div className="flex flex-col w-full mx-auto space-y-2 w-100 md:w-5/6 md:flex-row md:space-y-0">
      <h3 className="font-plex text-xl md:text-[30px] font-light md:pr-16 px-12 text-center md:text-left md:px-0 leading-relaxed tracking-wider">
        Open source, open standards, Apache License Version 2.0 and compatible with your existing
        toolchain.
      </h3>
      <div className="flex flex-col items-center justify-center space-y-2 min-w-fit">
        <div className="text-[90px]">
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <Button
          as="a"
          href="https://github.com/stateful/runme"
          color="primary"
          auto
          className="tracking-widest font-medium"
          variant="solid"
          alt="OSS Runme on GitHub"
        >
          Runme on GitHub
        </Button>
      </div>
    </div>
  );
};

// const WorksWithSection = () => {
//   return (
//     <h3 className="flex flex-col w-full mx-auto text-center md:w-[85%]">
//       <div className="font-plex text-2xl md:text-[30px] font-light px-8 leading-relaxed tracking-wider">
//         Runme works with your pre-existing documentation, so no extra infrastructure to build,
//         maintain, or manage.
//       </div>
//       <div className="font-plex text-2xl md:text-[30px] font-light px-8 text-[#75B1F7] leading-normal">
//         No extra TCO or bus factor.
//       </div>
//     </h3>
//   );
// };

// const Case = ({ title, description, url }) => {
//   return (
//     <div className="rounded-lg border-2 border-purpleish-900 p-4 flex flex-col space-y-4 md:w-1/3 w-full bg-purpledk z-10">
//       <div className="text-xl font-medium">{title}</div>
//       <div className="font-light text-lg">{description}</div>
//       <div className="w-full text-end">
//         <LinkWrap href={url} alt={title}>
//           <span className="text-purpleish-200 hover:brightness-75 font-semibold">Read more</span>
//         </LinkWrap>
//       </div>
//     </div>
//   );
// };

// const Usecases = () => {
//   return (
//     <div className="md:mb-60 mb-32 mt-8 md:mt-20">
//       <div className="w-[330px] h-[57px] relative mx-auto my-6 z-1 ">
//         <Image fill src="/img/use-cases.svg" alt="Use Cases" className="px-4" />
//       </div>

//       <div className="relative text-center font-plexSans">
//         <div className="absolute inset-0 md:top-0 md:w-3/4 h-[500px] -mt-[150px] z-0 bg-cover bg-no-repeat bg-center bg-[url('/img/metrics-gradient.svg')] mx-auto md:transform md:-translate-x-1/2 md:left-1/2"></div>
//         <h2 className="text-3xl md:text-[48px] leading-tight tracking-wider relative z-10">
//           <span>Popular Use Cases</span>
//         </h2>
//       </div>

//       <div className="w-full flex flex-col md:flex-row justify-center pt-12 md:space-x-4 space-x-0 md:space-y-0 space-y-4 px-8 md:px-4">
//         <Case
//           title="Mission Control Dashboards"
//           description="Consolidate the commands/code needed to modify and monitor cloud infrastructure with  deeply integrated admin interfaces."
//           url="https://runme.dev/blog/escape-confluence-runme-v2"
//         />
//         <Case
//           title="Operational Runbooks"
//           description="Sequencial workflows for onboarding, customer support or on-call handling outages and saving output artifacts for incident reports."
//           url="https://runme.dev/blog/runme-v3-pipeline-logs-and-artifacts"
//         />
//         <Case
//           title="Interactive CLI Docs"
//           description="Transform a MkDocs or Docusaurus website into interactive docs for your CLI tool, helping users get started quickly."
//           url="https://runme.dev/blog/runme-blog-launcher"
//         />
//       </div>
//     </div>
//   );
// };

const GuideEntry = ({ title, description, url, iconPath }) => {
  return (
    <div className="rounded-lg border-2 border-purpleish-900 p-4 flex flex-col space-y-4 bg-purpledk z-10 h-full">
      <div className="flex items-center space-x-2">
        <Image src={iconPath} alt={`${title} icon`} width={32} height={32} />
        <div className="text-xl font-medium">{title}</div>
      </div>
      <div className="font-light text-gray-300 flex-grow">{description}</div>
      <div className="w-full text-end mt-auto">
        <LinkWrap href={url} alt={title}>
          Open
        </LinkWrap>
      </div>
    </div>
  );
};
const Guides = () => {
  return (
    <div className="md:mb-56 mb-32 mt-8 md:mt-20">
      <div className="relative text-center font-plexSans">
        <div className="absolute inset-0 md:top-0 md:w-3/4 h-[500px] -mt-[150px] z-0 bg-cover bg-no-repeat bg-center bg-[url('/img/metrics-gradient.svg')] mx-auto md:transform md:-translate-x-1/2 md:left-1/2"></div>
        <h2 className="text-3xl md:text-[48px] leading-tight tracking-wider relative z-10">
          <span>Guides</span>
        </h2>
        <p className="text-lg text-sub mt-4 relative z-10">
          Explore step-by-step examples with all the tools in your DevOps stack.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-12 px-8 md:px-4">
        {guidesData.map((guide) => (
          <GuideEntry
            key={guide.title}
            title={guide.title}
            description={guide.description}
            url={guide.url}
            iconPath={guide.iconPath}
          />
        ))}
      </div>

      <div className="py-4 text-end px-4">
        <Link href="https://docs.runme.dev/guide/">All available guides</Link>
      </div>
    </div>
  );
};

const TutorialEntry = ({ title, description, url, imgSrc }) => {
  return (
    <div className="rounded-lg border-2 border-purpleish-900 p-4 flex flex-col justify-between space-y-4 bg-purpledk z-10 h-full">
      <div className="flex items-center space-x-2">
        <img src={imgSrc} alt={`${title} icon`} className="h-8 w-8" />
        <div className="text-xl font-medium whitespace-nowrap">{title}</div>
      </div>
      <div className="font-light text-gray-300">{description}</div>
      <div className="w-full text-end mt-auto">
        <LinkWrap href={url} alt={title}>
          Read
        </LinkWrap>
      </div>
    </div>
  );
};

const Tutorials = () => {
  return (
    <div className="md:mb-6 mb-6 mt-14 md:mt-20">
      {/* <div className="relative text-center font-plexSans">
        <div className="absolute inset-0 md:top-0 md:w-3/4 h-[500px] -mt-[150px] z-0 bg-cover bg-no-repeat bg-center bg-[url('/img/metrics-gradient.svg')] mx-auto md:transform md:-translate-x-1/2 md:left-1/2"></div>
        <h2 className="text-3xl md:text-[48px] leading-tight tracking-wider relative z-10">
          <span>Tutorials</span>
        </h2>
      </div> */}

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 md:px-4 pt-12">
        <TutorialEntry
          title="Getting Started"
          description="Get Runme setup for VS Code, CLI, Web, Docker or with your CDE."
          url="https://docs.runme.dev/getting-started/"
          imgSrc="/img/tutorials/notebook.svg"
        />
        <TutorialEntry
          title="Usage"
          description="How to use all the available features and integrations for crafting reliable Notebooks."
          url="https://docs.runme.dev/usage/"
          imgSrc="/img/tutorials/bulb.svg"
        />
        <TutorialEntry
          title="Configuration"
          description="An overview of the available config for Notebooks and cells, including identity, auto-save and shebang."
          url="https://docs.runme.dev/configuration/"
          imgSrc="/img/tutorials/gear.svg"
        />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="h-full ">
      <div className="max-w-screen-lg mx-auto">
        <div className="pt-8 md:pt-16 md:px-0">
          <Hero />
          <div className="mx-auto bg-cover bg-no-repeat bg-center bg-[url('/img/top-gradient.svg')] w-full md:w-5/6 -mt-48 h-[400px]"></div>
        </div>

        <div className="mb-8 md:mb-8 -mt-48 px-4 md:px-0 max-w-screen-md mx-auto">
          <HeroVideo />
          {/* <div className="py-3 text-center">
            Also, watch{" "}
            <Link
              href="https://youtu.be/rsb60yv1X7I"
              className="text-purpleish-200 hover:underline"
            >
              "Runme in 2 minutes"
            </Link>{" "}
            to see it in action.
          </div> */}
        </div>

        <Tutorials />
        <div className="my-4 md:my-0 px-4 md:px-0">
          <div className="pt-8 text-[16px] font-light font-plex">
            <QuickStart />
          </div>
        </div>

        <div className="mt-28 md:mt-40 mb-10 md:mb-28">
          <OssSection />
          <div className="mx-auto bg-cover bg-no-repeat bg-center bg-[url('/img/integrate-gradient.svg')] w-full md:w-1/2 h-[500px] -mt-[380px]"></div>
        </div>

        <div className="my-8 md:my-24 px-4 md:px-0">
          <h2 className="font-plexSans text-3xl md:text-[48px] text-center leading-tight tracking-wider">
            Make Markdowns Interactive
          </h2>
          <div className="pt-3 text-[16px] font-light font-plex">
            <InstallStuff />
          </div>
          <div>
            <Features />
          </div>
        </div>

        {/* <Usecases /> */}

        {/* <div className="mt-24 md:mt-48">
          <WorksWithSection />
          <div className="mx-auto bg-cover bg-no-repeat bg-center bg-[url('/img/bus-gradient.svg')] w-full md:w-1/2 h-[500px] -mt-[350px]"></div>
        </div> */}

        <Guides />

        <div className="mt-8 md:mt-18 px-4 md:px-0">
          <h2 className="font-plexSans text-3xl md:text-[48px] text-center leading-tight tracking-wider">
            Loved by Engineers
          </h2>
          <Testimonials />
        </div>

        <div className="mt-24 md:mt-48 px-4 md:px-0">
          <h2 className="font-plexSans text-3xl md:text-[48px] text-center leading-tight mb-4 tracking-wider">
            Supported by the community
          </h2>
          <h3 className="font-sans text-[24px] font-normal tracking-wider text-center">
            Interested in contributing?
          </h3>
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <Button
              as="a"
              href="/community"
              color="primary"
              auto
              className="tracking-widest"
              variant="solid"
              size="lg"
            >
              Get involved with the project
            </Button>
          </div>
          <Metrics />
        </div>
        <div className="mx-auto bg-cover bg-no-repeat bg-center bg-[url('/img/metrics-gradient.svg')] w-full h-[450px] md:-mt-[210px] -mt-[400px]"></div>

        <div className="md:-mt-[140px] pb-24 bg-purpledk">
          <Community />
        </div>
      </div>
    </div>
  );
};

export default Home;
