import SideNavbar from "../components/common/SideNavbar";
import { Outlet } from "react-router-dom";

export default function WithUser() {
  return (
    <div className="flex min-h-screen flex-row bg-bg text-text">
      <SideNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
