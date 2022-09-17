<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { mapActions } from "vuex";
import router from "@/router";

export default {
    name: "register",
    data() {
        return {
            user: {
                email: "",
                fullName: "",
                password: "",
            }
        };
    },
    methods: {
        ...mapActions('auth', ["register"]),
        ...mapActions('user', ["profile"]),
        async submitLogin(e) {
            e.preventDefault();
            try {
                await this.register(this.user);
                router.push({ path: '/restaurants' })
                await this.profile()
            } catch (err) {
                console.log(err)
            }
        },
    },

}
</script>
    
<template>
    
    <div>
        <form @submit="submitLogin" class="flex h-screen items-center justify-center">
            <div class="flex flex-col h-78 w-72">
                <label for="fullName ">Full Name</label>
                <input class="input bg-blue-100 mb-8 rounded h-8" type="text" key="fullName" v-model="user.fullName" placeholder="Full Name" required/>
                <label for="email">E mail</label>
                <input class="input bg-blue-100 mb-8 rounded h-8" type="email" key="email" v-model="user.email" placeholder="Email" required/>
                <label for="password">Password</label>
                <input class="input bg-blue-100 mb-8 rounded h-8" type="password" key="password" v-model="user.password" placeholder="Passwords" required/>
                <div class="field field-button">
                    <button class="button border rounded w-24 h-8 bg-blue-100" type="submit">Register</button>
                </div>
            </div>
        </form>
    </div>
</template>
    
    
    
<style>

</style>