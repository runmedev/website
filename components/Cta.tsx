import Link from "next/link";
import { InstallStuff } from "@/components/InstallStuff";
import type { ReactNode } from "react";

interface ButtonProps {
  link: string;
  children: ReactNode;
}

export function Button({ link, children }: ButtonProps): React.ReactElement {
  return (
    <Link href={link} className="w-full sm:max-w-min hover:!no-underline">
      <div className="px-6 py-3 font-bold text-black bg-white rounded-md shadow-[0px_2px_30px_4px_rgba(0,0,0,0.56)] whitespace-nowrap shadow-purpleish-500/70 hover:brightness-90">
        {children}
      </div>
    </Link>
  );
}

export function WorksCTAButton(): React.ReactElement {
  return (
    <Link href={"https://docs.runme.dev"} className="w-full sm:max-w-min hover:!no-underline">
      <div className="px-6 py-3 font-medium border border-white rounded-sm whitespace-nowrap hover:brightness-90">
        See how it works
      </div>
    </Link>
  );
}

export function GithubCTAButton(): React.ReactElement {
  return (
    <Link
      href={"https://github.com/stateful/runme"}
      className="w-full sm:max-w-min hover:!no-underline"
    >
      <div className="px-6 py-3 font-medium rounded-sm bg-purpleish-700 hover:bg-purpleish-500 whitespace-nowrap hover:brightness-90">
        Sign up
      </div>
    </Link>
  );
}

interface CTAButtonProps {
  link?: string;
  children: ReactNode;
}

export function CTAButton({ link = "https://docs.runme.dev", children }: CTAButtonProps): React.ReactElement {
  return (
    <div className="w-full pb-8 mx-auto sm:max-w-min">
      <Button link={link}>{children}</Button>
    </div>
  );
}

interface DocsCtaProps {
  compact?: boolean;
  label?: string;
  link?: string;
  title?: string;
}

export function DocsCta({
  compact = false,
  label = "Explore the docs",
  link = "https://docs.runme.dev",
  title,
}: DocsCtaProps): React.ReactElement {
  if (compact) {
    return (
      <div className="w-full px-4 py-6 text-center md:px-0">
        {title && <div className="pb-4 text-xl font-semibold">{title}</div>}
        <div className="w-full mx-auto sm:max-w-min">
          <Button link={link}>{label}</Button>
        </div>
      </div>
    );
  }

  const heading = title || "Get started, run a README.md";

  return (
    <div className="w-full px-4 text-center md:px-0">
      <div className="pb-10 text-3xl font-semibold">{heading}</div>
      <CTAButton link={link}>{label}</CTAButton>
      <div className="text-sm font-plex">
        <InstallStuff />
      </div>
    </div>
  );
}

export function SreCta(): React.ReactElement {
  return (
    <div className="w-full px-4 text-center md:px-0">
      <div className="pb-10 text-3xl font-semibold">
        Ready to streamline your SRE operations?
      </div>
      <CTAButton>Get Started with Runme</CTAButton>
      <div className="text-sm font-plex">
        <InstallStuff />
      </div>
    </div>
  );
}

export function GhaCta(): React.ReactElement {
  return (
    <div className="w-full px-4 text-center md:px-0">
      <div className="pb-10 text-3xl font-bold">GitHub Actions + RUNME</div>
      <div className="w-full pb-8 mx-auto sm:max-w-min">
        <Button link={"https://docs.runme.dev/usage/github-actions-workflow"}>Read the Docs</Button>
      </div>
      <div className="text-sm font-plex">
        <InstallStuff />
      </div>
    </div>
  );
}

export function MarkdownCTA(): React.ReactElement {
  return (
    <div className="w-full px-4 text-center md:px-0 pt-18">
      <div className="text-4xl font-semibold">Save your commands to the cloud</div>
      <div className="pb-10 text-lg font-light text-neutral-300">
        One click to pastebin your command output to a sharable link or Slack.
      </div>

      <div className="w-full pb-8 mx-auto sm:max-w-min">
        <Link href="https://docs.runme.dev" className="w-full sm:max-w-min">
          <div className="px-6 py-3 font-bold text-black bg-white rounded-md shadow-[0px_2px_30px_4px_rgba(0,0,0,0.56)] whitespace-nowrap shadow-purpleish-500/70 hover:brightness-90">
            Sign up (it's free)
          </div>
        </Link>
      </div>
      <div className="text-sm font-plex text-neutral-300">
        <InstallStuff />
      </div>
    </div>
  );
}
