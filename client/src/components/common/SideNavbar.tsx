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
      className="fixed left-0 top-0 z-40 w-full md:w-44 h-16 md:h-screen bg-primary-sakura dark:bg-night text-night dark:text-pale flex flex-col justify-around"
      aria-label="Side navigation bar"
    >
      <div id="logo-wrapper">
        <p
          className="font-heading font-bold text-2xl"
          aria-label="Logo of the website: Doripomo"
        >
          Doripomo
        </p>
      </div>
      <div id="content-wrapper" className="flex flex-col justify-between">
        <div id="links-wrapper">
          <ul className="list-none">
            {data.map(({ page, path, icon: Icon }) => (
              <li key={path} className="flex flex-row gap-5 items-center">
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
        <div id="misc-wrapper" className="flex flex-row">
          <ThemeController />
          <button className="btn btn-soft btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-x">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
