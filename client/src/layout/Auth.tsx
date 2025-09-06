import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div
      id="auth-layout-wrapper"
      className="w-full min-h-screen flex flex-row bg-pale dark:bg-night text-night dark:text-pale"
    >
      <div
        id="auth-content-wrapper"
        className="absolute flex flex-col gap-12 z-40"
      >
        <div id="auth-logo-wrapper">
          <p className="font-heading absolute top-5 left-10 font-bold text-night dark:text-pale text-2xl">
            Doripomo
          </p>
        </div>
        <div
          id="auth-card-wrapper"
          className="bg-pale dark:bg-night text-night dark:text-pale rounded-2xl px-10 py-20 w-[400px] min-h-[300px] relative left-10 top-10"
        >
          <Outlet />
        </div>
      </div>
      <div id="auth-layout" className="w-full h-screen">
        <div id="auth-bg-wrapper">
          <img
            src="../assets/auth-bg.jpg"
            alt="Photo by Masaaki Komori on Unsplash. White sakura blossoms."
            className="w-full h-screen object-cover opacity-75"
          />
        </div>
      </div>
    </div>
  );
}
