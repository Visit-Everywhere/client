// import { createVuetify } from "vuetify";
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";

// export default defineNuxtPlugin((nuxtApp) => {
//   const vuetify = createVuetify({
//     components,
//     directives,
//   });

//   nuxtApp.vueApp.use(vuetify);
// });

// import { defineNuxtPlugin } from "#app";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// import Vue from "vue";

// import APIplugin from "./API.js";
// Vue.use(APIplugin);

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});
