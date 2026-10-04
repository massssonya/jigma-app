import { api } from "@shared/api/client";

import type { AuthSession, LoginForm, User } from "@features/auth/types";

export function login(values: LoginForm): Promise<AuthSession> {
	return api<AuthSession>("/auth/login", {
		method: "POST",
		body: JSON.stringify(values)
	});
}

export function getMe(): Promise<User> {
	return api<User>("/auth/me", {
		method: "GET"
	});
}

export function logout(): Promise<void> {
	return api<void>("/auth/logout", {
		method: "POST"
	});
}
