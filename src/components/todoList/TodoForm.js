import { TextField } from "@mui/material";
import React from "react";

function TodoForm({ text, handleInput, handleSubmit }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="todoinput">
        <TextField
          label="Enter todo"
          variant="outlined"
          type="text"
          value={text}
          id="todoinput"
          onChange={(e) => handleInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Add todo</button>
      </label>
    </form>
  );
}

export default TodoForm;
