import SignupForm from "../components/auth/SignupForm";
import { NavLink } from "react-router";

export default function Signup() {
  return (
    <div id="sign-up-form-wrapper" className="flex flex-col gap-5">
      <h1 className="text-4xl font-heading font-medium">Nice to meet you</h1>
      <span className="text-gray-700 dark:text-gray-500">
        Already have an account?{" "}
        <NavLink to="/login">
          <span className="hover:font-bold text-secondary-matcha dark:text-secondary-forest">
            Login here.
          </span>
        </NavLink>
      </span>
      <div id="form-wrapper">
        <SignupForm />
      </div>
    </div>
  );
}
