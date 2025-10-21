"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
// import { Auth0Provider } from "@auth0/auth0-react";

export const Providers = ({ children }) => {
  const router = useRouter();

  return (
    // <Auth0Provider
    //   domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    //   clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
    //   cacheLocation="localstorage"
    //   authorizationParams={{
    //     redirect_uri: typeof window !== "undefined" && `${window.location.origin}/playground`,
    //     audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
    //   }}
    // >
    <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    // </Auth0Provider>
  );
};
