// App.jsx
import "./App.css";
import TodoList from "./TodoList"; // Importe seu componente TodoList
import TodoForm from "./TodoForm"; // Importe seu componente TodoForm
import React, { useState } from "react"; // Import useState, se necessário

function App() {
  const [newTodo, setNewTodo] = useState("Example Text"); // Estado para o novo todo]
  return (
    <div>
      <h1>Todo List</h1>
      {/* Apenas renderize o TodoList, sem passar props de 'todos' */}
      <TodoForm />
      <p>{newTodo}</p>
      <TodoList />
    </div>
  );
}

export default App;
