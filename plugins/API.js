import API from "../API/index";

export default {
  install(Vue) {
    Vue.prototype.$api = API;
  },
};
