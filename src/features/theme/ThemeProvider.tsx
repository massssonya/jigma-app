import {
	useCallback,
	useMemo,
	useState,
    useEffect,
	type ReactNode
} from "react";

import type { ThemeType } from "./types";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
	children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState<ThemeType | null>(() => {
        const currentTheme = localStorage.getItem('theme') ?? 'light'; 
        return currentTheme
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
      }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme(prev => {
            const newTheme = prev == 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', newTheme)
            return newTheme
        })
    }, [])

	const value = useMemo(
		() => ({
			theme,
			toggleTheme
		}),
		[theme, toggleTheme]
	);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
