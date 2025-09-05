import { useState } from "react";
import { firebaseLogin } from "../../utils/handleAuth";
import { authStore } from "../../store/authStore";
import Email from "../../assets/svg/Email";
import Password from "../../assets/svg/Password";

export default function LoginForm() {
  const setUser = authStore((state) => state.setUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { user } = await firebaseLogin({
        email,
        password,
      });
      setUser({
        uid: user.uid,
        email: user.email ?? "",
      });
      console.log(
        "User is logged in, now go and make the damn syllabus route!"
      );
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : err;
      alert(message);
    }
  }
  return (
    <div id="login-wrapper">
      <form onSubmit={login} className="flex flex-col gap-2">
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
            pattern="[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+(\.[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+)*@[a-zA-Z0-9_][\-a-zA-Z0-9_]*(\.[\-a-zA-Z0-9_]+)*\.[cC][oO][mM](:[0-9]{1,5})?"
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

        <button
          type="submit"
          className="bg-blue-500 btn text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
