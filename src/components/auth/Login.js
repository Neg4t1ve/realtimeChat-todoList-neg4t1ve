import React from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../../app/slice/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) =>
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
      )
      .catch(console.error);
    navigate("/");
  };

  return <Form title="Sign in" handleClick={handleLogin} />;
}

export default Login;
