import { Button } from "@nextui-org/react";

export default function ActionButtons(): React.ReactElement {
  return (
    <div className="flex md:flex-row justify-center gap-x-2 flex-col gap-y-2 py-6">
      <Button
        as="a"
        href="https://docs.runme.dev/getting-started/"
        color="primary"
        className="tracking-widest w-auto"
        variant="solid"
      >
        Read the docs
      </Button>
      <Button
        as="a"
        href="https://docs.runme.dev/installation/runmecli"
        color="primary"
        className="tracking-widest w-auto bg-purpleish-900 text-gray-300 border-purpleish-900"
        variant="faded"
      >
        Install the CLI
      </Button>
      <Button
        as="a"
        href="https://marketplace.visualstudio.com/items?itemName=stateful.runme"
        color="primary"
        className="tracking-widest w-auto bg-purpleish-900 text-gray-300 border-purpleish-900"
        variant="faded"
      >
        Install for VS Code
      </Button>
    </div>
  );
}
