import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/mediQARA/", // Use repo name for GitHub Pages
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
