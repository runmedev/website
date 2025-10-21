"use client";

import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const LoadingPlayground = ({ className, onCaptchaVerified }) => {
  const [message, setMessage] = useState("Complete challenge to load Playground.");
  const captchaRef = React.createRef();

  const onCaptchaChange = (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }

    setMessage("Hang on, loading Playground...");

    // Call the callback function with the captcha code
    if (onCaptchaVerified) {
      onCaptchaVerified(captchaCode);
    }
  };

  const siteKey = process.env.RECAPTCHA_SITE_KEY || process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="mb-4">{message}</div>
        <div className="w-full flex justify-center">
          <ReCAPTCHA ref={captchaRef} size="normal" sitekey={siteKey} onChange={onCaptchaChange} />
        </div>
      </div>
    </div>
  );
};

export default LoadingPlayground;
