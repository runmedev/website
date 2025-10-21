"use client";

import clsx from "clsx";
import { useState } from "react";
import { Link, Button, Image } from "@nextui-org/react";

const featureMap = {
  hello: {
    title: "Hello World",
    description:
      "Make your first Notebook (create and open a Markdown file), run bash from a cell, display output from Google cloud and generate and share artifacts from your session. Then check it into your Git repo for others to use.",
    videoId: "runme-hello-world",
    cta: "Get started",
    url: "https://docs.runme.dev/getting-started/",
    imgClasses: "p-6",
  },
  cloud: {
    title: "Cloud Native",
    description:
      "Integrated with your favorite cloud providers to bring important web interfaces directly into your notebooks. Check out the GCP example below, with AWS and Azure coming soon.",
    videoId: "gcp",
    cta: "Learn more",
    url: "https://docs.runme.dev/guide/cloud-render/",
    imgClasses: "p-6",
  },
  tools: {
    title: "Bring your Tools",
    description:
      "Works with Helm, Terraform, Ansible, Docker, SSH, any many other cloud-native projects and services.",
    img: "/graphics/tools.png",
    cta: "Read the docs",
    url: "https://docs.runme.dev",
    imgClasses: "p-6",
  },
  languages: {
    title: "Many Languages",
    description:
      "Supports running commands/snippets written in Javascript, Typescript, Shell, Lua, Perl, Python and Ruby. More to come!",
    img: "/graphics/languages.png",
    cta: "Read the docs",
    url: "https://docs.runme.dev",
    imgClasses: "p-6 rounded",
  },
  ci: {
    title: "GitOps and CI",
    description:
      "Test your runbooks and docs against your app using the Runme CLI, or our GitHub Action.",
    img: "/graphics/markdown-cicd.png",
    cta: "Learn more",
    url: "/blog/readmeops-testing-docs-in-ci",
    imgClasses: "",
  },
  runners: {
    title: "Notebook & CLI",
    description:
      "Choose the 'click to play' notebook experience or jump right into the terminal with the CLI.",
    videoId: "runners",
    cta: "Install a Runner",
    url: "https://docs.runme.dev/installation",
    imgClasses: "p-6 rounded",
  },
  kernel: {
    title: "Kernel Architecture",
    description:
      "Runme is like Jupyter but with a Shell/Bash Kernel, shared environment sessions, lightweight dependencies, and both a CLI and notebook UI.",
    img: "/graphics/venn.png",
    cta: "Learn more",
    url: "https://docs.runme.dev",
    imgClasses: "p-6 rounded",
  },
  platform: {
    title: "Open Platform & Standards",
    description:
      "Built on the VS Code platform, open source and 100% markdown compatible. Also runs in Codespaces, Gitpod, VSCodium, and in the browser using coder/code-server.",
    img: "/graphics/terminal.gif",
    cta: "Runme on Github",
    url: "https://github.com/stateful/runme",
    imgClasses: "px-6",
  },
};

const FeatureBox = ({ setSelected, selected, section, children }) => {
  return (
    <div
      className={clsx(
        "px-4 py-3 font-semibold cursor-pointer hover:bg-purple-900/20 text-neutral-200",
        { "bg-purple-900/20": selected === section }
      )}
      onClick={() => {
        setSelected(section);
      }}
    >
      {children}
    </div>
  );
};

const FeatureShowcase = ({ feature, className }) => {
  const { title, img, videoId } = feature;

  if (videoId) {
    const [webm, mp4] = ["webm", "mp4"].map((f) => `/videos/${videoId}.${f}`);
    return (
      <div className={className}>
        <video autoPlay loop muted controls playsInline key={videoId}>
          <source src={webm} type="video/webm" />
          <source src={mp4} type="video/mp4" />
        </video>
      </div>
    );
  }
  return <Image src={img} alt={title} className={className} />;
};

const Features = () => {
  const topKey = Object.keys(featureMap)[0];
  const [selected, setSelected] = useState(topKey);

  const selFeature = featureMap[selected];
  return (
    <div className="px-4 md:px-0">
      <div className="flex flex-col max-w-screen-lg mx-auto space-y-16 text-center">
        <div className="md:hidden">
          <div className="flex flex-col pt-10 space-y-24 md:space-y-12">
            {Object.keys(featureMap).map((section, i) => {
              const feature = featureMap[section];
              const { title, description, cta, url } = feature;
              return (
                <div className="flex flex-col space-y-3" key={i}>
                  <h3 className="text-2xl font-medium text-purpleish-400">{title}</h3>
                  <div className="text-neutral-300">{description}</div>
                  <div className="py-6">
                    <Button as="a" variant="solid" color="primary" href={url}>
                      {cta}
                    </Button>
                  </div>
                  <div className="relative object-cover w-full h-auto aspect-auto">
                    <FeatureShowcase feature={feature} className="block !relative" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-8">
          <div className="hidden w-full md:flex flex-row min-h-[600px]">
            <div className="flex flex-col font-mono text-left border-r divide-y divide-purpleish-100/20 border-purpleish-100/20 whitespace-nowrap">
              {Object.keys(featureMap).map((section, i) => {
                return (
                  <FeatureBox
                    key={i}
                    selected={selected}
                    setSelected={setSelected}
                    section={section}
                  >
                    {featureMap[section].title}
                  </FeatureBox>
                );
              })}
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row px-8">
                <div className="flex flex-col w-full space-y-2 text-left">
                  <div className="text-2xl font-semibold  whitespace-nowrap">
                    {selFeature.title}
                  </div>
                  <div className="text-neutral-400">{selFeature.description}</div>
                </div>
                <div className="flex items-start">
                  <Button
                    as="a"
                    href={selFeature.url}
                    color="primary"
                    auto
                    className="tracking-widest"
                    size="sm"
                    variant="solid"
                  >
                    {selFeature.cta}
                  </Button>
                </div>
              </div>
              <div className="relative w-full h-full">
                <FeatureShowcase
                  feature={selFeature}
                  className={`object-contain ${selFeature.imgClasses}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
