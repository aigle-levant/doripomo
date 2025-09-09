import { auth } from "../config/firebase";

export async function authFetch(input: RequestInfo, init: RequestInit = {}) {
  const user = auth.currentUser;
  if (!user) throw new Error("Not authenticated");
  const token = await user.getIdToken();
  const headers = {
    ...(init.headers || {}),
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  return fetch(input, { ...init, headers });
}
