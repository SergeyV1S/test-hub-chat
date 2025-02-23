import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import path from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Igniz AI",
        short_name: "Igniz AI",
        description: "Igniz AI",
        theme_color: "#ffffff",
        lang: "ru",
        start_url: "/",
        icons: [
          { purpose: "maskable", sizes: "512x512", src: "icon512_maskable.png", type: "image/png" },
          { purpose: "any", sizes: "512x512", src: "icon512_rounded.png", type: "image/png" }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  define: {
    "process.env": process.env
  },
  envPrefix: ["VITE_", "BASE_"]
});
