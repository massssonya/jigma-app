import { createContext } from "react";
import type {ThemeType} from "./types";

export interface ThemeContextValue {
	theme: ThemeType;

	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
