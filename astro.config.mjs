// @ts-check
import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";


// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode(),mdx()],
  site: "https://mokuzai-cell.github.io",
  base: "blog",
  trailingSlash: "always",
  markdown: {
    shikiConfig: {
      // 好きなテーマを選べます（例: github-dark, dracula, one-dark-pro など）
      theme: 'one-dark-pro',
      // 行番号を表示したい場合は有効に
      wrap: true,
    },
  },
  i18n:{
    locales:["ja","en"],
    defaultLocale:"ja",
    routing:{prefixDefaultLocale: false},
  }
});