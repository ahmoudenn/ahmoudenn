import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    site: "https://ahmoudenn.github.io",
    base: "/ahmoudenn",
  integrations: [mdx(), sitemap(), tailwind()],
});
