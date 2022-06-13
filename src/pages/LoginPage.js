import React from "react";
import { useLocation } from "react-router-dom";
import Login from "../components/auth/Login";

function LoginPage() {
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";

  return <Login />;
}

export default LoginPage;
