import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Register from "../components/auth/Register";

function RegistrationPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Register />
      <Box sx={{ alignSelf: "center", marginTop: "1.5rem" }}>
        <Typography variant="body1">
          Already have an account?{" "}
          <Link component={RouterLink} to={"/login"}>
            Sign in
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default RegistrationPage;
