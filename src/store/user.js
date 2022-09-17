import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const mutations = {
  PROFILE: "profile",
};

const actions = {
  PROFILE: "profile",
};

const user = {
  namespaced: true,
  state: {
    profile: {},
  },
  mutations: {
    [mutations.PROFILE](state, data) {
      state.profile = data;
    },
  },
  actions: {
    async [actions.PROFILE]({ commit }) {
      const res = await axios.post("user/profile");
      commit(mutations.PROFILE, res.data);
    },
  },
  modules: {},
};

export default user;
