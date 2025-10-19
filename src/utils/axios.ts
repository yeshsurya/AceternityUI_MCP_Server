import axios from 'axios';
import { logDebug } from './logger.js';

const axiosInstance = axios.create({
  timeout: 10000,
  headers: {
    'User-Agent': 'Aceternity-UI-MCP-Server/1.0.0'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    logDebug(`HTTP Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    logDebug(`HTTP Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
