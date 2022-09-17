<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { mapState, mapActions } from "vuex";
import Loading from '../components/Loading.vue'

export default {
    name: "all-items",
    components: {
        Loading
    },
    data() {
        return {
            isLoading: true
        }
    },
    computed: {
        ...mapActions("restaurant", ["getAllItems"]),
        ...mapState("restaurant", ["allItems"])
    },
    async mounted() {
        await this.getAllItems
        this.isLoading = false
        console.log(this.allItems)

    }
}
</script>
    
    
<template>
    <div class="flex flex-col justify-center px-24">
        <h1 class="text-xl font-bold mb-12">RESTAURANTS</h1>

        <div class="flex flex-row justify-center font-bold text-yellow-600">
            <div class="mr-28">Item Name</div>
            <div>Price</div>
        </div>
        <div v-if="isLoading">
            <Loading />
        </div>
        <div v-else v-for="item in allItems" :key="item.id">
            <div class="flex flex-row mb-8 mt-12 justify-center">
                <h1 class="font-bold w-36">{{item.name}}</h1>
                <span class="w-56"> {{item.price}}</span>
            </div>

        </div>
    </div>
</template>
    
    
    
<style>

</style>