import { Box, Button, TextField } from "@mui/material";
import React from "react";

function TodoForm({ text, handleInput, handleSubmit }) {
  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <TextField
        label="ToDo's"
        margin="dense"
        placeholder="Enter todo"
        variant="outlined"
        fullWidth
        type="text"
        value={text}
        id="todoinput"
        onChange={(e) => handleInput(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Add todo
      </Button>
    </Box>
  );
}

export default TodoForm;
