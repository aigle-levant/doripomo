import handleLogin from "../../utils/handleLogin";
import { useNavigate } from "react-router-dom";
import ReactHookForm from "../ui/ReactHookForm";
import { authStore } from "../../store/authStore";

export default function LoginForm() {
  const navigate = useNavigate();
  const setUser = authStore((state) => state.setUser);
  async function handleSubmit(data: { email: string; password: string }) {
    try {
      const { firebaseUser, backendUser } = await handleLogin(data);
      setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        ...backendUser,
      });
      navigate("/syllabus");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      alert(message);
    }
  }
  return (
    <div id="login-wrapper">
      <ReactHookForm onSubmit={handleSubmit} />
    </div>
  );
}
