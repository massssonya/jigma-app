export const MOCK_STORAGE_KEY = "jigma_mock_auth";

const MOCK_DELAY = 1000;

interface MockUser {
	id: number;
	username: string;
}

interface MockSession {
	accessToken: string;
	user: MockUser;
}

function delay(ms: number): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

function getStoredSession(): MockSession | null {
	const rawSession = localStorage.getItem(MOCK_STORAGE_KEY);

	if (!rawSession) {
		return null;
	}

	try {
		return JSON.parse(rawSession) as MockSession;
	} catch {
		localStorage.removeItem(MOCK_STORAGE_KEY);
		return null;
	}
}

export async function api<T>(
	path: string,
	options: RequestInit = {}
): Promise<T> {
	await delay(MOCK_DELAY);

	const method = options.method ?? "GET";

	if (path === "/auth/login" && method === "POST") {
		const body = options.body ? JSON.parse(String(options.body)) : {};

		if (body.username !== "admin" || body.password !== "admin") {
			throw new Error("INVALID_CREDENTIALS");
		}

		const session: MockSession = {
			accessToken: "mock-access-token",
			user: {
				id: 1,
				username: body.username
			}
		};

		localStorage.setItem(MOCK_STORAGE_KEY, JSON.stringify(session));

		return session as T;
	}

	if (path === "/auth/me" && method === "GET") {
		const session = getStoredSession();

		if (!session) {
			throw new Error("Unauthorized");
		}

		return session.user as T;
	}

	if (path === "/auth/logout" && method === "POST") {
		localStorage.removeItem(MOCK_STORAGE_KEY);

		return undefined as T;
	}

	throw new Error(`Mock API endpoint not found: ${method} ${path}`);
}
