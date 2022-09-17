<script>
import { mapActions } from "vuex";
import router from "@/router";

export default {
    name: "addItem",
    data() {
        return {
            item: {
                name: "",
                description: "",
                price: null,
            }
        };
    },
    methods: {
    ...mapActions('restaurant', ["addItem"]),
    ...mapActions('restaurant', ["addRestaurantItem"]),
    async submitItem(e) {
      e.preventDefault();
      try {
        const itemData = await this.addItem(this.item);
        const addRestaurant = {
            itemId: itemData.id,
            resturantId: this.$route.params.id
        }
        await this.addRestaurantItem(addRestaurant)
        await router.push({ path: `/restaurant/${this.$route.params.id}` })

      } catch (err) {
        console.log(err)
      }
    },
},

}
</script>
        
        
<template>
    <div>
        <h1 class="font-bold text-xl">Add Item</h1>

        <form @submit="submitItem" class="flex h-screen items-center justify-center">
            <div class="flex flex-col h-78 w-72">
                <label for="name">Food Name</label>
            <input class="input bg-blue-100 mb-8 rounded h-8" type="name" key="name" v-model="item.name" required placeholder="Food Name"/>

            <label for="description">Description</label>
            <input class="input bg-blue-100 mb-8 rounded h-8" type="description" key="description" v-model="item.description" required placeholder="Description"/>

            <label for="price">Price</label>
            <input class="input bg-blue-100 mb-8 rounded h-8" type="text" key="price" v-model.number="item.price" required placeholder="Item Price"/>

            <div class="field field-button">
                <button class="button border rounded w-24 h-8 bg-blue-100" type="submit">Save</button>
            </div>
            </div>
        </form>
    </div>
</template>
        
        
        
<style>

</style>