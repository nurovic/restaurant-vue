import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import AllItems from '../views/AllItems.vue'
import Restaurants from '../views/Restaurants.vue'
import addRestaurant from '../views/AddRestaurant.vue'
import Orders from '../views/Orders.vue'
import RestaurantItems from '../components/RestaurantItems.vue'
import AddItem from '../components/AddItem.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants,
    beforeEnter: (to, from, next) => {
      if (store.state.user.profile.firstName === undefined) {
        return next({
          name: "login",
        });
      }
      next();
    },
  },
  {
    path: '/add-restaurant',
    name: 'addRestaurant',
    component: addRestaurant,
    beforeEnter: (to, from, next) => {
      if (store.state.user.profile.firstName === undefined) {
        return next({
          name: "login",
        });
      }
      next();
    },
  },
  {
    path: '/restaurant/:id',
    name: 'restaurantItems',
    component: RestaurantItems,
    beforeEnter: (to, from, next) => {
      if (store.state.user.profile.firstName === undefined) {
        return next({
          name: "login",
        });
      }
      next();
    },
  },
  {
    path: '/restaurant/:id/add-item',
    name: 'addItem',
    component: AddItem,
    beforeEnter: (to, from, next) => {
      if (store.state.user.profile.firstName === undefined) {
        return next({
          name: "login",
        });
      }
      next();
    },
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders,
    beforeEnter: (to, from, next) => {
      if (store.state.user.profile.firstName === undefined) {
        return next({
          name: "login",
        });
      }
      next();
    },
  },
  {
    path: '/all-items',
    name: 'allItems',
    component: AllItems,
    beforeEnter: (to, from, next) => {
      if (store.state.user.profile.firstName === undefined) {
        return next({
          name: "login",
        });
      }
      next();
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
