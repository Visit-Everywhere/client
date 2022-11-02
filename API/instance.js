const axios = require("axios").default;

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
  headers: { accept: "aplication/json" },
});
module.exports(instance);
