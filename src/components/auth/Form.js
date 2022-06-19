import { Button, Box, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

function Form(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleClick(email, password);
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          marginTop: "8rem",
        }}
      >
        <Box>
          <TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            fullWidth
          />
        </Box>
        <Box>
          <TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="pass"
            fullWidth
          />
        </Box>
        <Box sx={{ alignSelf: "center" }}>
          <Button
            type="submit"
            size="large"
            variant="contained"
            onClick={() => props.handleClick(email, password)}
            sx={{ alignSelf: "center" }}
          >
            {props.title}
          </Button>
        </Box>
      </Container>
    </form>
  );
}

export default Form;
