import "@/styles/links.css";
import type { ReactNode } from "react";

export default function TopicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-screen-lg px-4 py-20 mx-auto content lg:px-0">
      <div>{children}</div>
    </div>
  );
}
