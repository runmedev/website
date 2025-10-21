import Link from "next/link";
import { QuickShell } from "@/components/QuickShell";

export function InstallStuff() {
  return (
    <div className="flex flex-col items-center justify-center py-2 space-y-1 tracking-wider md:space-x-2 md:flex-row md:space-y-0">
      <QuickShell command={"brew install runme"} />
      <span className="hidden md:block"> | </span>
      <QuickShell command={"npx runme"} />
      <span className="hidden md:block"> | </span>
      <Link
        href="https://marketplace.visualstudio.com/items?itemName=stateful.runme"
        className=" cursor-pointer hover:underline hover:brightness-150"
      >
        Runme for VS Code
      </Link>
    </div>
  );
}
