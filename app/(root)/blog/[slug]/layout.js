export default function Layout({ children }) {
  return (
    <div className="bg-background-light text-text-light">
      <main className="flex-1">{children}</main>
    </div>
  );
}
