import type { Metadata } from 'next';
import examplesArr from "../examples.json";
import Link from "next/link";
import Image from "next/image";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ExampleEntry {
  title: string;
  slug: string;
  description: string;
  img?: string;
  webm?: string;
  mp4?: string;
  runme?: string;
  repo?: string;
  docs?: string;
  tags: string[];
}

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const entries = (examplesArr as ExampleEntry[]).filter((example) => example.slug === slug);
  const entry = entries[0];

  if (entry) {
    return {
      title: entry.title,
      description: entry.description,
      keywords: entry.tags,
    };
  }

  return {};
}

interface ExampleContentProps {
  description: string;
  img?: string;
  webm?: string;
  mp4?: string;
  slug: string;
  runme?: string;
  repo?: string;
  docs?: string;
  tags: string[];
  title: string;
}

const ExampleContent = (entry: ExampleContentProps) => {
  const { description, img, webm, mp4, slug, runme, repo, docs, tags, title } = entry;
  const video = webm || mp4;

  return (
    <div className="flex flex-col px-4">
      <div className="text-5xl font-medium text-center">{title}</div>
      <div className="pt-6 text-sm font-medium md:text-center text-purpleish-800">
        [{tags.sort().join(", ")}]
      </div>
      <div className="py-6 text-lg">{description}</div>
      <div className="flex flex-col space-y-1 md:space-x-4 md:items-center md:justify-center md:space-y-0 md:flex-row">
        {docs && (
          <div>
            <Link href={docs}>Documentation</Link>
          </div>
        )}
        {repo && (
          <div>
            <Link href={repo}>Repository</Link>
          </div>
        )}
        {runme && (
          <a href={runme}>
            <div className="relative h-6 w-[120px]">
              <Image
                fill
                src="https://badgen.net/badge/Open%20with/Runme/5B3ADF?icon=https://runme.dev/runme_logo.svg"
                alt=""
              />
            </div>
          </a>
        )}
      </div>

      {img && (
        <div className="relative w-full h-[200px] md:h-[600px] p-4 mt-6">
          <Image src={img} fill className="object-contain aspect-auto" alt={slug} />
        </div>
      )}
      {video && (
        <div className="relative w-full p-4 px-16 overflow-auto">
          <video autoPlay controls loop muted playsInline className="object-contain aspect-auto">
            <source src={webm} type="video/webm" />
            <source src={mp4} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};

export default async function Page({ params }: PageParams) {
  const { slug } = await params;
  const entries = (examplesArr as ExampleEntry[]).filter((example) => example.slug === slug);
  const entry = entries[0];

  if (!entry) {
    return (
      <div className="flex items-center justify-center w-full h-full text-2xl">
        Not Found. {"\u00A0"}
        <Link href="/examples">Check out our examples page.</Link>
      </div>
    );
  }

  return (
    <>
      <ExampleContent {...entry} />
      <Link href="/examples">
        <div className="flex flex-row items-center justify-center pt-20 space-x-2 text-3xl">
          <div>More examples</div> <FontAwesomeIcon icon={faArrowRight} size="xs" />
        </div>
      </Link>
    </>
  );
}
