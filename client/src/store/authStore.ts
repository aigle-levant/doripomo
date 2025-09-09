import { create } from "zustand";
import { type AuthUser } from "../types/authTypes";

type AuthState = {
  user: AuthUser | null;
  loading: boolean;
  setUser: (user: AuthUser | null) => void;
};

export const authStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user, loading: false }),
}));
