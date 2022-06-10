import React, { useState } from "react";
import RequireAuth from "../components/hoc/RequireAuth";
import TodoList from "../components/todoList/TodoList";
import TodoForm from "../components/todoList/TodoForm";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/slice/todoSlice";

function TodoListPage() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div>
      <TodoForm text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}
export default TodoListPage;
