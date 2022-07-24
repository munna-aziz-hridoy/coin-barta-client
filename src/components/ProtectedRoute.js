import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ServerUrlContext } from "..";
import useGetUser from "../hooks/useGetUser";

const ProtectedRoute = ({ children }) => {
  const serverUrl = useContext(ServerUrlContext);
  const location = useLocation();
  const [user, loading] = useGetUser(serverUrl);

  console.log(user);

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (!user?.admin) {
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
