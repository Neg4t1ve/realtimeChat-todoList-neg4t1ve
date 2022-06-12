import React from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../../app/slice/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const dispatch = useDispatch();

  const handleRegister = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
      })
      .catch(console.error);
  };

  return <Form title="register" handleClick={handleRegister} />;
}

export default Register;
