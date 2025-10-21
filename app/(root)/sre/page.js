import { GithubCTAButton, SreCta, WorksCTAButton } from "@/components/Cta";
import { faDiscord, faXTwitter } from "@fortawesome/free-brands-svg-icons";

import Community from "@/components/Community";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { InstallStuff } from "@/components/InstallStuff";
import Link from "next/link";
import Metrics from "@/components/Metrics";
import Testimonials from "@/components/Testimonials";

const description =
  "Runme optimizes SRE processes by facilitating smoother setups, interactive onboarding, reducing support demands, and preventing context switching in the cloud environment.";
export const metadata = {
  title: "Streamlining SRE Workflows with Runme",
  description,
  keywords: [
    "runme",
    "sre workflows",
    "simplified",
    "user experience",
    "docker",
    "kubernetes",
    "cloud infrastructure",
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
    "cloud-native approach",
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
    "overall failure rates",
    "continuous integration",
    "job role",
    "infrastructure management",
    "business goals",
    "emergency response",
    "post-incident reviews",
    "Red Hat",
    "quality gates",
    "capacity planning",
    "performance tuning",
    "new launches",
    "O'Reilly Media",
    "Error Budgets",
    "organizational silos",
    "project work",
    "Accept failure",
    "security practices",
    "team culture",
    "shared responsibility",
    "system resiliency",
    "failure",
    "reviews",
    "service health",
    "software development lifecycle",
  ],
};

const benefitsMap = [
  {
    title: "Streamlined Setups",
    text: "Execute commands directly from markdown files, reducing errors and ensuring consistency by standardizing predefined commands or scripts in your documentation.",
  },
  {
    title: "Knowledge Sharing",
    text: "Enable hands-on onboarding with Runme, promoting collaboration, consistency, and self-sufficiency in knowledge sharing and support for new team members.",
  },
  {
    title: "Open and Compatible",
    text: "Open source, community driven and using open standards to maximize compatibility with the dev toolchain, making it easy to integrate into your workflow.",
  },
  // {
  //   title: "Reduced Support",
  //   text: "Enhance self-sufficiency and streamline support with interactive notebooks, enabling faster issue resolution and reducing miscommunication.",
  // },
  {
    title: "Enhanced Accuracy",
    text: "Eliminate context switching and transcription errors by executing commands directly from documentation, improving efficiency and accuracy.",
  },
  {
    title: "Audit Trails",
    text: "Identify outdated areas and maintain clear audit trails by running commands from documentation, improving observability and facilitating change tracking and issue debugging.",
  },
  {
    title: "Task Automation",
    text: "Automate config management tasks by embedding command sequences and scripts, streamlining workflows, ensuring consistency, and freeing up time for critical SRE responsibilities.",
  },
];

const UserQuote = () => {
  const testimonial = {
    quote:
      "Runme organized our docs and processes, a fantastic tool for solo and team work. It's markdown-based, highly compatible with other tools, and indispensable in my workflow.",
    author: "Dmitry Radkovskiy",
    description: "CTO @ Slise.xyz",
    img: "/img/testimonials/dmitry_radkovskiy.png",
    url: "https://www.linkedin.com/in/zlumer/",
  };

  return (
    <div className="w-full mx-auto md:w-3/4">
      <div className="flex flex-col py-3 pl-4 pr-3 space-x-4 border rounded break-inside-avoid bg-gradient-to-r from-neutral-600/20 to-neutral-600/30 border-neutral-500/50">
        <div className="text-xl italic text-neutral-300">"{testimonial.quote}"</div>
        <div className="flex flex-row items-center justify-end pt-1 space-x-2">
          <div className="h-[28px] w-[28px] relative">
            <Image
              src={testimonial.img}
              fill
              className="rounded-xl max-w-[28px]"
              alt={testimonial.author}
            />
          </div>
          <div className="font-semibold truncate">{testimonial.author},</div>
          <Link href={testimonial.url}>
            <div className="truncate text-neutral-400">{testimonial.description}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeatureBox = ({ headline, children }) => {
  return (
    <div className="m-4 font-light">
      <div className="text-2xl font-medium">{headline}</div>
      <div className="text-neutral-200">{children}</div>
    </div>
  );
};

const FeatureImage = ({ src }) => {
  return (
    <div className="relative mx-4 bg-white rounded min-h-[200px]">
      {src && <Image fill src={src} className="object-contain px-2 aspect-auto" />}
    </div>
  );
};

const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <FeatureBox headline="Collaborate Better on Bugs & Incidents">
        <p className="py-2">
          Build shareable procedures to work through known indicators and signals during service
          degradations to help figure out if it’s an incident.
        </p>
        <p className="py-2">
          Create higher fidelity reports and share outputs with the team in Slack, with the relevant
          expert, or with somebody with more time to dig in. Then turn the fix into an easy way to
          teach and learn from the shared solution.
        </p>
      </FeatureBox>

      <FeatureImage src="/graphics/procedure.png" />
      <FeatureImage src="/graphics/share.png" />
      <FeatureBox headline="Get Useful Output Records Automatically">
        <p className="py-2">
          Track outputs by step. Easily make records for compliance and work in heavily regulated
          industries.
        </p>
        <p className="py-2">
          Create shareable artifacts of problems, inputs, outputs, and fixes for recordkeeping.
        </p>
      </FeatureBox>
      <FeatureBox headline="Avoid the 2am Outdated Runbook Scenario">
        <p className="py-2">
          With Runme, your documentation and workflow are the same thing. Spot divergences ASAP
          because you're running your docs regularly.
        </p>
        <p className="py-2">
          Close the loop between making changes, checking outputs and updating your docs.
        </p>
      </FeatureBox>
      <FeatureImage src="/graphics/outdated.png" />
    </div>
  );
};

const InfoHeadline = () => {
  return (
    <div className="mt-12 md:mt-24">
      <div className="text-3xl font-medium">
        Open source and compatible with the dev toolchain. Runme integrates perfectly with your
        existing toolkit.
      </div>
    </div>
  );
};

const InfoTwo = () => {
  return (
    <div>
      <div className="text-2xl font-medium">
        Prevent Bus Factor, Get Off Pager, and Go On Vacation for Real
      </div>
      <div className="my-4 text-lg font-light text-neutral-200">
        Guide people through workflows with exact steps and exact results so they can do what you
        do. Codify your knowledge and make golden paths for teammates and devs with different
        expertise to you. QA your docs and workflows to be truly step-by-step and verifiable.
      </div>
    </div>
  );
};

const InfoSectionWhite = () => {
  return (
    <div className="text-3xl font-bold bg-white py-14 text-purpledk">
      <div className="max-w-screen-lg px-4 mx-auto md:px-0">
        Runme works with your pre-existing documentation, so no extra infrastructure to build,
        maintain, or manage. No extra TCO or bus factor.
      </div>
    </div>
  );
};

const InfoSectionOne = () => {
  return (
    <div className="mt-20">
      <div className="text-3xl font-medium">
        Make Your Knowledge, Workflows and Code Shareable.
        <br />
        Runme Does More than Automation.
      </div>
      <div className="my-6 text-lg font-light text-neutral-300">
        <ol className="list-decimal list-inside">
          <li>Make Interactive, Flexible Pipelines</li>
          <li>Collaborate Better on Bugs and Incidents</li>
          <li>Get Useful Output Records Automatically</li>
          <li>Avoid the 2am Outdated Runbook Scenario</li>
          <li>Prevent Bus Factor, Get Off Pager, and Go On Vacation for Real</li>
          <li>Work with Your Code, Structured Intuitively</li>
          <li>Share Code and Results Effortlessly</li>
        </ol>
      </div>
    </div>
  );
};

const Sre = () => {
  return (
    <div>
      <div className="max-w-screen-lg px-4 py-20 mx-auto md:px-0">
        <div className="flex flex-col pb-6 space-y-4 text-center">
          <h1 className="text-5xl font-bold leading-tight">
            Runbooks that Blend Pipeline <br />
            Structure and Script Flexibility
          </h1>
          <h3 className="w-1/2 py-1 mx-auto text-lg text-neutral-300">
            Runme transforms your docs into interactive runbooks to effortlessly streamline
            operations.
          </h3>
        </div>

        <div className="mt-2 mb-2">
          <UserQuote />
        </div>

        <div className="flex flex-row items-center pt-8 mx-auto space-x-4 max-w-fit">
          <WorksCTAButton />
          <GithubCTAButton />
          <Link
            href="https://twitter.com/runmedev"
            className="hover:brightness-75"
            aria-label="Follow us on Twitter"
          >
            <FontAwesomeIcon icon={faXTwitter} size="xl" />
          </Link>
          <Link
            href="https://discord.gg/runme"
            className="hover:brightness-75"
            aria-label="Join us on Discord"
          >
            <FontAwesomeIcon icon={faDiscord} size="xl" />
          </Link>
        </div>
        <div className="py-4 text-sm font-plex text-neutral-300">
          <InstallStuff />
        </div>

        <div className="my-8">
          <video
            className="rounded"
            poster="/img/intro.png"
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            <source src="/videos/intro.webm" type="video/webm" />
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>
        </div>

        <InfoSectionOne />
      </div>

      <InfoSectionWhite />

      <div className="max-w-screen-lg px-4 mx-auto md:px-0">
        <div className="my-20">
          <div className="text-3xl font-medium">Make Interactive, Flexible Pipelines</div>
          <div className="my-4 text-lg font-light text-neutral-200">
            Some jobs aren’t repetitive enough for regular pipelines. Turn step-by-step workflows
            into dynamic pipelines. Instantly check outputs. Runme builds on docs, so if you have
            docs, you’re ready to start.
          </div>
          <div className="my-4 text-xl font-semibold">
            <span className=" text-purpleish-300">Coming soon:</span> Logs and audit trails.
          </div>
          <div className="mt-20">
            <FeatureGrid />
          </div>
        </div>

        <InfoTwo />

        <InfoHeadline />

        <div className="flex flex-col space-y-20">
          <Testimonials />
          <Metrics />
          <SreCta />
        </div>
      </div>
      <div>
        <Community />
      </div>
    </div>
  );
};

export default Sre;
