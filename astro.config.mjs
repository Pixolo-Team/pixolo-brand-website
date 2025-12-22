// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://www.pixolotechnologies.com",

  integrations: [
    icon(),
    react(),
    tailwind(), 
    sitemap(),
  ],
});
