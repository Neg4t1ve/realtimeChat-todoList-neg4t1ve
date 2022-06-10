import React from "react";

function TodoForm({ text, handleInput, handleSubmit }) {
  return (
    <label htmlFor="todoinput">
      <input
        type="text"
        value={text}
        id="todoinput"
        onChange={(e) => handleInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add todo</button>
    </label>
  );
}

export default TodoForm;
