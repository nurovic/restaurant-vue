<script>
import { mapActions } from "vuex";
import Loading from '../components/Loading.vue'

export default {
  name: "restaurantItems",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Loading
  },
  methods: {
    ...mapActions("restaurant", ["getRestaurantItems"]),
    ...mapActions("restaurant", ["addToOrder"]),

    async addOrder(id) {
      const orderData = {
        items: id,
        resturantId: this.$route.params.id
      }
      await this.addToOrder(orderData)
    }
  },
  data() {
    return {
      restaurantData: {},
      isLoading: true
    };
  },
  async mounted() {
    this.restaurantData = await this.getRestaurantItems(this.$route.params.id);
    this.isLoading = false
  },
}
</script>
    
    
<template>
  <div>
    <div v-if="isLoading">
      <Loading />
    </div>
    <div v-else>
      <router-link class="font-bold text-xl text-yellow-700 mb-24" :to="`/restaurant/${this.$route.params.id}/add-item`">
      Add Item</router-link>
    <div class="flex flex-row justify-center font-bold mt-8">

      <h1 class="mr-8"> <span class="text-gray-500"> Restaurant </span>{{restaurantData.name}}</h1>
      <h1> <span class="text-gray-500"> Phone </span>{{restaurantData.phone}}</h1>
    </div>
    <div class="flex flex-row mb-8 mt-12 justify-center text-xl">
      <div class="mr-12">Item Name</div>
      <div> Item Price</div>
    </div>
    <div v-if="!restaurantData.items.length">
      <h1> No Items</h1>
    </div>
    <div v-else v-for="item in restaurantData.items" :key="item.id">
      <div class="flex flex-row mb-8 mt-12 justify-center">
        <h1 class="font-bold w-36">{{item.name}}</h1>
        <span class="w-56">{{item.price}}</span>
        <button class="border-2 ml-24 border-yellow-500 rounded" @click="addOrder(item.id)">Add Order</button>
      </div>
    </div>
    </div>
  </div>
</template>
    
    
    
<style>

</style>