import ConvertFooterBox from "@/components/ConvertFooterBox";
import Image from "next/image";
import Link from "next/link";

const FooterEntry = ({ text, href }) => {
  return (
    <div className="text-neutral-200 hover:underline">
      <Link href={href}>{text}</Link>
    </div>
  );
};

const FooterRow = ({ title, children }) => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="font-mono text-xs font-semibold tracking-wider uppercase text-neutral-400">
        {title}
      </div>
      <div className="flex flex-col space-y-2">{children}</div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-0 ">
      <div className="max-w-screen-lg pt-12 pb-6 mx-auto">
        <div className="flex flex-col space-y-6 text-center md:text-left md:space-y-0 md:flex-row justify-evenly">
          <div className="flex flex-col justify-center space-y-2">
            <div className="font-semibold text-center">Subscribe for updates</div>
            <ConvertFooterBox />
          </div>

          <FooterRow title="Runme">
            {/* <FooterEntry text="Playground" href="https://app.runme.dev" /> */}
            <FooterEntry text="GitHub" href="https://github.com/stateful/runme" />
            <FooterEntry text="Community" href="/community" />
            <FooterEntry text="Email Updates" href="/list" />
            <FooterEntry text="Cloud" href="/cloud" />

            {/* <FooterEntry text="Events" href="/events" /> */}
          </FooterRow>
          <FooterRow title="documentation">
            <FooterEntry text="Installation" href="https://docs.runme.dev/installation/" />
            <FooterEntry text="Getting started" href="https://docs.runme.dev/getting-started/" />
            <FooterEntry text="Configuration" href="https://docs.runme.dev/configuration" />
            <FooterEntry text="Usage" href="https://docs.runme.dev/usage" />
          </FooterRow>
          <FooterRow title="resources">
            <FooterEntry text="Blog" href="/blog" />
            {/* <FooterEntry text="Examples" href="/examples" /> */}
            <FooterEntry text="Runbooks" href="/topics/runbooks" />
            {/* <FooterEntry text="Workflows" href="/topics/workflows" /> */}
            <FooterEntry text="Youtube" href="https://www.youtube.com/@runmedev" />
            <FooterEntry text="GitHub Action" href="/spotlight/embed-github-actions" />
            {/* <FooterEntry text="CI/CD" href="/topics/cicd" /> */}
          </FooterRow>
          <FooterRow title="social">
            <FooterEntry text="Discord" href="https://discord.gg/runme" />
            <FooterEntry text="Fosstodon" href="  https://fosstodon.org/@runmedev" />
            <FooterEntry text="Bsky" href="https://bsky.app/profile/runme.dev" />
            <FooterEntry text="X" href="https://twitter.com/runmedev" />
          </FooterRow>
        </div>
      </div>
      <div className="flex justify-center pt-6 mx-auto">
        <div className="w-[77px] h-[65px] relative">
          <Image fill src="/runme_cube.svg" alt="Runme" />
        </div>
      </div>
      <div className="flex flex-col items-center pt-4 pb-6 text-sm text-neutral-400">
        <div>
          Runme was originally created by{" "}
          <Link
            href="https://stateful.com"
            className="text-white hover:brightness-90 hover:underline"
          >
            Stateful
          </Link>
          .
        </div>
        <div>Copyright © {new Date().getFullYear()} The Runme Authors. All rights reserved.</div>
        <div>
          Copyright © Runme Notebooks a Series of LF Projects, LLC For website terms of use,
          trademark policy and other project policies please see{" "}
          <Link
            href="https://lfprojects.org/policies/"
            className="text-white hover:brightness-90 hover:underline"
          >
            lfprojects.org/policies/
          </Link>
          .
        </div>
      </div>
    </footer>
  );
}
