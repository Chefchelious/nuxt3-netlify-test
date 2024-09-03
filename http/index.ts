import axios, { type AxiosResponse } from 'axios';

export const API_URL = 'http://localhost:3000/api';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use((response: AxiosResponse) => {
  if(response.status === 401) {

    window.location.href = '/login';
  }
  return response;
}, (error) => {
  const response = error.response;
  if(response && response.status === 401) {
    window.location.href = '/login';
  }
  return Promise.reject(error);
});

export default $api;
