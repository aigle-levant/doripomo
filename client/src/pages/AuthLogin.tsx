import { useEffect, useState } from "react";
import { useAuth0, type RedirectLoginOptions } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

// for ts
interface MyRedirectOptions extends RedirectLoginOptions {
  screen_hint?: "signup" | "login";
}

export default function AuthLogin() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleLogin = () =>
    loginWithRedirect({ appState: { returnTo: "/syllabus" } });

  const handleSignup = () =>
    loginWithRedirect({
      screen_hint: "signup",
      appState: { returnTo: "/syllabus" },
    } as MyRedirectOptions);

  // When user is authenticated, trigger fade out
  useEffect(() => {
    if (isAuthenticated) {
      setFadeOut(true);
      const timer = setTimeout(() => {
        setShowForm(false);
        navigate("/syllabus");
      }, 1000); // 1s fade
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div id="login-form-wrapper" className="flex flex-col gap-5 relative">
      <h1 className="text-4xl font-heading font-medium">
        Get access to an awesome time management setup
      </h1>

      {showForm && (
        <div
          className={`flex flex-col gap-3 transition-opacity duration-700 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <button
            onClick={handleLogin}
            className="bg-blue-500 btn text-white py-2 px-4 rounded"
          >
            Login
          </button>
          <button
            onClick={handleSignup}
            className="bg-green-500 btn text-white py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </div>
      )}

      {isAuthenticated && !showForm && (
        <div className="fade-in">
          <p className="text-xl font-heading font-medium">
            Hello, {user?.name}
          </p>
        </div>
      )}
    </div>
  );
}
