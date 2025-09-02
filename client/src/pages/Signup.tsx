import SignupForm from "../components/auth/SignupForm";
import { NavLink } from "react-router";

export default function Signup() {
  return (
    <div id="sign-up">
      <SignupForm />
      <NavLink to="/login">
        <p className="text-gray-700 hover:font-bold hover:text-night dark:text-gray-500 hover:dark:text-pale">
          Already logged in? Sign-in here.
        </p>
      </NavLink>
    </div>
  );
}
