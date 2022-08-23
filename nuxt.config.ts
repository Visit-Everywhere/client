import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "VE",
  },
  srcDir: "./",
  app: {
    buildAssetsDir: "assets/",
  },
});
