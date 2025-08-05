import { FaDatabase } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { LuCircleCheckBig } from "react-icons/lu";
import { BiHappyHeartEyes } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

export default function About() {
  return (
    <div className="flex flex-col justify-center gap-4 mt-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        About This Small Project
      </h1>
      <div className="flex flex-col gap-3 items-start">
        <p className="flex gap-2 items-start">
          <FaReact className="text-neutral-400 mt-1" />
          <span>
            This project is a simple Todo application built with React.
          </span>
        </p>
        <p className="flex gap-2 items-start">
          <LuCircleCheckBig className="text-neutral-400 mt-1" />
          <span>
            It allows you to add, view, toggle, edit and delete todos.
          </span>
        </p>
        <p className="flex gap-2 items-start">
          <SiTypescript className="text-neutral-400 mt-1" />
          <span>
            Typescript is used for type safety and better development
            experience.
          </span>
        </p>
        <p className="flex gap-2 items-start">
          <RiTailwindCssFill className="text-neutral-400 mt-1" />
          <span>It is styled with Tailwind CSS.</span>
        </p>
        <p className="flex gap-2 items-start">
          <SiVite className="text-neutral-400 mt-1" />
          <span>Vite is used as the build tool.</span>
        </p>
        <p className="flex gap-2 items-start">
          <FaDatabase className="text-neutral-400 mt-1" />
          <span>
            No backend implemented, all data is stored in Local Storage.
          </span>
        </p>
        <p className="flex gap-2 items-start">
          <BiHappyHeartEyes className="text-neutral-400 mt-1" />
          <span>Enjoy using the Todo app!</span>
        </p>
        <p className="flex gap-2 items-start">
          <FaGithub className="text-neutral-400 mt-1" />
          Repo:{" "}
          <a
            href="https://github.com/cvemir369/todo-or-not-todo.git"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-neutral-400"
          >
            click here to view the repository
          </a>
        </p>
      </div>
      <h2 className="flex flex-col mt-2 md:flex-row gap-2 items-center text-2xl mx-auto">
        <div className="flex gap-2">
          <SiBuymeacoffee className="text-neutral-400 mt-1" />
          <span>Buy me a coffee: </span>
        </div>

        <a
          href="https://www.buymeacoffee.com/cvemir369"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neutral-400"
        >
          -&gt; click here &lt;-
        </a>
      </h2>
    </div>
  );
}
