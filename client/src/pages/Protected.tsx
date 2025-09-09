import { Navigate } from "react-router-dom";
import { authStore } from "../store/authStore";

export default function Protected({
  children,
}: {
  children: React.JSX.Element;
}) {
  const user = authStore((state) => state.user);
  if (!user) return <Navigate to="/login" replace />;
  return children;
}
