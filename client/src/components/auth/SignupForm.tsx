import handleSignup from "../../utils/handleSignup";
import ReactHookForm from "../ui/ReactHookForm";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigate = useNavigate();
  async function handleSubmit(data: {
    email: string;
    password: string;
    displayName?: string;
  }) {
    try {
      await handleSignup(data);
      alert("Signup successful!");
      navigate("/login");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      alert(message);
    }
  }
  return (
    <div id="sign-up-wrapper">
      <ReactHookForm onSubmit={handleSubmit} />
    </div>
  );
}
