"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";
import useKoalaScript from "hooks/useKoalaScript";

const Tags = () => {
  useKoalaScript();

  return (
    <>
      <GoogleAnalytics trackPageViews />
      {/* <noscript>
        <img
          referrerPolicy="no-referrer-when-downgrade"
          src="https://static.scarf.sh/a.png?x-pxid=5e3dee0d-e5d5-433d-977b-895efa51faa6"
          style={{ display: "none" }}
        />
      </noscript> */}
    </>
  );
};

export default Tags;
