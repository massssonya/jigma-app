import { createContext } from "react";

import type { LoginForm, User } from "./types";

export interface AuthContextValue {
	user: User | null;
	loading: boolean;
	isAuthenticated: boolean;

	login: (values: LoginForm) => Promise<void>;
	logout: () => Promise<void>;
	refreshUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
