"use client";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface CommandProps {
  title: string;
  label: string;
  instructions: string;
}

const Command: React.FC<CommandProps> = ({ title, label, instructions }) => {
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <div>
      <div className="mb-2">
        <div className="text-base font-medium">{title}</div>
        <div className="text-base font-normal">{label}</div>
      </div>
      <CopyToClipboard onCopy={() => setCopied(true)} text={instructions}>
        <div className="flex items-center w-full p-3 bg-gray-100 border rounded">
          <div className="flex flex-row items-center space-x-2 cursor-pointer text-covey-600 hover:text-covey-700">
            {copied ? "OK" : "Copy"}{" "}
          </div>
          <code className="overflow-x-auto whitespace-nowrap">$ {instructions}</code>
        </div>
      </CopyToClipboard>
      {copied && <div className="text-xs text-green-400">Code copied!</div>}
    </div>
  );
};

export default Command;
