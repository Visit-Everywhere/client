import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "Animakuro 1",
  },
  srcDir: "./",
  app: {
    buildAssetsDir: "assets/",
  },
});
