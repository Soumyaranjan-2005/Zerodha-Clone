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
    // Check localStorage first
    let token = window.localStorage.getItem("authToken");

    // If no token in localStorage, check URL params
    if (!token) {
      const params = new URLSearchParams(window.location.search);
      token = params.get("token");
      
      if (token) {
        // Save token to localStorage and clean URL
        window.localStorage.setItem("authToken", token);
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }

    // If still no token, redirect to login
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
