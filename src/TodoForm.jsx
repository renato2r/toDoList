// src/TodoForm.jsx
// 1. Importe 'useRef'
import React, { useRef } from "react";

function TodoForm({ onAddTodo }) {
  // 2. Invoque 'useRef' e atribua-o a uma constante
  const todoTitleInput = useRef();

  function handleAddTodo(event) {
    event.preventDefault();

    // Obtenha o valor do input através do 'ref'
    const title = todoTitleInput.current.value;

    onAddTodo(title);

    // 3. Limpe o input e, em seguida, redirecione o foco para ele
    todoTitleInput.current.value = "";
    todoTitleInput.current.focus();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input
        // 4. Adicione a prop 'ref' e passe a constante 'todoTitleInput'
        ref={todoTitleInput}
        type="text"
        id="todoTitle"
        name="title"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
