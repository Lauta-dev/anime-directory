import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	plugins: [react()],
	resolve: {
		extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
	},
});
