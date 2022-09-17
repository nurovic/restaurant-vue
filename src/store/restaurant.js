import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const mutations = {
  GET_RESTAURANTS: "getRestaurants",
};

const actions = {
  GET_RESTAURANTS: "getRestaurants",
  ADD_RESTAURANT: "addRestaurant",
  GET_RESTAURANT_ITEMS: "getRestaurantItems",
  ADD_RESTAURANT_ITEM: "addRestaurantItem",
  ADD_ITEM: "addItem",
  ADD_TO_ORDER: "addToOrder",
  GET_ORDERS: "getOrders",
};

const restaurant = {
  namespaced: true,
  state: {
    restaurants: [],
  },
  mutations: {
    [mutations.GET_RESTAURANTS](state, data) {
      state.restaurants = data;
    },
  },
  actions: {
    async [actions.ADD_RESTAURANT](_, data) {
      await axios.post("/resturant", data);
    },
    async [actions.GET_RESTAURANTS]({ commit }) {
      const res = await axios.get("/resturant");
      commit(mutations.GET_RESTAURANTS, res.data);
    },
    async [actions.GET_RESTAURANT_ITEMS](_, id) {
      const res = await axios.get(`/resturant/${id}`);
      return res.data;
    },
    async [actions.ADD_RESTAURANT_ITEM](_, data) {
      const res = await axios.put("/resturant/item/${id}", data);
      return res.data;
    },
    async [actions.ADD_ITEM](_, data) {
      const res = await axios.post("/item", data);
      return res.data;
    },
    async [actions.ADD_TO_ORDER](_, data) {
      await axios.post("/user/order", {
        items: [data.items],
        resturantId: data.resturantId,
      });
    },
    async [actions.GET_ORDERS]() {
      const res = await axios.get("/user/orders");
      return res.data;
    },
  },
  modules: {},
};

export default restaurant;
