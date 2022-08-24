module.exports = {
  mode: "jit",
  // purge: [
  //   './components/**/*.{vue,js}',
  //   './layouts/**/*.vue',
  //   './pages/**/*.vue',
  //   './plugins/**/*.{js,ts}',
  //   './nuxt.config.{js,ts}',
  //   './app.vue',
  // ],
  // content: [
  //   "./node_modules/flowbite/**/*.js",
  //   "./src/**/*.{vue,js,ts,jsx,tsx}",
  //   "./pages/*.vue",
  // ],
  darkMode: false, // or 'media' or 'class'
  // prefix: "suka-",
  theme: {
    extend: {
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
        2: "2",
      },
    },
  },
  variants: { borderColor: ["responsive", "hover", "focus", "focus-within"] },
};
