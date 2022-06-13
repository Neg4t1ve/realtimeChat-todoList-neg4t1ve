import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ boxShadow: 0 }}>
        <Toolbar>
          <Link
            component={NavLink}
            to="/"
            color="error"
            underline="hover"
            sx={{ mr: "2rem" }}
          >
            Home
          </Link>

          <Link
            component={NavLink}
            to="todolist"
            color="error"
            underline="hover"
            sx={{ mr: "2rem" }}
          >
            ToDo
          </Link>

          <Link
            component={NavLink}
            to="chess"
            color="error"
            underline="hover"
            sx={{ mr: "2rem" }}
          >
            Chess
          </Link>

          <Link
            component={NavLink}
            to="chat"
            color="error"
            underline="hover"
            sx={{ mr: "2rem" }}
          >
            Chat
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
