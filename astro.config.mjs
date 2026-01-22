// @ts-check
// OTHERS //
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import path from "path";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.pixolotechnologies.com",
  integrations: [icon()],
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