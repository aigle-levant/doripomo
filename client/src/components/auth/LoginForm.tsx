import { useState } from "react";
import handleLogin from "../../utils/handleLogin";
import { authStore } from "../../store/authStore";
import Email from "../../assets/svg/Email";
import Password from "../../assets/svg/Password";

export default function LoginForm() {
  const setUser = authStore((state) => state.setUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit() {
    console.log("Submitting...");

    try {
      const { firebaseUser, backendUser } = await handleLogin({
        email,
        password,
      });
      console.log("Handle login, success.");

      setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        ...backendUser,
      });
      console.log(
        "User is logged in, now go and make the damn syllabus route!"
      );
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      alert(message);
    }
  }

  return (
    <div id="login-wrapper">
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
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
          Submit
        </button>
      </form>
    </div>
  );
}
