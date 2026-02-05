import axiosRetry from "axios-retry";
import { useApiClient } from "@/hooks/useApiClient";
import { useCallback, useEffect, useState } from "react";
import type { AxiosResponse, AxiosError } from "axios";
import type { UseDispatchReturn } from "@/types/hooks";

export const useDispatch = (): UseDispatchReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const { client } = useApiClient();

  useEffect(() => {
    axiosRetry(client, {
      retries: 5,
      retryDelay: () => 5000,
      retryCondition: (error: AxiosError) =>
        axiosRetry.isNetworkOrIdempotentRequestError(error) ||
        (error.response?.status !== undefined && error.response.status >= 400 && error.response.status <= 500),
    });
  }, [client]);

  const dispatch = useCallback(
    async (folder: string, captchaCode: string): Promise<AxiosResponse> => {
      setIsLoading(true);
      try {
        const data = await client.post("/playgrounds-dispatcher", {
          folder,
          captchaCode,
        });
        setIsLoading(false);
        return data;
      } catch (error) {
        setIsLoading(false);
        throw error;
      }
    },
    [client]
  );

  return {
    dispatch,
    isLoading,
  };
};
