// src/App.jsx
import "./App.css";
import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  // O estado 'todoList' agora é o dono dos dados
  const [todoList, setTodoList] = useState([]);

  function addTodo(title) {
    const newTodo = {
      title: title,
      id: Date.now(),
    };
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />

      {/* 1. Passe o estado 'todoList' como uma prop chamada 'todoList' */}
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
