import React, { useState } from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    //   remove spaces
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const compeleteTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>what is our plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        compeleteTodo={compeleteTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      ></Todo>
    </div>
  );
}

export default TodoList;
