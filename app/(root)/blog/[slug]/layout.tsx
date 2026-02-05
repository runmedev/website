import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background-light text-text-light">
      <main className="flex-1">{children}</main>
    </div>
  );
}
