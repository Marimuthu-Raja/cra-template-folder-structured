import React from "react";
import { Navigate } from "react-router-dom";
import secureLocalStorage from "../utils/secureLocalStorage";

function ProtectedRoute({ children }) {
  const isAuthenticated = secureLocalStorage.getItem('access_token')?true:false
  return  isAuthenticated ? children : <Navigate to="/" />
}

export default ProtectedRoute