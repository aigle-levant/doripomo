import ThemeController from "../ui/ThemeController";
import { NavLink } from "react-router-dom";
import { Album, ListTodo, Timer, ChartColumn, Settings } from "lucide-react";

export default function SideNavbar() {
  const data = [
    {
      page: "Syllabus",
      path: "/syllabus",
      icon: Album,
    },
    {
      page: "Tasks",
      path: "/tasks",
      icon: ListTodo,
    },
    {
      page: "Pomodoro",
      path: "/pomodoro",
      icon: Timer,
    },
    {
      page: "Analytics",
      path: "/analytics",
      icon: ChartColumn,
    },
    {
      page: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];
  return (
    <div
      id="side-navbar-wrapper"
      className="fixed left-0 top-0 z-40 w-full md:w-55 h-16 md:h-screen bg-primary-sakura dark:bg-night text-night dark:text-pale flex flex-col justify-between px-5 py-8"
      aria-label="Side navigation bar"
    >
      <div id="logo-wrapper" className="mb-10">
        <p
          className="font-heading text-center font-bold text-2xl"
          aria-label="Logo of the website: Doripomo"
        >
          <NavLink to="/">Doripomo</NavLink>
        </p>
      </div>
      <div
        id="content-wrapper"
        className="flex flex-col justify-between text-xl gap-15"
      >
        <div id="links-wrapper">
          <ul className="list-none flex flex-col gap-10 justify-center">
            {data.map(({ page, path, icon: Icon }) => (
              <li
                key={path}
                className="flex flex-row gap-5 items-center rounded-2xl hover:bg-primary-sakura hover:text-night px-3 py-2"
              >
                {Icon && <Icon className="h-5 w-5" />}
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  {page}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div id="misc-wrapper" className="flex flex-row gap-10">
          <ThemeController />
          <button className="btn btn-soft btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-x">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
