import { useEffect } from "react";

const useKoalaScript = () => {
  useEffect(() => {
    if (window.ko) return;

    window.ko = [];
    const methods = [
      "identify",
      "track",
      "removeListeners",
      "open",
      "on",
      "off",
      "qualify",
      "ready",
    ];
    methods.forEach((method) => {
      window.ko[method] = function (...args) {
        window.ko.push([method, ...args]);
      };
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.getkoala.com/v1/pk_69530cc97cda1184e3abab9c6b1e035b1f22/sdk.js";
    document.body.appendChild(script);
  }, []);
};

export default useKoalaScript;
