import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const { resolve } = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "../ServeVueWithKestrel/ServeVueWithKestrel/wwwroot/app",
    target: "modules",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        constructions: resolve(__dirname, "constructions.html"),
        categories: resolve(__dirname, "categories.html"),
        favorites: resolve(__dirname, "favorites.html"),
        history: resolve(__dirname, "history.html"),
      },

      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
    write: true,
  },
  envPrefix: "APP_",
});
