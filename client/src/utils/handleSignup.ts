import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";
import axios from "axios";
import { authStore } from "../store/authStore";

export default async function handleSignup({
  email,
  password,
  displayName,
}: {
  email: string;
  password: string;
  displayName?: string;
}) {
  const userDetails = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  if (displayName) {
    await updateProfile(userDetails.user, { displayName });
  }
  //   store state in zustand
  const setUser = authStore.getState().setUser;
  setUser({ email: userDetails.user.email!, uid: userDetails.user.uid });
  //   handle token
  const token = await userDetails.user.getIdToken();
  await axios.post(
    "http://localhost:4000/api/auth/signup",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return true;
}
