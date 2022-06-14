import { Container } from "@mui/material";
import React from "react";
import Message from "./Message";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import Loader from "../Loader";

function ChatWindow() {
  const [messages, loading, error] = useCollection(
    query(collection(db, "chatMessages"), orderBy("time"))
  );
  return (
    <Container maxWidth="md" sx={{ height: "70vh", overflowY: "auto" }}>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <Loader />}
      {messages && (
        <span>
          {messages.docs.map((doc) => (
            <Message
              key={doc.id}
              username={doc.data().userEmail}
              text={doc.data().message}
            />
          ))}
        </span>
      )}
    </Container>
  );
}

export default ChatWindow;
