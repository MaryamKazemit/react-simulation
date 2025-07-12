import React, { useState, useEffect } from "react";
import { Todo } from "../types/todo";
import { loadTodos, saveTodos } from "../utils/local-storage";
import { ToastContainer, toast } from "react-toastify";
import Header from "./header";
import DatePanel from "./date";
import FilterTabs from "./tabs";
import TodoList from "./td-list";
import TodoModal from "./td-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editTodo, setEditTodo] = useState<Todo | null>(null);
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">(
    "incomplete"
  );

  useEffect(() => {
    setTodos(loadTodos());
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const openModal = (todo?: Todo) => {
    setEditTodo(todo ?? null);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditTodo(null);
  };

  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      { id: Date.now().toString(), title, completed: false },
    ]);
    toast.success("Todo added!");
  };

  const updateTodo = (id: string, title: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
    toast.info("Todo updated!");
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.error("Todo deleted!");
  };

  const filteredTodos = todos.filter((todo) =>
    filter === "all"
      ? true
      : filter === "completed"
      ? todo.completed
      : !todo.completed
  );

  return (
    <div className="bg-pattern min-vh-100">
      <Header />
      <div className="container py-4">
        <div className="mx-auto max-w-800">
          <div className="card rounded-4 shadow-sm p-4 min-h-480">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <DatePanel />
              <FilterTabs filter={filter} setFilter={setFilter} />
            </div>
            <div className="p-5">
              <TodoList
                todos={filteredTodos}
                onEdit={openModal}
                onToggle={toggleComplete}
                onDelete={deleteTodo}
              />
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary opacity-75 rounded-circle shadow fab-center-bottom d-flex align-items-center justify-content-center z-3 fs-32 h-56 w-56"
          onClick={() => openModal()}
        >
          +
        </button>

        <TodoModal
          show={modalOpen}
          onHide={closeModal}
          onAdd={addTodo}
          onEdit={updateTodo}
          editingTodo={editTodo}
        />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        closeButton={false}
      />
    </div>
  );
};

export default App;
