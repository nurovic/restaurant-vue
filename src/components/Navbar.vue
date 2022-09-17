<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { mapState } from "vuex";

export default {
    name: "restaurants",
    computed: {
        ...mapState("user", ["profile"])
    }
}
</script>
    
    
<template>
    <div class="flex justify-between px-24 pt-6">
        <div class="flex justify-between w-64">
            <router-link to="/">
                Home
            </router-link>
            <router-link to="/restaurants">
                Restaurants
            </router-link>
            <router-link to="/orders">
                Orders
            </router-link>
            <router-link to="/all-items">
                All Items
            </router-link>
        </div>
        <div>
            <div v-if="profile.firstName">
                {{profile.firstName}}
            </div>
            <div v-else class="flex w-32 justify-between">
                <div>{{profile.firstName}}</div>
                <router-link to="/login">
                    Login
                </router-link>
                <router-link to="/register">
                    Register
                </router-link>
            </div>
        </div>
    </div>
</template>
    
    
    
<style>

</style>