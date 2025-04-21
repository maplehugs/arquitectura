import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Makes the server accessible externally
    port: 3000,
    allowedHosts: [
      'maplehugs.tech', // Add your domain here
      'localhost',      // Optionally, add localhost
      '0.0.0.0'         // Also allow 0.0.0.0 for external network access
    ],
    proxy: {
      '/api': {
        target: 'http://localhost:8080/backend_war_exploded/api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
