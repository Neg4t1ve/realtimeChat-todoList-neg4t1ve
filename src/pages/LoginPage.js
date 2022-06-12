import React from "react";
import Login from "../components/auth/Login";
import { useLocation, useNavigate } from "react-router-dom";

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const fromPage = location.state?.from?.pathname || "/";

  return <Login />;
}

export default LoginPage;
