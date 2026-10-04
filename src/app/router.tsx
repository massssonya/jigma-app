import { createBrowserRouter } from "react-router-dom";

import { App } from "./App";

import { PublicOnlyRoute } from "@features/auth/routes/PublicOnlyRoute";
import { ProtectedRoute } from "@features/auth/routes/ProtectedRoute";

import { EditorPage } from "@pages/EditorPage";
import { HomePage } from "@pages/HomePage";
import { LoginPage } from "@pages/LoginPage";
import { NotFoundPage } from "@pages/NotFoundPage";

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,
			children: [
				{
					element: <PublicOnlyRoute />,
					children: [
						{
							path: "login",
							element: <LoginPage />
						}
					]
				},
				{
					element: <ProtectedRoute />,
					children: [
						{
							index: true,
							element: <HomePage />
						},
						{
							path: "editor",
							element: <EditorPage />
						}
					]
				}
			]
		},
		{
			path: "*",
			element: <NotFoundPage />
		}
	],
	{
		basename: import.meta.env.BASE_URL
	}
);
