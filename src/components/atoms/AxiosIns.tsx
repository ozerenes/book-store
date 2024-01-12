import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;

// Load environment variables from .env file

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
});

api.interceptors.request.use(
  (config) => {
    // Use the API key from the environment variables
    config.params = {
      ...config.params,
      key: apiKey,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
