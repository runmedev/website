"use client";
import Link from "next/link";

import { QuickShell } from "@/components/QuickShell";
import UAParser from "ua-parser-js";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@nextui-org/react";

export default function QuickStart() {
  const parser = new UAParser();
  const os = parser.getOS().name;
  const [cmdline, setCmdline] = useState("brew install runme && runme open");

  useEffect(() => {
    if (os !== "Mac OS") {
      setCmdline("npx runme open");
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-evenly space-y-4">
      <div className="flex flex-col items-center space-y-2">
        {/* <div className="text-purpleish-200 font-bold text-xl">Try now</div> */}
        <QuickShell className="text-white font-semibold text-lg" command={cmdline} />
        <div className="text-center">
          <span>or, </span>
          <Link
            href="https://marketplace.visualstudio.com/items?itemName=stateful.runme"
            className=" cursor-pointer hover:underline hover:brightness-150"
          >
            Install the VS Code extension
          </Link>
        </div>
      </div>
      <div>
        <Button
          as="a"
          href="https://docs.runme.dev/installation/runmecli"
          color="primary"
          auto
          className="tracking-widest w-auto"
          variant="solid"
        >
          Install the CLI
        </Button>
      </div>
    </div>
  );
}
