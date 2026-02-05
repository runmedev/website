import "@/styles/links.css";
import type { ReactNode } from "react";

export default function SpotlightLayout({ children }: { children: ReactNode }) {
  return (
    <div className="text-white content lg:px-0 bg-gradient-to-r from-purpledk to-indigo-950">
      <div className="max-w-screen-lg px-4 py-20 mx-auto">{children}</div>
    </div>
  );
}
