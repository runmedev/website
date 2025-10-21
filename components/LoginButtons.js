"use client";

import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@nextui-org/react";
import React from "react";

const LoginButtons = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <Button
        color="primary"
        className="w-full"
        variant="ghost"
        onPress={() =>
          loginWithRedirect({
            authorizationParams: {
              connection: "github",
            },
          })
        }
      >
        Sign in with GitHub
      </Button>
      <Button
        color="primary"
        className="w-full"
        variant="ghost"
        onPress={() =>
          loginWithRedirect({
            authorizationParams: {
              connection: "google-oauth2",
            },
          })
        }
      >
        Sign in with Google
      </Button>
      <Button
        variant="ghost"
        color="primary"
        className="w-full"
        onPress={() =>
          loginWithRedirect({
            authorizationParams: {
              connection: "windowslive",
            },
          })
        }
      >
        Sign in with Microsoft
      </Button>
      <Button
        variant="ghost"
        color="primary"
        className="w-full"
        onPress={() =>
          loginWithRedirect({
            authorizationParams: {
              connection: "gitlab",
            },
          })
        }
      >
        Sign in with GitLab
      </Button>
    </div>
  );
};

export default LoginButtons;
