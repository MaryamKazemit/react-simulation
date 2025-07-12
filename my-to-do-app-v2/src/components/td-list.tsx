import React from "react";
import { Todo } from "../types/todo";
import TodoItem from "./td-item";

interface TodoListProps {
  todos: Todo[];
  onEdit: (todo: Todo) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onEdit,
  onToggle,
  onDelete,
}) => (
  <ul className="list-unstyled">
    {todos.length === 0 && (
      <div className="text-center text-muted py-5">No todos found.</div>
    )}
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onEdit={onEdit}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

export default TodoList;
