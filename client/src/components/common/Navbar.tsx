import { NavLink } from "react-router";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  // theme change
  const [theme, setTheme] = useState("light");
  return (
    <nav
      id="navbar"
      className="text-night dark:text-pale bg-pale dark:bg-night flex flex-row justify-between items-center gap-5 rounded-2xl"
    >
      <div id="nav-links" className="flex flex-row gap-2 font-body">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/pomodoro">Pomodoro</NavLink>
        <NavLink to="/syllabus">Syllabus</NavLink>
      </div>
      <div id="logo">
        <NavLink to="/" className="font-heading font-bold">
          Doripomo
        </NavLink>
      </div>
      <div id="theme-and-auth" className="font-body">
        <button
          type="button"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Moon className="h-6 w-6" />
          ) : (
            <Sun className="h-6 w-6" />
          )}
        </button>
        <button
          type="button"
          className="rounded-3xl bg-secondary-matcha dark:bg-secondary-forest"
        >
          <NavLink to="/login">Get started</NavLink>
        </button>
      </div>
    </nav>
  );
}
