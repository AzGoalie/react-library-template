import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: packageJson.name,
      fileName: packageJson.name,
    },
    rollupOptions: {
      external: Object.keys(packageJson.peerDependencies),
      output: {
        globals: {
          react: "react",
        },
      },
    },
  },
});
