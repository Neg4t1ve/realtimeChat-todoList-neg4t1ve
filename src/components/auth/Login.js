import React from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../../app/slice/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const dispatch = useDispatch();
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
  };

  return <Form title="Sign in" handleClick={handleLogin} />;
}

export default Login;
