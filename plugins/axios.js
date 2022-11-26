import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const domain = "https://api.animakuro.com";
  let publicApi = axios.create({
    baseUrl: domain,
  });

  return {
    provide: {
      publicApi: publicApi,
    },
  };
});
