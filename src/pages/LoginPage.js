import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Login from "../components/auth/Login";

function LoginPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Login />
      <Box sx={{ alignSelf: "center", marginTop: "1.5rem" }}>
        <Typography variant="body1">
          Don't have an account yet?{" "}
          <Link component={RouterLink} to={"/register"}>
            Sign up
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default LoginPage;
