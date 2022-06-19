import { Container } from "@mui/material";
import React from "react";
import ChatForm from "../components/chat/ChatForm";
import ChatWindow from "../components/chat/ChatWindow";

function ChatPage() {
  return (
    <Container
      maxWidth="md"
      sx={{
        justifyContent: "center",
        marginTop: "2.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <ChatWindow />
      <ChatForm />
    </Container>
  );
}

export default ChatPage;
