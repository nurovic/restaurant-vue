<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { mapState, mapActions } from "vuex";
import router from "@/router";
import Loading from '../components/Loading.vue'

export default {
    name: "restaurants",
    components: {
    Loading
},
    data(){
        return{
            isLoading: true
        }
    },
    computed: {
        ...mapActions("restaurant", ["getRestaurants"]),
        ...mapState("restaurant", ["restaurants"])
    },
    async mounted() {
        await this.getRestaurants;
        this.isLoading = false

    },
    methods: {
        getItems(id) {
            router.push({ path: `/restaurant/${id}` })
        }
    }
}
</script>


<template>
    <div class="flex flex-col justify-center px-24">
        <h1 class="text-xl font-bold mb-12">RESTAURANTS</h1>
        <div v-if="isLoading">
            <Loading />
        </div>
        <div v-else>
            <router-link to="/add-restaurant" class="font-bold text-xl text-yellow-700 mb-12">Add Restaurant
            </router-link>

            <div v-for="restaurant in restaurants" :key="restaurant.id">
                <div class="flex flex-row mb-8 mt-12 justify-center">
                    <h1 class="font-bold w-36">{{restaurant.name}}</h1>
                    <span class="w-56"> {{restaurant.phone}}</span>
                    <button @click="getItems(restaurant.id)"
                        class="border-2 ml-24 border-yellow-500 rounded">Items</button>
                </div>

            </div>
        </div>
    </div>
</template>



<style>

</style>