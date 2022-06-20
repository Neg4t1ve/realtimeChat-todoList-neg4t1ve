import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";

function ChatForm() {
  const [text, setText] = useState("");
  const { email } = useAuth();
  const handleSendMessage = (e) => {
    e.preventDefault();
    try {
      addDoc(collection(db, "chatMessages"), {
        message: text,
        userEmail: email,
        time: serverTimestamp(),
      });
    } catch (err) {
      console.error("Error adding document: ", err);
    }

    setText("");
  };

  return (
    <Box component={"form"} onSubmit={handleSendMessage}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Enter message"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Box>
  );
}

export default ChatForm;
