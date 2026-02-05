"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";

const Tags: React.FC = () => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
    </>
  );
};

export default Tags;
