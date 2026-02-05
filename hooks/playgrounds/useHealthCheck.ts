import { useApiClient } from '@/hooks/useApiClient';
import { useCallback, useState } from 'react';
import type { AxiosResponse } from 'axios';
import type { UseHealthCheckReturn } from '@/types/hooks';

export const useHealthCheck = (): UseHealthCheckReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const { client } = useApiClient();

  const healthCheck = useCallback(
    async (name: string): Promise<AxiosResponse> => {
      setIsLoading(true);
      try {
        const data = await client.get('/playgrounds-health', {
          params: {
            name,
          },
        });
        return data;
      } catch (error) {
        setIsLoading(false);
        throw error;
      }
    },
    [client]
  );
  return {
    healthCheck,
    isLoading,
  };
};
