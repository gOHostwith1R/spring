import axios from 'axios';
import { setLocalItem } from '../helpers';
import { apiAuth } from './apiAuth';

export const BASE_URL = 'http://localhost:5000/api/';

const api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`;
  return config;
});

api.interceptors.response.use((config) => config, (async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && error.config && !error.config.isRetry) {
    originalRequest.isRetry = true;
    try {
      const res = await apiAuth.apiAuthRefreshToken();
      setLocalItem('access', res.data.accessToken);
      setLocalItem('refresh', res.data.refreshToken);
      return api.request(originalRequest);
    } catch (e) {
      localStorage.clear();
    }
  }
  throw error;
}));
export default api;
