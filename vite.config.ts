import { defineConfig } from "vite";
import path from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
    },
  },
  server: {
    open: true,
    proxy: {
      "/api": {
        target: "https://api.foleon.com",
        changeOrigin: true,
        rewrite: (path) => path.replace("/api", ""),
      },
    },
  },
  plugins: [svgr(), reactRefresh()],
});
