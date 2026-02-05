import { useMemo } from "react";
import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError } from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import type { UseApiClientReturn } from "@/types/hooks";

export const useApiClient = (): UseApiClientReturn => {
  const { getAccessTokenSilently } = useAuth0();

  const client: AxiosInstance = useMemo(
    () =>
      axios.create({
        baseURL: "/api",
      }),
    []
  );

  client.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      // Decommission playgrounds
      // const authToken = await getAccessTokenSilently();
      // if (authToken) {
      //   config.headers.Authorization = `Bearer ${authToken}`;
      // }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  return {
    client,
  };
};
