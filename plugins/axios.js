import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const domain = "https://api.animakuro.com";
  let publicApi = axios.create({
    baseURL: domain,
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });

  return {
    provide: {
      publicApi: publicApi,
    },
  };
});
