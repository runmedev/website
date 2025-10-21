import "@/styles/links.css";

export default function TopicLayout({ children }) {
  return (
    <div className="max-w-screen-lg px-4 py-20 mx-auto content lg:px-0">
      <div>{children}</div>
    </div>
  );
}
