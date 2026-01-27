// @ts-check
// MODULES //
import path from "path";

// OTHERS //
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.pixolotechnologies.com",
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    plugins: [tailwindcss(), sitemap()],
  },
  integrations: [icon()],
});
