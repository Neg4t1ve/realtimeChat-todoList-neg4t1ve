import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { removeUser } from "../../app/slice/userSlice";

function AuthButtons() {
  const { isAuth } = useAuth();
  const dispatch = useDispatch();
  return (
    <>
      {isAuth ? (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(removeUser())}
        >
          Log Out
        </Button>
      ) : (
        <>
          <NavLink to="/login">
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginRight: 2 }}
            >
              Sign In
            </Button>
          </NavLink>
          <NavLink to="/register">
            <Button variant="contained" color="secondary">
              Sign Up
            </Button>
          </NavLink>
        </>
      )}
    </>
  );
}

export default AuthButtons;
