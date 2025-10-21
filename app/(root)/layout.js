import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AppLayout({ children }) {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header />
      <main className="flex flex-grow flex-col overflow-auto">{children}</main>
      <Footer />
    </div>
  );
}
