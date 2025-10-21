import "@/styles/links.css";

export default function SpotlightLayout({ children }) {
  return (
    <div className="text-white content lg:px-0 bg-gradient-to-r from-purpledk to-indigo-950">
      <div className="max-w-screen-lg px-4 py-20 mx-auto">{children}</div>
    </div>
  );
}
