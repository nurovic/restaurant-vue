<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { mapActions } from "vuex";
import router from "@/router";

export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      }
    };
  },
  methods: {
    ...mapActions('auth', ["login"]),
    ...mapActions('user', ["profile"]),
    
    async submitLogin(e) {
      e.preventDefault();
      try {
        await this.login(this.user);
        await this.profile()
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
    <form @submit="submitLogin" class="flex h-screen items-center justify-center">
      <div class="flex flex-col h-72 w-72">
        <label for="email">E mail</label>
        <input lass="input bg-blue-100 mb-8 rounded h-8" type="email" key="email" v-model="user.email" required  placeholder="Email"/>
        <label for="password">Password</label>
        <input lass="input bg-blue-100 mb-8 rounded h-8" type="password" key="password" v-model="user.password" required placeholder="Password"/>
        <div class="field field-button">
          <button class="button border rounded w-24 h-8 bg-blue-100" type="submit">Login</button>
        </div>
      </div>
    </form>
  </div>
</template>



<style>

</style>