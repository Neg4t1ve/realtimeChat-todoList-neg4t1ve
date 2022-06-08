import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ChatPage from "./pages/ChatPage";
import ChessPage from "./pages/ChessPage";
import TodoListPage from "./pages/TodoListPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="chess" element={<ChessPage />} />
          <Route path="todolist" element={<TodoListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
