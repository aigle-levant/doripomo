import { createContext } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Context only (no provider here)
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
