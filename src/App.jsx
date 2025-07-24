// App.jsx
import "./App.css";
import TodoList from "./TodoList"; // Importe seu componente TodoList
import TodoForm from "./TodoForm"; // Importe seu componente TodoForm

function App() {
  // O array 'todos' foi movido para TodoList, então não precisa mais estar aqui
  // const todos = [
  //   { id: 1, title: "review resources" },
  //   { id: 2, title: "take notes" },
  //   { id: 3, title: "code out app" },
  // ];

  return (
    <div>
      <h1>Todo List</h1>
      {/* Apenas renderize o TodoList, sem passar props de 'todos' */}
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
