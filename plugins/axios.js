import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const domain = "http://localhost:5000/";
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
