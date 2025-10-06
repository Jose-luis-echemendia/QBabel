import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": undefined },
});

// Interceptor para agregar token automáticamente
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwtTokenAccess");
  if (token) {
    config.headers.Authorization = `JWT ${token}`;
  }
  return config;
});

export default axiosInstance;
