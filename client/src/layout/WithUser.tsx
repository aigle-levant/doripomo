import { useAuth0 } from "@auth0/auth0-react";
import SideNavbar from "../components/common/SideNavbar";
import { Outlet } from "react-router-dom";

export default function WithUser() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen gap-12 items-center flex-col justify-center bg-bg text-text">
        <h1 className="font-heading text-6xl text-center">
          Look who hasn't logged in yet!
        </h1>
        <p className="font-body text-2xl">
          You gotta login to access this content .
        </p>
        <button
          onClick={() => loginWithRedirect()}
          className="rounded-3xl px-6 py-3 bg-sakura font-body text-xl hover:border-secondary-matcha 
             hover:brightness-110 hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] 
             transition-all duration-500 ease-in-out"
        >
          Login to Access
        </button>
      </div>
    );
  }

  // If logged in, show the layout with SideNavbar and Outlet
  return (
    <div className="flex min-h-screen flex-row bg-bg text-text">
      <SideNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
