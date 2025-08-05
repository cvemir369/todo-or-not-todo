import type { Dispatch, SetStateAction } from "react";
import type { Todo } from "../types/types";

interface TodoAddProps {
  setTodosList: Dispatch<SetStateAction<Todo[]>>;
}

export default function TodoAdd({ setTodosList }: TodoAddProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector("input") as HTMLInputElement;
    if (!input.value.trim()) {
      input.placeholder = "Please enter a task" + " 😅";
      return;
    }
    const newTodo = {
      id: Date.now(),
      task: input.value,
      completed: false,
    };
    setTodosList((prevTodos) => [...prevTodos, newTodo]);
    input.value = "";
    input.placeholder = "Enter todo task";
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo task"
          className="border p-2 rounded-xl"
        />
        <button
          type="submit"
          className="bg-neutral-700 text-white px-5 rounded-xl hover:bg-neutral-600 transition-colors cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
}
