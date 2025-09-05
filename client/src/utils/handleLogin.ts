import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import axios from "axios";

export default async function handleLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const userDetails = await signInWithEmailAndPassword(auth, email, password);
  const token = await userDetails.user.getIdToken();
  const res = await axios.get("https://localhost:4000/api/auth/login", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return {
    firebaseUser: userDetails.user,
    backendUser: res.data,
  };
}
