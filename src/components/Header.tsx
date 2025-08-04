import { Link, useLocation } from "react-router";

export default function Header() {
  const location = useLocation();

  return (
    <header className="flex items-center justify-between gap-4">
      <h1 className="text-xl font-bold">📃 Todo or not Todo</h1>
      <nav className="flex gap-4">
        <Link
          className={`hover:underline ${
            location.pathname === "/" ? "underline font-semibold" : ""
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`hover:underline ${
            location.pathname === "/about" ? "underline font-semibold" : ""
          }`}
          to="/about"
        >
          About
        </Link>
      </nav>
    </header>
  );
}
