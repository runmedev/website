import { useEffect } from "react";
import type { KoalaArray } from "@/types/hooks";

const useKoalaScript = (): void => {
  useEffect(() => {
    if (window.ko) return;

    const koArray: KoalaArray = [];
    window.ko = koArray;

    const methods = [
      "identify",
      "track",
      "removeListeners",
      "open",
      "on",
      "off",
      "qualify",
      "ready",
    ] as const;

    methods.forEach((method) => {
      koArray[method] = function (...args: unknown[]) {
        koArray.push([method, ...args]);
      };
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.getkoala.com/v1/pk_69530cc97cda1184e3abab9c6b1e035b1f22/sdk.js";
    document.body.appendChild(script);
  }, []);
};

export default useKoalaScript;
