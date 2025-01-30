import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import jsconfigPaths from "vite-jsconfig-paths"
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), 
    },
  },
  server: {
		proxy: {
			"/api": {
				target: "http://localhost:5000",
			},
		},
	},
})