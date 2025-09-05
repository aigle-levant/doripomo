import LoginForm from "../components/auth/LoginForm";
import { NavLink } from "react-router";

export default function Login() {
  return (
    <div id="login-form-wrapper" className="flex flex-col gap-5">
      <h1 className="text-4xl font-heading font-medium">Welcome back</h1>
      <span className="text-gray-700  dark:text-gray-500">
        Not signed in?{" "}
        <NavLink to="/signup">
          <span className="text-secondary-forest hover:font-bold dark:text-secondary-matcha">
            Register here
          </span>
        </NavLink>
      </span>
      <div id="form-wrapper">
        <LoginForm />
      </div>
    </div>
  );
}
