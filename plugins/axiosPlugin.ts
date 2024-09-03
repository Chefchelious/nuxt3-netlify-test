import axios, { type AxiosInstance, type AxiosResponse } from 'axios';

export type ApiInstance = AxiosInstance;

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();

  // доработать плагин, чтобы в каждой функции его не вызывать

  const $api = axios.create({
    withCredentials: true,
    baseURL: config.public.apiUrl, // Use the environment variable here
  });

  $api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('token') : ''}`;
    return config;
  });

  $api.interceptors.response.use((response: AxiosResponse) => {
    if (response.status === 401) {
      window.location.href = '/login';
    }
    return response;
  }, (error) => {
    const response = error.response;
    if (response && response.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  });

  nuxtApp.provide('api', $api);
});
