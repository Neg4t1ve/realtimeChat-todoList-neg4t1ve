import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../../app/slice/todoSlice";

function TodoItem({ id, completed, text }) {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({ id }))}
      />
      <span>{text}</span>
      <span
        style={{ color: "#555" }}
        onClick={() => dispatch(removeTodo({ id }))}
      >
        &times;
      </span>
    </li>
  );
}

export default TodoItem;
