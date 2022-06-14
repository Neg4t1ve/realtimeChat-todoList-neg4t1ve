import React, { useState } from "react";
import TodoList from "../components/todoList/TodoList";
import TodoForm from "../components/todoList/TodoForm";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/slice/todoSlice";
import { Container } from "@mui/material";

function TodoListPage() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <Container maxWidth="md" sx={{ height: "70vh", marginTop: "2rem" }}>
      <TodoForm text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </Container>
  );
}
export default TodoListPage;
