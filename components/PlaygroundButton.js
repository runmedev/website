"use client";
import { track } from "@vercel/analytics";
import { Button } from "@nextui-org/react";

const PlaygroundButton = () => {
  return (
    <div className="w-auto">
      <Button
        as="a"
        href="/playground"
        color="primary"
        auto
        className="tracking-widest w-full md:w-auto"
        variant="solid"
        onPress={() => {
          track("clicked playground button");
        }}
      >
        Try Runme now (sandbox)
      </Button>
    </div>
  );
};

export default PlaygroundButton;
