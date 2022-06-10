import React from "react";
import RequireAuth from "../components/hoc/RequireAuth";
import { useState } from "react";

function TodoListPage() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const AddTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
    }
  };

  const RemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };
  return (
    <div>
      <label htmlFor="todoinput">
        <input
          type="text"
          value={text}
          id="todoinput"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={AddTodo}>Add todo</button>
      </label>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todos.completed}
              onChange={() => toggleTodoComplete(todo.id)}
            />
            <span>{todo.text}</span>
            <span style={{ color: "#555" }} onClick={() => RemoveTodo(todo.id)}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoListPage;
