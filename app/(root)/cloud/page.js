import Link from "next/link";
import { Button, Image } from "@nextui-org/react";

export const LinkWrap = ({ href, alt, children }) => {
  return (
    <Link alt={alt} href={href}>
      {children}
    </Link>
  );
};

const CloudFeature = ({ title, children }) => {
  return (
    <div className="flex flex-col px-4 space-y-3 mx-auto md:w-1/3 border-2 border-neutral-700 p-6 rounded-lg transition-transform duration-200 hover:bg-neutral-800/30 hover:scale-105">
      <h4 className="text-lg md:text-xl font-medium font-plex">{title}</h4>
      <div className="tracking-wider text-[18px] font-light text-neutral-300">{children}</div>
    </div>
  );
};

const StatefulFeatures = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-4 py-12 text-center px-4">
      <CloudFeature title="Store sessions and search your history">
        Store Runme sessions and metadata (data is encrypted and masked), allowing easy access to
        past sessions without compromising security.
      </CloudFeature>
      <CloudFeature title="Find and launch Notebooks from GitHub">
        Search for Notebooks across all repositories in your Github organization. Launch with a
        single click to run commands in your environment.
      </CloudFeature>
      <CloudFeature title="Share, discuss and troubleshoot as a team">
        Grant access to resources with fine-grained IAM controls. Notify team members through Slack
        or email for collaborative troubleshooting and discussions.
      </CloudFeature>
    </div>
  );
};

export default async function Cloud() {
  return (
    <div className="flex flex-col min-h-screen w-full text-white border-b border-neutral-100/20 bg-purpledk">
      <div className="flex-grow py-12 mx-auto w-full">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col space-x-4 items-center justify-center space-y-2">
            <div className="flex md:flex-row flex-col-reverse items-center md:space-x-4 space-x-0">
              <div className="relative">
                <Image
                  src="/img/stateful_logo_white.svg"
                  alt="Stateful"
                  width={230}
                  height={52}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <h3 className="text-[22px] font-normal tracking-widest text-center text-gray-300 md:w-full px-4 py-2">
              Save, search and safely share your Runme Notebook sessions.
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center pt-8 space-y-4">
            <Button
              as="a"
              href="https://stateful.com"
              alt="Learn about Stateful"
              color="primary"
              auto
              className="tracking-widest"
              variant="shadow"
              size="lg"
            >
              Start for free
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center pt-12">
            <Image
              src="https://api.scarf.sh/v2/packages/Runme/35439402-fd2c-45f7-8341-3daffa620ae2/commercial-users-badge"
              alt="Commercial users badge"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <Image src="/img/stateful-ide.png" className="pt-10" />
          <div className="md:pb-20">
            <StatefulFeatures />
          </div>
        </div>
      </div>
    </div>
  );
}
