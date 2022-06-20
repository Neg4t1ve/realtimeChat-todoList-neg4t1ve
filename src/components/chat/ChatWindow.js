import { Container } from "@mui/material";
import React from "react";
import Message from "./Message";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import Loader from "../Loader";
import { useMemo } from "react";

function ChatWindow() {
  const [messages, loading, error] = useCollection(
    query(collection(db, "chatMessages"), orderBy("time"))
  );
  const memoizeMessages = useMemo((messages) => {
    let cachedMessages = Object.assign({}, messages);
    console.log(cachedMessages);
    return cachedMessages;
  });

  return (
    <Container
      maxWidth="md"
      sx={{
        height: "70vh",
        overflowY: "auto",
        border: "1px solid grey",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <Loader />}
      {messages &&
        messages.docs.map((doc) => (
          <Message
            key={doc.id}
            username={doc.data().userEmail}
            text={doc.data().message}
          />
        ))}
    </Container>
  );
}

export default ChatWindow;
