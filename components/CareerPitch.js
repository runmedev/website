import Link from "next/link";

const SimpleLink = ({ name, href }) => (
  <Link href={href} passHref style={{ textDecoration: "none" }}>
    {name}
  </Link>
);

const CareerPitch = () => {
  return (
    <p>
      We&apos;re a tech startup with a top-notch distributed team and awesome supportive investors.
      At the heart of our product is <SimpleLink name="Runme" href="https://runme.dev" /> an
      open-source project that turns markdown files into flexible, interactive, testable runbooks
      that can be easily incorporated into CI/CD pipelines. Our mission is to build a community and
      redefine the future of the documentation toolchain for cloud environments.
    </p>
  );
};

export default CareerPitch;
