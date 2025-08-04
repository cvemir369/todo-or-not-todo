import { useState } from "react";
import type { Todo } from "../types/types";

interface TodoEditProps {
  todo: Todo;
  onEdit: (todoId: number, newTask: string) => void;
}

export default function TodoEdit({ todo, onEdit }: TodoEditProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editText, setEditText] = useState(todo.task);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editText.trim()) return;
    onEdit(todo.id, editText.trim());
    setIsModalOpen(false);
  }

  function handleCancel() {
    setEditText(todo.task); // Reset to original text
    setIsModalOpen(false);
  }

  function openModal() {
    setEditText(todo.task); // Initialize with current task
    setIsModalOpen(true);
  }

  return (
    <>
      <div
        title="Edit"
        className="opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
        onClick={(e) => {
          e.stopPropagation();
          openModal();
        }}
      >
        ✏️
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 text-neutral-100 bg-neutral-900/90 flex items-center justify-center z-50"
          onClick={handleCancel}
        >
          <div
            className="bg-neutral-800 p-6 rounded-lg shadow-lg w-96 max-w-90vw"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold  mb-4">Edit Todo</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
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
            </form>
          </div>
        </div>
      )}
    </>
  );
}
