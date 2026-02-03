// @ts-check
// OTHERS //
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import path from "path";

// https://astro.build/config
export default defineConfig({
  site: "https://www.pixolotechnologies.com",
  integrations: [
    icon(),
    sitemap({
      customPages: [
        "https://www.pixolotechnologies.com/",
        "https://www.pixolotechnologies.com/services",
        "https://www.pixolotechnologies.com/portfolio",
        "https://www.pixolotechnologies.com/careers",
        "https://www.pixolotechnologies.com/contact",
      ],
    }),
  ],

  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    plugins: [tailwindcss()],
  },

  integrations: [icon()],
});
