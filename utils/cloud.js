import axios from 'axios';

export const cloudApi = axios.create({
  baseURL: process.env.CLOUD_API_BASE_URL,
  headers: {
    'auth-provider': 'auth0',
  },
});

export const proxyError = error => {
  let status = 500;
  let data = {};

  if (error?.response?.status) {
    status = error.response.status;
  }

  if (error?.response?.data) {
    data = error.response.data;
  }

  return {
    status,
    data,
  };
};

export const getHeaders = headers => {
  return Object.fromEntries(headers) || {};
};
