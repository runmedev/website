import { useApiClient } from 'hooks/useApiClient';
import { useCallback, useState } from 'react';

export const useHealthCheck = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { client } = useApiClient();

  const healthCheck = useCallback(
    async name => {
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
