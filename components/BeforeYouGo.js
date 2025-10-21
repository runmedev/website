import Link from "next/link";

const SimpleLink = ({ name, href }) => (
  <Link href={href} passHref>
    {name}
  </Link>
);

const BeforeYouGo = () => {
  return (
    <>
      To stay updated with our latest content, please{" "}
      <SimpleLink name="subscribe to our email updates" href="/list" /> or follow us on X at{" "}
      <SimpleLink name="@runmedev" href="https://twitter.com/runmedev" />.{" "}
      <p className="my-2">
        Check out{" "}
        <SimpleLink
          name="Runme"
          href="https://marketplace.visualstudio.com/items?itemName=stateful.runme"
        />
        , a VS Code Extension that allows you to create DevOps Notebooks with Markdown. It combines
        your documentation with everything great about scripting, pipelines, GitOps, and the Cloud.
      </p>
      <p className="my-2">Bye for now! 👋</p>
    </>
  );
};

export default BeforeYouGo;
