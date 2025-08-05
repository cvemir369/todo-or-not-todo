export default function About() {
  return (
    <div className="flex flex-col items-start md:items-center justify-center gap-4 mt-8">
      <h1 className="text-2xl font-bold">Todo React TypeScript Project</h1>
      <p>No backend implemented, all data is stored in Local Storage.</p>
      <p>
        This project is a simple Todo application built with React and
        TypeScript.
      </p>
      <p>It allows you to add, toggle, delete and view todos.</p>
      <p>Enjoy using the Todo app!</p>
      <p>Practice makes perfect.</p>
      <p>Every Todo is a step towards mastery.</p>
      <p>
        Repo:{" "}
        <a
          href="https://github.com/cvemir369/todo-or-not-todo.git"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          https://github.com/cvemir369/todo-or-not-todo.git
        </a>
      </p>
    </div>
  );
}
