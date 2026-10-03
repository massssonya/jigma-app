import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
	base: command === "serve" ? "/" : "/jigma-app/",

	plugins: [react(), tsconfigPaths()]
}));
