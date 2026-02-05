import type { AxiosInstance, AxiosResponse } from 'axios';

export interface UseApiClientReturn {
  client: AxiosInstance;
}

export interface UseDispatchReturn {
  dispatch: (folder: string, captchaCode: string) => Promise<AxiosResponse>;
  isLoading: boolean;
}

export interface UseHealthCheckReturn {
  healthCheck: (name: string) => Promise<AxiosResponse>;
  isLoading: boolean;
}

export interface KoalaArray extends Array<unknown> {
  identify?: (...args: unknown[]) => void;
  track?: (...args: unknown[]) => void;
  removeListeners?: (...args: unknown[]) => void;
  open?: (...args: unknown[]) => void;
  on?: (...args: unknown[]) => void;
  off?: (...args: unknown[]) => void;
  qualify?: (...args: unknown[]) => void;
  ready?: (...args: unknown[]) => void;
}

declare global {
  interface Window {
    ko?: KoalaArray;
  }
}
