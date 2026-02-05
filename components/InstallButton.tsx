import Link from "next/link";

interface InstallButtonProps {
  name: string;
  href: string;
}

export const InstallButton: React.FC<InstallButtonProps> = ({ name, href }) => {
  return (
    <Link href={href} passHref style={{ textDecoration: "none" }}>
      <button type="button" className="rounded border hover:brightness-75">
        <div>{name}</div>
      </button>
    </Link>
  );
};
