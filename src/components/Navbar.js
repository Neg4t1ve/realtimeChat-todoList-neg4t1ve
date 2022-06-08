import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ boxShadow: 0 }}>
        <Toolbar>
          <NavLink to="/">
            <Link color="error" underline="hover" sx={{ mr: "2rem" }}>
              Home
            </Link>
          </NavLink>
          <NavLink to="todolist">
            <Link color="error" underline="hover" sx={{ mr: "2rem" }}>
              ToDo
            </Link>
          </NavLink>
          <NavLink to="chess">
            <Link color="error" underline="hover" sx={{ mr: "2rem" }}>
              Chess
            </Link>
          </NavLink>
          <NavLink to="chat">
            <Link color="error" underline="hover" sx={{ mr: "2rem" }}>
              Chat
            </Link>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
