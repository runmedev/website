import "@/styles/links.css";
import examplesArr from "./examples.json";

export const metadata = {
  title: "Examples",
  description: "An index of all the great ways Runme can be used to enhance development workflows.",
  keywords: [...new Set(examplesArr.map((entry) => entry.tags).flat())],
};

export default function ShowcaseLayout({ children }) {
  return (
    <div className="max-w-screen-lg min-h-screen px-4 py-20 mx-auto content lg:px-0">
      <div>{children}</div>
    </div>
  );
}
