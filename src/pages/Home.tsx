import { useEffect, useState } from "react";
import { todos } from "../api/todos";
import TodoAdd from "../components/TodoAdd";
import TodoDelete from "../components/TodoDelete";
import TodoEdit from "../components/TodoEdit";
import type { Todo } from "../types/types";

export default function Home() {
  const [todosList, setTodosList] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos")!) || todos
  );

  // Function to toggle the completed state of a todo
  function invertCompleted(todoId: number) {
    setTodosList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // Function to delete a todo
  function deleteTodo(todoId: number) {
    setTodosList((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  // Function to edit a todo
  function editTodo(todoId: number, newTask: string) {
    setTodosList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      )
    );
  }

  // Sync todosList with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosList));
  }, [todosList]);

  // Initialize todos from localStorage or default todos (only on first render)
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (!storedTodos) {
      setTodosList(todos);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <TodoAdd setTodosList={setTodosList} />
      {todosList.length === 0 && <div>No todos available</div>}
      <ul>
        {todosList.map((todo) => (
          <li
            key={todo.id}
            onClick={() => invertCompleted(todo.id)}
            className="flex gap-4 my-2 cursor-pointer group p-2 relative hover:text-neutral-400"
          >
            <span
              title={
                todo.completed
                  ? "Click to mark as incomplete"
                  : "Click to mark as complete"
              }
              className={todo.completed ? "line-through" : ""}
            >
              {todo.task}
            </span>
            <TodoEdit todo={todo} onEdit={editTodo} />
            <div
              title="Delete"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
              onClick={(e) => e.stopPropagation()}
            >
              <TodoDelete todoId={todo.id} onDelete={deleteTodo} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
