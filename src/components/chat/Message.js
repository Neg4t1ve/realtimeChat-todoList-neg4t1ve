import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { lightGreen } from "@mui/material/colors";

function Message({ username, text }) {
  const { email } = useAuth();
  return (
    <Box
      sx={
        username === email
          ? { alignSelf: "flex-end" }
          : { alignSelf: "flex-start" }
      }
    >
      <Paper
        variant="outlined"
        sx={{
          backgroundColor: lightGreen[200],
          padding: "0.5rem 0.25rem",
          margin: "0.5rem 0.25rem",
        }}
      >
        <Typography variant="caption">{username}</Typography>
        <Typography variant="h6" component={"p"}>
          {text}
        </Typography>
      </Paper>
    </Box>
  );
}

export default Message;
