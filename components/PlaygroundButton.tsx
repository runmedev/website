"use client";
import { Button } from "@nextui-org/react";

const PlaygroundButton: React.FC = () => {
  return (
    <div className="w-auto">
      <Button
        as="a"
        href="/playground"
        color="primary"
        className="tracking-widest w-full md:w-auto"
        variant="solid"
      >
        Try Runme now (sandbox)
      </Button>
    </div>
  );
};

export default PlaygroundButton;
