import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import user from "./user";
import auth from "./auth";
import restaurant from "./restaurant";

axios.defaults.baseURL = "http://147.182.247.5:4001/v1";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    auth,
    restaurant,
  },
});
