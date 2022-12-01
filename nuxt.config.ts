export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass", "@/assets/scss/app.scss", "@mdi/font/css/materialdesignicons.css"],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  ssr: false,
  // meta: {
  //   title: "VE NAXUI",
  // },
  srcDir: "./",
  // hooks: {
  //   "components:dirs"(dirs) {
  //     // Add ./components dir to the list
  //     dirs.push({
  //       path: join(__dirname, "components/templates"),
  //       prefix: false,
  //     });
  //   },
  // },
  // buildModules: ["vue-sticky-element"],

  // app: {
  //   buildAssetsDir: "assets/",
  // },
  modules: [
    // [
    //   "@pinia/nuxt",
    //   {
    //     autoImports: ["defineStore", "acceptHMRUpdate"],
    //   },
    // ],
    "@vueuse/nuxt",
    "@pinia/nuxt",
  ],

  // styleResources: {
  //   sass: ["@/assets/scss/app.scss"],
  // },
  // vueuse: {
  //   ssrHandlers: true,
  // },
  components: {
    global: true,
    dirs: ["~/components"],
  },
  // modern: true,
  build: {
    // extractCSS: true,
    // styleResources: {
    //   sass: "@/assets/scss/app.scss",
    //   hoistUseStatements: true,
    // },
    transpile: ["vuetify"],
    // splitChunks: {
    //   pages: true,
    //   layouts: true,
    // },
    //   postcss: {
    //     postcssOptions: {
    //       plugins: {
    //         tailwindcss: {},
    //         autoprefixer: {},
    //       },
    //     },
    //   },
    // loaders: {
    //   sass: {
    //     implementation: require("sass"),
    //   },
    //   scss: {
    //     implementation: require("sass"),
    //   },
    // },
  },
  // plugins: ['@/plugins/flowbite.client.ts'],
});
