<template>
  <div>
    <RouterLink :to="{name: 'Home'}" tag="button">Home</RouterLink>
    <RouterLink :to="{name: 'Board'}" tag="button">Board</RouterLink>
    <RouterLink v-if="!isLoggedIn" :to="{name: 'Login'}" tag="button">Login</RouterLink>
    <RouterLink :to="{name: 'MovieList'}" tag="button">MovieList</RouterLink>
    <RouterLink :to="{name: 'Recommend'}" tag="button">Recommend</RouterLink>
    <RouterLink v-if="!isLoggedIn" :to="{name: 'SignUp'}" tag="button">SignUp</RouterLink> 
    <RouterLink v-if="isLoggedIn" :to="{name: 'Logout'}" tag="button">Logout</RouterLink> 
  </div>
  
</template>

<script>
import router from '@/router/index.js'
import { mapGetters } from 'vuex'

export default {
  router,
  name: 'Menu',
  computed: {
    ...mapGetters(['isLoggedIn', ])
  },
  

}
</script>

<style>

</style>