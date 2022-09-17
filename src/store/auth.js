import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const actions = {
  LOGIN: "login",
  REGISTER: "register",
  REFRESH: "refresh",
};

const auth = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async [actions.REGISTER](_, register) {
      const res = await axios.post("/auth/local/signup", register);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.access_token}`;
    },
    async [actions.LOGIN](_, login) {
      const res = await axios.post("/auth/local/signin", login);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.access_token}`;
    },
  },
  modules: {},
};

export default auth;
