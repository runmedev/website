import "@/styles/links.css";
import type { ReactNode } from "react";

export default function SreLayout({ children }: { children: ReactNode }) {
  return <div className="h-full text-white bg-purpledk">{children}</div>;
}
