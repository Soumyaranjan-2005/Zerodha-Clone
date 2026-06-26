import React, { useEffect, useState } from "react";
import { FRONTEND_BASE_URL, FRONTEND_LOGIN_PATH } from "../config";

const createLoginUrl = () => {
  const baseUrl = FRONTEND_BASE_URL.replace(/\/+$/g, "");
  const loginPath = FRONTEND_LOGIN_PATH.startsWith("/")
    ? FRONTEND_LOGIN_PATH
    : `/${FRONTEND_LOGIN_PATH}`;

  return `${baseUrl}${loginPath}`;
};

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
    if (!token) {
      window.location.href = createLoginUrl();
      return;
    }
    setIsAuthenticated(true);
  }, []);

  if (isAuthenticated === null) {
    return <div></div>;
  }

  return children;
};

export default ProtectedRoute;
