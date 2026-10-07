import { createBrowserRouter } from "react-router-dom";

import { App } from "./App";

import { PublicOnlyRoute } from "@features/auth/routes/PublicOnlyRoute";
import { ProtectedRoute } from "@features/auth/routes/ProtectedRoute";

import { EditorPage } from "@pages/EditorPage";
import { HomePage } from "@pages/HomePage";
import { LoginPage } from "@pages/LoginPage";
import { NotFoundPage } from "@pages/NotFoundPage";
import { WorkspaceLayout } from "@layouts/WorkspaceLayout/WorkspaceLayout";

const punlicOnlyRoutes = {
	element: <PublicOnlyRoute />,
	children: [
		{
			path: "login",
			element: <LoginPage />
		}
	]
};

const protectedRoutes = {
	element: <ProtectedRoute />,
	children: [
		{
			element: <WorkspaceLayout />,
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
};

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,
			children: [punlicOnlyRoutes, protectedRoutes]
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
