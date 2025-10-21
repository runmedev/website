import Link from "next/link";

const SimpleLink = ({ name, href }) => (
  <Link href={href} passHref style={{ textDecoration: "none" }}>
    {name}
  </Link>
);

const CareerDisclaimer = () => {
  return (
    <>
      <p>
        We are committed to building a company culture that fosters happy and productive people,
        which relies heavily on respect, empathy, transparency, direct communication and ownership.
        You can read more about our{" "}
        <SimpleLink name="company values" href="https://stateful.com/company#values" /> on our
        company page.
      </p>
      <p>
        Stateful is an Equal Opportunity Employer. We’re committed to building a diverse and
        inclusive team. We do not discriminate against qualified employees or applicants because of
        race, color, religion, gender identity, sex, sexual preference, sexual identity, pregnancy,
        national origin, ancestry, citizenship, age, marital status, physical disability, mental
        disability, medical condition, military status, or any other characteristic protected by
        local law or ordinance.
      </p>
    </>
  );
};

export default CareerDisclaimer;
