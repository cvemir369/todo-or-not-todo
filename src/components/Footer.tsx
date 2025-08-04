export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between p-4 mx-auto">
      <p>© {new Date().getFullYear()} All Types Reserved</p>
      <p>
        Made with ☕ by{" "}
        <a
          href="https://github.com/cvemir369"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline mr-1"
        >
          cvemir369
        </a>
      </p>
    </footer>
  );
}
