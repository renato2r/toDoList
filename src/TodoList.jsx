// src/TodoList.jsx
import React from "react"; // Não precisamos mais do useState aqui
import TodoListItem from "./TodoListItem";

// 1. Desestruture a prop 'todoList'
function TodoList({ todoList }) {
  if (!todoList || todoList.length === 0) {
    return <p>No tasks to display.</p>;
  }

  return (
    <ul>
      {/* 3. Mapeie sobre 'todoList' em vez do array estático */}
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
