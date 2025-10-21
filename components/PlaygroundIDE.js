"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useHealthCheck } from "hooks/playgrounds/useHealthCheck";
import { useDispatch } from "hooks/playgrounds/useDispatch";
import LoadingPlayground from "./LoadingPlayground";

const PlaygroundIDE = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [captchaCode, setCaptchaCode] = useState(null);
  const [playground, setPlayground] = useState({
    url: "",
    name: "",
  });
  const router = useRouter();
  const { healthCheck } = useHealthCheck();
  const { dispatch, isLoading } = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const run = async () => {
      try {
        const folder = "/workspace/getting-started";
        const { data } = await dispatch(folder, captchaCode);
        const url = `${data?.data?.runmeUrl}?folder=${folder}`;
        const name = data?.data?.name;

        setPlayground({ url, name });
        setErrorMessage(null);
      } catch (error) {
        const data = error?.response?.data?.error;
        setErrorMessage(
          data || "There was an error while creating the playground. Try again later."
        );
      }
    };

    if (!playground.url && captchaCode) {
      run();
    }
  }, [playground, captchaCode, dispatch]);

  useEffect(() => {
    if (!playground.name || !playground.url) {
      return;
    }

    const interval = setInterval(async () => {
      try {
        await healthCheck(playground.name);
      } catch (error) {
        // Reset the URL and iframe loaded state if health check fails
        setPlayground({ url: "", name: "" });
        setIframeLoaded(false);
        clearInterval(interval);
        router.push("/");
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [playground, healthCheck]);

  const isLoaded = !isLoading && iframeLoaded;

  return (
    <div className="h-full flex flex-col gap-2 w-full justify-center items-center">
      {errorMessage ? (
        <div className="flex-1 flex items-center">{errorMessage}</div>
      ) : !isLoaded ? (
        <LoadingPlayground
          className="flex-1 flex items-center"
          onCaptchaVerified={(code) => setCaptchaCode(code)}
        />
      ) : null}
      {playground.url && (
        <iframe
          className={clsx("h-full w-full", {
            hidden: !iframeLoaded,
          })}
          onLoad={() => setIframeLoaded(true)}
          allow="clipboard-read; clipboard-write"
          key={playground.url}
          title="Playground"
          src={playground.url}
        />
      )}
    </div>
  );
};

export default PlaygroundIDE;
