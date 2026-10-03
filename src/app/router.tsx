
import { Layout } from "@layouts/Layout";
import { EditorPage } from "@pages/EditorPage";
import { HomePage } from "@pages/HomePage";
import { NotFoundPage } from "@pages/NotFoundPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
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
	},
	{
		path: "*",
		element: <NotFoundPage />
	}
]);
