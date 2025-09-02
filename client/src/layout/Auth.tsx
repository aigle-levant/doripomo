import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div
      id="auth-layout-wrapper"
      className="w-full min-h-screen flex bg-pale dark:bg-night text-night dark:text-pale"
    >
      <div id="auth-layout">
        <div id="auth-bg-wrapper">
          <img
            src="https://unsplash.com/photos/white-flowering-plant-1vuXf7ta_PU"
            alt="Photo by Masaaki Komori on Unsplash. White sakura blossoms."
            className="w-full"
          />
        </div>
        <div id="auth-card-wrapper" className="rounded-full px-6 py-4">
          <div id="auth-content-wrapper" className="p-4">
            <div id="auth-logo-wrapper">
              <p className="font-heading font-bold text-4xl mb-4">Doripomo</p>
            </div>
            <div id="auth-content" className="my-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
