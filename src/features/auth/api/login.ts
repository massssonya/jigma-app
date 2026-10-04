import type { LoginForm } from "../types";

interface LoginResponse {
	accessToken: string;
	user: { id: number; username: string };
}
interface ApiError {
	code: string;
	message: string;
}
export async function login(values: LoginForm): Promise<LoginResponse> {
	await new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});
	/* * Сейчас здесь находится mock. *
	Позже этот блок можно заменить обычным fetch: * *
	const response = await fetch(API_URL,
	{
		* method: "POST",
		* headers: {
		* 	* "Content-Type": "application/json",
		* * },
		* * body: JSON.stringify(values),
	* * });
	* * * if (!response.ok) {
	* * const error: ApiError = await response.json();
	* * throw new Error(error.code);
	* * }
	* * return response.json(); */
	const isValid = values.username === "admin" && values.password === "admin";

	if (!isValid) {
		const error: ApiError = {
			code: "INVALID_CREDENTIALS",
			message: "Invalid username or password"
		};
		throw new Error(error.code);
	}
	return {
		accessToken: "mock-access-token",
		user: { id: 1, username: values.username }
	};
}
