import { Link } from "react-router-dom";
import { DarkThemeToggle } from "flowbite-react";

export default function Header() {
  return (
    <header className="flex items-center justify-center gap-4 p-6">
      <Link to={`/`}>
        <h1 className="text-5xl font-bold dark:text-white">Latin Dictionary</h1>
      </Link>
      <DarkThemeToggle />
    </header>
  );
}
