import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const accessToken = localStorage.getItem("accessToken");
  // console.log("at:", accessToken);

  if (accessToken) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
