"use client";

import clsx from "clsx";
import copy from "copy-to-clipboard";
import { useState } from "react";

interface QuickShellProps {
  command?: string;
  commands?: string[];
  className?: string;
}

export function QuickShell({ command, commands: initialCommands, className = "" }: QuickShellProps): React.ReactElement {
  const [copied, setCopied] = useState<boolean>(false);

  let commands = initialCommands;
  if (!commands && command) {
    commands = [command];
  }

  const copyCmd = (): void => {
    if (commands) {
      copy(commands.join(" \n "));
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    }
  };

  return (
    <>
      {copied ? (
        <span className="text-cyan-400">Copied to clipboard</span>
      ) : (
        <span
          className={clsx(`cursor-pointer hover:underline hover:brightness-150 ${className}`)}
          onClick={() => {
            copyCmd();
          }}
        >
          {commands?.map((cmd, i) => {
            return <div key={i}>$ {cmd}</div>;
          })}
        </span>
      )}
    </>
  );
}
