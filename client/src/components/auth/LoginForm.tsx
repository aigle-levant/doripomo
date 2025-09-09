import { useState, useEffect } from "react";
import { firebaseLogin } from "../../utils/handleAuth";
import Email from "../../assets/svg/Email";
import Password from "../../assets/svg/Password";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [showHoneypot, setShowHoneypot] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowHoneypot(true);
  }, []);

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const result = await firebaseLogin({ email, password });
      if (!result) throw new Error("Login failed");
      navigate("/syllabus");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="login-wrapper">
      <form onSubmit={login} className="flex flex-col gap-2">
        {showHoneypot && (
          <input
            type="text"
            name="a_password"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
        )}
        <label className="input validator">
          <Email />
          <input
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="on"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={320}
            pattern="^[\w-.]+@([\w-]+\.)+[\w-]{2,}$"
            title="Enter a valid email address"
          />
        </label>
        <label className="input validator">
          <Password />
          <input
            type="password"
            name="password"
            autoComplete="on"
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
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          className="bg-blue-500 btn text-white py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
