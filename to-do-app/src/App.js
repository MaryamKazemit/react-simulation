import "./App.css";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import "@fortawesome/fontawesome-svg-core/styles.css";

function App() {
  return (
    <div className="todo-app">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
