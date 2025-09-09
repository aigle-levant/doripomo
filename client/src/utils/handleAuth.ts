import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { authStore } from "../store/authStore";
import { type LoginFormValues, type UserFormValues } from "../types/authTypes";
import axios from "axios";

// persist login info even after the user guy
// closes tab
setPersistence(auth, browserLocalPersistence);

// TODO: Add token and security protections for login and signup
// login
export async function firebaseLogin({ email, password }: LoginFormValues) {
  try {
    const data = await signInWithEmailAndPassword(auth, email, password);
    const token = await data.user.getIdToken();
    const res = await axios.get("http://localhost:4000/api/auth/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const user = {
      uid: data.user.uid,
      email: data.user.email ?? "",
      backendUser: res.data,
    };
    authStore.getState().setUser(user);
    return { firebaseUser: data.user, backendUser: res.data };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(message);
  }
}

// sign up
export async function firebaseSignup({ email, password }: UserFormValues) {
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    const token = await data.user.getIdToken();
    const res = await axios.post(
      "http://localhost:4000/api/auth/signup",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    authStore.getState().setUser({
      email: data.user.email!,
      uid: data.user.uid,
      backendUser: res.data,
    });
    return {
      firebaseUser: data.user,
      backendUser: res.data,
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(message);
  }
}

// log out
export async function firebaseLogout() {
  try {
    await signOut(auth);
    authStore.getState().setUser(null);
    console.log("Signed out.");
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(message);
  }
}
