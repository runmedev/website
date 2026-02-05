import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header />
      <main className="flex flex-grow flex-col overflow-auto">{children}</main>
      <Footer />
    </div>
  );
}
