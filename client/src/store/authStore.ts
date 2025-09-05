import { create } from "zustand";

type AuthState = {
  user: { email: string; uid: string; backendUser?: unknown } | null;
  setUser: (user: AuthState["user"]) => void;
};

export const authStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
