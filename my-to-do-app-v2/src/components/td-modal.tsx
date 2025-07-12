import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Todo } from "../types/todo";

interface TodoModalProps {
  show: boolean;
  onHide: () => void;
  onAdd: (title: string) => void;
  onEdit: (id: string, title: string) => void;
  editingTodo: Todo | null;
}

const TodoModal: React.FC<TodoModalProps> = ({
  show,
  onHide,
  onAdd,
  onEdit,
  editingTodo,
}) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(editingTodo?.title ?? "");
  }, [editingTodo, show]);

  const handleSubmit = () => {
    if (title.trim() === "") return;
    if (editingTodo) {
      onEdit(editingTodo.id, title.trim());
    } else {
      onAdd(title.trim());
    }
    setTitle("");
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body>
        <h3 className="fw-bold text-color-1 fs-30">
          {editingTodo ? "Edit Todo" : "New Todo"}
        </h3>
        <div className="mb-3 text-black fs-16">
          Please write content of todo in input below!
        </div>
        <input
          type="text"
          className="form-control input-underline fs-14"
          placeholder="Do something!"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={onHide}
          className="bg-transparent border-0 text-secondary fs-16"
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
          className="bg-transparent border-0 text-primary fs-16"
        >
          {editingTodo ? "Edit" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TodoModal;
