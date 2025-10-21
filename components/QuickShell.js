"use client";

import clsx from "clsx";
import copy from "copy-to-clipboard";
import { useState } from "react";

export function QuickShell({ command, commands, className = "" }) {
  const [copied, setCopied] = useState(false);

  if (!commands && command) {
    commands = [command];
  }

  const copyCmd = () => {
    copy(commands.join(" \n "));
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <>
      {copied ? (
        <span className="text-cyan-400">Copied to clipboard 👍</span>
      ) : (
        <span
          className={clsx(`cursor-pointer hover:underline hover:brightness-150 ${className}`)}
          onClick={() => {
            copyCmd();
          }}
        >
          {commands.map((cmd, i) => {
            return <div key={i}>$ {cmd}</div>;
          })}
        </span>
      )}
    </>
  );
}
