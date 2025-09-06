import { firebaseSignup } from "../../utils/handleAuth";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Email from "../../assets/svg/Email";
import Password from "../../assets/svg/Password";
// TODO: Implement recaptcha
// import ReCAPTCHA from "react-google-recaptcha";

export default function SignupForm() {
  // trap shitty bots and make internet better
  const [showHoneypot, setShowHoneypot] = useState(false);
  // v3 recaptcha
  // const [recaptchaToken, setRecaptchaToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // show me the honeypot AS SOON AS PAGE LOADS
  useEffect(() => {
    setShowHoneypot(true);
  }, []);
  async function signup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await firebaseSignup({ email, password });
      alert("Signed up!");
      navigate("/login");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      alert(message);
    }
  }
  return (
    <div id="sign-up-wrapper">
      <form onSubmit={signup} className="flex flex-col gap-2">
        {showHoneypot && (
          <input
            type="text"
            name="fax_only"
            tabIndex={-1}
            aria-hidden="true"
            autoComplete="off"
            style={{
              position: "absolute",
              left: "-9999px",
              top: "auto",
              width: "1px",
              height: "1px",
              overflow: "hidden",
            }}
          />
        )}
        <label className="input validator">
          <Email />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={320}
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            title="Enter a valid email address"
          />
        </label>

        <label className="input validator">
          <Password />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            maxLength={64}
            pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*?_\-]).{8,64}$"
            title="Password must be 8–64 characters, include uppercase, lowercase, number, and special character"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 btn text-white py-2 px-4 rounded"
        >
          <NavLink to="/login">Submit</NavLink>
        </button>
      </form>
    </div>
  );
}
