import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../useAuth";

import type { LoginForm } from "../types";

export function useLogin() {
	const navigate = useNavigate();
	const { login } = useAuth();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const submit = async (values: LoginForm) => {
		setLoading(true);
		setError(null);

		try {
			await login(values);
			navigate("/");
		} catch (error) {
			console.error(error);

			if (error instanceof Error && error.message === "INVALID_CREDENTIALS") {
				setError("Invalid username or password");
			} else {
				setError("Something went wrong. Please try again.");
			}
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		error,
		submit
	};
}
