<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { mapActions } from "vuex";
import Loading from '../components/Loading.vue'

export default {
    name: "orders",
    components: {
        Loading
    },
    data() {
        return {
            orders: [],
            isLoading: true

        }
    },
    methods: {
        ...mapActions('restaurant', ["getOrders"]),
    },
    async created() {
        this.orders = await this.getOrders()
        this.isLoading = false
    }

}
</script>
    
<template>
    <div>
        <h1>Orders</h1>
        <div class="flex flex-row mb-8 mt-12 justify-center font-bold text-blue-200">
            <div class="mr-8">Restaurant Name</div>
            <div class="mr-8">Restaurant Phone</div>
            <div class="mr-8">Item</div>
            <div class="mr-8">Price</div>
        </div>
        <div v-if="isLoading">
            <Loading />
        </div>
        <div v-else>
            <div v-for="order in orders" :key="order.id">
                <div class="flex flex-row mb-8 mt-12 justify-center border p-2">
                    <h1 class="font-bold w-36"> {{order.resturant.name}}</h1>
                    <h1 class="font-bold w-36">{{order.resturant.phone}}</h1>

                    <div v-for="item in order.items" :key="item.id" class="flex flex-row justify-center">
                        <p class="mr-8">{{item.name}}</p>
                        <p class="mr-8">{{item.price}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
    
    
<style>

</style>