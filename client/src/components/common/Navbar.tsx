import { NavLink } from "react-router";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  // theme change
  const [theme, setTheme] = useState("light");
  return (
    <nav
      id="navbar"
      className="text-night dark:text-pale bg-pale dark:bg-night flex flex-row justify-between items-center gap-5 mx-10 rounded-full py-4 px-7 my-6"
    >
      <div id="nav-links" className="flex flex-row gap-10 pl-4 font-body">
        <NavLink to="/about">
          <p className="hover:font-bold">About</p>
        </NavLink>
        <NavLink to="/pomodoro">
          <p className="hover:font-bold">Pomodoro</p>
        </NavLink>
        <NavLink to="/syllabus">
          <p className="hover:font-bold">Syllabus</p>
        </NavLink>
        <NavLink to="/blog">
          <p className="hover:font-bold">Blog</p>
        </NavLink>
      </div>
      <div id="logo">
        <NavLink
          to="/"
          className="font-heading text-2xl font-bold text-center mr-30"
        >
          Doripomo
        </NavLink>
      </div>
      <div id="theme-and-auth" className="font-body flex flex-row gap-10 pr-1">
        <button
          type="button"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-4 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {theme === "light" ? (
            <Moon className="h-6 w-6" />
          ) : (
            <Sun className="h-6 w-6" />
          )}
        </button>
        <button
          type="button"
          className="rounded-3xl px-6 py-3 bg-secondary-matcha dark:bg-secondary-forest hover:border-secondary-matcha 
             hover:brightness-110 hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] 
             transition-all duration-500 ease-in-out"
        >
          <NavLink to="/login">Get started</NavLink>
        </button>
      </div>
    </nav>
  );
}
