// TodoList.jsx
import React, { useState } from "react"; // Import useState

function TodoList() {
  // Move the 'todos' array into TodoList and make it a state
  const [todos, setTodos] = useState([
    { id: 1, title: "review resources" },
    { id: 2, title: "take notes" },
    { id: 3, title: "code out app" },
  ]);

  if (!todos || todos.length === 0) {
    return <p>No tasks to display.</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
