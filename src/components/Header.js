import React from "react";
import logo from "../assets/img/logo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
  const userAuth = false;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <NavLink to="/">
            <Button
              startIcon={
                <img
                  src={logo}
                  alt="logo"
                  style={{ maxHeight: "50px", maxWidth: "50px" }}
                />
              }
            ></Button>
          </NavLink>
          <Typography variant="h6" component="h1">
            Osadchii Andrei's portfolio
          </Typography>
          <Navbar />
          {userAuth ? (
            <Button variant="contained" color="secondary">
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
