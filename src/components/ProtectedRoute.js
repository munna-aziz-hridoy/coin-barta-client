import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ServerUrlContext } from "..";

const ProtectedRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const serverUrl = useContext(ServerUrlContext);
  const location = useLocation();
  useEffect(() => {
    fetch(`${serverUrl}/api/v1/admin/is-admin`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.admin) {
          setIsAdmin(true);
          setLoading(false);
          return;
        }
        setLoading(false);
        setIsAdmin(false);
        return;
      });
  }, [serverUrl]);

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (!isAdmin) {
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
