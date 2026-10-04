export interface LoginForm {
	username: string;
	password: string;
	remember: boolean;
}
export interface User {
	id: number;
	username: string;
}
export interface AuthSession {
	accessToken: string;
	user: User;
}
