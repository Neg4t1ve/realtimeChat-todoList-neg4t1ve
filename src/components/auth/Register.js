import React from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../../app/slice/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

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
      .then(() => {
        if (location.state?.from) {
          navigate(location.state.from.pathname, { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      })
      .catch(console.error);
  };

  return <Form title="register" handleClick={handleRegister} />;
}

export default Register;
