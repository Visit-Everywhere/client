export default defineNuxtConfig({
<<<<<<< HEAD
=======
  css: ["vuetify/lib/styles/main.sass", "@/assets/scss/app.scss"],
  // vite: {
  //   define: {
  //     "process.env.DEBUG": false,
  //   },
  // },
>>>>>>> c6a0779 (nikita lox)
  meta: {
    title: "VE NAXUI",
  },
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
<<<<<<< HEAD
  vue: {
    compilerOptions: {
      directiveTransforms: {
        motion: () => ({
          props: [],
          needRuntime: true,
        }),
      },
    },
  },
  srcDir: "./",
  app: {
    buildAssetsDir: "assets/",
  },
  modules: ["@pinia/nuxt", "@vueuse/nuxt"],
=======

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
  ],
>>>>>>> c6a0779 (nikita lox)

  css: ["@/assets/scss/app.scss"],
  // styleResources: {
  //   sass: ["@/assets/scss/app.scss"],
  // },
  vueuse: {
    ssrHandlers: true,
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
  modern: true,
  build: {
    // extractCSS: true,
    // styleResources: {
    //   sass: "@/assets/scss/app.scss",
    //   hoistUseStatements: true,
    // },
    splitChunks: {
      pages: true,
      layouts: true,
    },
    //   postcss: {
    //     postcssOptions: {
    //       plugins: {
    //         tailwindcss: {},
    //         autoprefixer: {},
    //       },
    //     },
    //   },
    loaders: {
      sass: {
        implementation: require("sass"),
      },
      scss: {
        implementation: require("sass"),
      },
    },
  },
  // plugins: ['@/plugins/flowbite.client.ts'],
});
