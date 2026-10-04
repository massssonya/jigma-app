import { LoginForm } from "@features/auth/components/LoginForm";
import styles from "./LoginPage.module.css";

export function LoginPage() {
	return (
		<section className={`page ${styles.loginPage}`}>
			<LoginForm />
		</section>
	);
}
