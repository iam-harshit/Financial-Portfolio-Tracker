import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(new URL(".", import.meta.url).pathname, "./src"),
      "@": path.resolve(__dirname, "./src"),
      "@shadcn/ui": path.resolve(__dirname, "./node_modules/@shadcn/ui/src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Exclude files in the 'assets' folder from being bundled
          if (id.includes("assets")) {
            return null;
          }
        },
      },
    },
  },
});
