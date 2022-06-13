import { Container } from "@mui/material";
import React from "react";
import Message from "./Message";

function ChatWindow() {
  return (
    <Container maxWidth="md" sx={{ height: "70vh", overflowY: "auto" }}>
      <Message />
    </Container>
  );
}

export default ChatWindow;
