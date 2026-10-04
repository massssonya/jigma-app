import { Outlet } from "react-router-dom";
import "./index.css";
import { Providers } from "./providers";

export function App() {
	return (
		<Providers>
			<div className="app">
				<main className="content">
					<Outlet />
				</main>
			</div>
		</Providers>
	);
}
