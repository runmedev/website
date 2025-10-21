import { useMemo } from "react";

import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const useApiClient = () => {
  const { getAccessTokenSilently } = useAuth0();

  const client = useMemo(
    () =>
      axios.create({
        baseURL: "/api",
      }),
    []
  );

  client.interceptors.request.use(
    async (config) => {
      // Decommission playgrounds
      // const authToken = await getAccessTokenSilently();
      // if (authToken) {
      //   config.headers.Authorization = `Bearer ${authToken}`;
      // }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return {
    client,
  };
};
