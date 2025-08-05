import { useEffect, useState } from "react";
import { todos } from "../api/todos";
import TodoAdd from "../components/TodoAdd";
import TodoEdit from "../components/TodoEdit";
import type { Todo } from "../types/types";
import { LuCircleCheckBig } from "react-icons/lu";
import { LuCircle } from "react-icons/lu";

export default function Home() {
  const [todosList, setTodosList] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos")!) || todos
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  function openModal(todo: Todo) {
    setSelectedTodo(todo);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedTodo(null);
  }

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
    <>
      <div className="flex flex-col items-center justify-center gap-4 mt-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-4">Todo List</h1>
        <TodoAdd setTodosList={setTodosList} />
        {todosList.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="m-2">No todos available</div>
            <button
              className="p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-400 active:scale-95 transition-colors cursor-pointer"
              onClick={() => setTodosList(todos)}
            >
              Load Default Todos
            </button>
          </div>
        )}
        <ul>
          {todosList.map((todo) => (
            <li
              key={todo.id}
              className="animate-fade-in flex items-center gap-4 my-2 group p-2 relative hover:text-neutral-400"
            >
              <button
                onClick={() => invertCompleted(todo.id)}
                className="text-xl cursor-pointer"
                title={
                  todo.completed ? "Mark as incomplete" : "Mark as complete"
                }
              >
                {todo.completed ? <LuCircleCheckBig /> : <LuCircle />}
              </button>

              <span
                title="Click to edit or delete"
                className={`cursor-pointer ${
                  todo.completed ? "line-through" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(todo);
                }}
              >
                {todo.task}
              </span>
            </li>
          ))}
        </ul>
        {todosList.length !== 0 && (
          <button
            className="p-2 bg-red-950 text-white px-5 rounded-xl hover:bg-red-600 active:scale-95 transition-colors cursor-pointer"
            onClick={() => setTodosList([])}
          >
            Delete All
          </button>
        )}
      </div>
      {/* Modal */}
      {isModalOpen && selectedTodo && (
        <TodoEdit
          todo={selectedTodo}
          onEdit={editTodo}
          onDelete={deleteTodo}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
}
