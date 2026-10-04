import {
	useCallback,
	useEffect,
	useMemo,
	useState,
	type ReactNode
} from "react";

import {
	getMe,
	login as loginRequest,
	logout as logoutRequest
} from "./api/auth";

import { AuthContext } from "./AuthContext";

import type { AuthSession, LoginForm, User } from "./types";

interface AuthProviderProps {
	children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	const refreshUser = useCallback(async () => {
		try {
			const currentUser = await getMe();

			setUser(currentUser);
		} catch {
			setUser(null);
		}
	}, []);

	const login = useCallback(async (values: LoginForm) => {
		const session: AuthSession = await loginRequest(values);

		setUser(session.user);
	}, []);

	const logout = useCallback(async () => {
		try {
			await logoutRequest();
		} finally {
			setUser(null);
		}
	}, []);

	useEffect(() => {
		let cancelled = false;

		async function initializeAuth() {
			try {
				const currentUser = await getMe();

				if (!cancelled) {
					setUser(currentUser);
				}
			} catch {
				if (!cancelled) {
					setUser(null);
				}
			} finally {
				if (!cancelled) {
					setLoading(false);
				}
			}
		}

		initializeAuth();

		return () => {
			cancelled = true;
		};
	}, []);

	const value = useMemo(
		() => ({
			user,
			loading,
			isAuthenticated: user !== null,
			login,
			logout,
			refreshUser
		}),
		[user, loading, login, logout, refreshUser]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
