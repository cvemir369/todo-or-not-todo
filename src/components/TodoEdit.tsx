import { useState, useEffect } from "react";
import type { Todo } from "../types/types";

interface TodoEditProps {
  todo: Todo;
  onEdit: (todoId: number, newTask: string) => void;
  onDelete: (todoId: number) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  closeModal: () => void;
}

export default function TodoEdit({
  todo,
  onEdit,
  onDelete,
  isModalOpen,
  setIsModalOpen,
  closeModal,
}: TodoEditProps) {
  const [editText, setEditText] = useState(todo.task);
  const [inputPlaceholder, setInputPlaceholder] = useState("Edit your task");

  useEffect(() => {
    setEditText(todo.task);
    setInputPlaceholder("Edit your todo task");
  }, [todo]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editText.trim()) {
      setInputPlaceholder("Can't be empty 😅");
      return;
    }

    onEdit(todo.id, editText.trim());
    setIsModalOpen(false);
  }

  function handleCancel() {
    setEditText(todo.task); // Reset to original text
    setIsModalOpen(false);
    closeModal();
  }

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 text-neutral-100 bg-neutral-900/90 flex items-center justify-center z-50"
      onClick={handleCancel}
    >
      <div
        className="bg-neutral-800 p-6 rounded-lg shadow-lg w-96 max-w-90vw"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold  mb-4">Edit or Delete Todo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            placeholder={inputPlaceholder}
            className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(todo.id);
                setIsModalOpen(false);
                closeModal();
              }}
              className="px-4 py-2 rounded-xl hover:text-neutral-500 hover:cursor-pointer"
            >
              Delete
            </button>
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 rounded-xl hover:text-neutral-500 hover:cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl hover:text-neutral-500 hover:cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
