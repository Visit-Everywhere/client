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
import { defineNuxtPlugin } from "#app";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import APIplugin from "./plugin/API";
Vue.use(APIplugin)

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    locale: {
      defaultLocale: "ru",
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
