import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { Container, List } from "@mui/material";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <Container maxWidth="md" sx={{ marginTop: "2rem", overflowY: "auto" }}>
      <List>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </List>
    </Container>
  );
}

export default TodoList;
