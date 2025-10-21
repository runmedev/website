import Link from "next/link";

export const InstallButton = ({ name, href }) => {
  return (
    <Link href={href} passHref style={{ textDecoration: "none" }}>
      <button type="button" className="rounded border hover:brightness-75">
        <div>{name}</div>
      </button>
    </Link>
  );
};
