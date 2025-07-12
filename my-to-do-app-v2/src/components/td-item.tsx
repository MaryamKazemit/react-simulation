import React from "react";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onEdit: (todo: Todo) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onEdit,
  onToggle,
  onDelete,
}) => (
  <li className="d-flex align-items-center justify-content-between py-2 border-bottom">
    <div className="d-flex align-items-center">
      <input
        type="checkbox"
        className="circular-checkbox fs-16"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span
        className={
          todo.completed
            ? "text-decoration-line-through text-secondary fs-16"
            : ""
        }
      >
        {todo.title}
      </span>
    </div>
    <div>
      <button
        className="btn btn-link p-0 me-2"
        title="Edit"
        onClick={() => onEdit(todo)}
      >
        <i className="bi bi-pencil text-primary"></i>
      </button>
      <button
        className="btn btn-link p-0"
        title="Delete"
        onClick={() => onDelete(todo.id)}
      >
        <i className="bi bi-trash text-danger"></i>
      </button>
    </div>
  </li>
);

export default TodoItem;
