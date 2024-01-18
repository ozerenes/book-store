import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
});

api.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      key: apiKey,
    };

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default api;
