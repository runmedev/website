import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import CareerPitch from "@/components/CareerPitch";
import CareerDisclaimer from "@/components/CareerDisclaimer";

import "@/styles/markdown.css";

interface Job {
  body: string;
  slug?: string;
}

interface JobDetailsProps {
  job: Job;
}

export default async function JobDetails({ job }: JobDetailsProps): Promise<React.ReactElement> {
  return (
    <div className="w-full markdown-body md:w-2/3">
      <div className="pb-4 font-semibold">
        <Link href="/jobs">Back to jobs</Link>
      </div>
      <MDXRemote source={job.body} components={{ CareerPitch, CareerDisclaimer }} />

      <div className="w-1/2 py-8 mx-auto">
        <Link href={`/jobs/apply/${job?.slug}`} style={{ textDecoration: "none" }}>
          <button
            type="button"
            className="px-4 py-2 font-bold text-white rounded-md bg-purpleish-700 hover:bg-purpleish-500 whitespace-nowrap max-w-min"
          >
            <div>Apply for this Job</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
