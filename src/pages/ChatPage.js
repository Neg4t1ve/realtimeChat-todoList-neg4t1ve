import { Container } from "@mui/material";
import React from "react";
import ChatForm from "../components/chat/ChatForm";
import ChatWindow from "../components/chat/ChatWindow";

function ChatPage() {
  return (
    <Container
      maxWidth="md"
      sx={{ border: "1px solid grey", justifyContent: "center" }}
    >
      <ChatWindow />
      <ChatForm />
    </Container>
  );
}

export default ChatPage;
