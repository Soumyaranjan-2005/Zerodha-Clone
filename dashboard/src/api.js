import axios from "axios";
import { API_BASE_URL, FRONTEND_BASE_URL, FRONTEND_LOGIN_PATH } from "./config";

const getLoginUrl = () => {
  const baseUrl = FRONTEND_BASE_URL.replace(/\/+$|\s+/g, "");
  const loginPath = FRONTEND_LOGIN_PATH.startsWith("/")
    ? FRONTEND_LOGIN_PATH
    : `/${FRONTEND_LOGIN_PATH}`;
  return `${baseUrl}${loginPath}`;
};

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("authToken");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.localStorage.removeItem("authToken");
      window.location.href = getLoginUrl();
    }
    return Promise.reject(error);
  }
);

export default api;
