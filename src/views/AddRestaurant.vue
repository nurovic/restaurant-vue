<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { mapActions } from "vuex";
import router from "@/router";

export default {
  name: "addRestaurant",
  data() {
    return {
      restaurant: {
        name: "",
        phone: "",
      }
    };
  },
  methods: {
    ...mapActions('restaurant', ["addRestaurant"]),
    async submitLogin(e) {
      e.preventDefault();
      try {
        await this.addRestaurant(this.restaurant);
        router.push({ path: '/restaurants' })
      } catch (err) {
        console.log(err)
      }
    },
  },

}
</script>

<template>
  <div>
    <h1 class="font-bold text-xl">Add Restaurant</h1>
    <form @submit="submitLogin" class="flex h-screen items-center justify-center">
      <div class="flex flex-col h-78 w-72">
        <label for="name">Restaurant Name</label>
        <input class="input bg-blue-100 mb-8 rounded h-8" type="name" key="name" v-model="restaurant.name" placeholder="Restaurant Name" required/>
        <label for="phone">Restaurant Phone</label>
        <input class="input bg-blue-100 mb-8 rounded h-8" type="phone" key="phone" v-model="restaurant.phone" placeholder="Restaurant Phone" required />


        <div class="field field-button">
          <button class="button border rounded w-24 h-8 bg-blue-100" type="submit">Save</button>
        </div>
      </div>
    </form>
  </div>
</template>



<style>

</style>