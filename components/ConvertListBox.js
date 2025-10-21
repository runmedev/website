"use client";

import React, { useEffect, useRef } from "react";

const ConvertListBox = () => {
  const scriptContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://runme.ck.page/cf0b652a33/index.js";
    script.dataset.uid = "cf0b652a33";

    const container = scriptContainerRef.current;
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.removeChild(script);
      }
    };
  }, []);

  return <div className="w-full px-4 md:px-0 py-12 md:py-32" ref={scriptContainerRef}></div>;
};

export default ConvertListBox;
