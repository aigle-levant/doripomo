import LoginForm from "../components/auth/LoginForm";
import { NavLink } from "react-router";

export default function Login() {
  return (
    <div id="login">
      <LoginForm />
      <NavLink to="/signup">
        <p className="text-gray-700 hover:font-bold hover:text-night dark:text-gray-500 hover:dark:text-pale">
          Not signed in? Register here.
        </p>
      </NavLink>
    </div>
  );
}
