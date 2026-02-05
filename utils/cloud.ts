import axios, { AxiosError, AxiosInstance } from 'axios';
import type { ProxyErrorResult, HeadersObject } from '@/types/api';

export const cloudApi: AxiosInstance = axios.create({
  baseURL: process.env.CLOUD_API_BASE_URL,
  headers: {
    'auth-provider': 'auth0',
  },
});

export const proxyError = (error: AxiosError): ProxyErrorResult => {
  let status = 500;
  let data: Record<string, unknown> = {};

  if (error?.response?.status) {
    status = error.response.status;
  }

  if (error?.response?.data) {
    data = error.response.data as Record<string, unknown>;
  }

  return {
    status,
    data,
  };
};

export const getHeaders = (headers: Headers): HeadersObject => {
  return Object.fromEntries(headers) || {};
};
