"use client";

import React, { useEffect, useRef } from "react";

const ConvertFooterBox = () => {
  const scriptContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://runme.ck.page/f1b34d9bc0/index.js";
    script.dataset.uid = "f1b34d9bc0";

    const container = scriptContainerRef.current;
    if (container) {
      container?.appendChild(script);
    }

    return () => {
      if (container) {
        container?.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-row items-center mx-auto">
      <div className="-mt-8" ref={scriptContainerRef}></div>
    </div>
  );
};

export default ConvertFooterBox;
