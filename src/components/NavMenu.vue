<template>
  <div>
    <RouterLink :to="{name: 'Home'}">Home | </RouterLink>
    <RouterLink :to="{name: 'Board'}">Board | </RouterLink>
    <RouterLink v-if="!isLoggedIn" :to="{name: 'Login'}">Login | </RouterLink>
    <RouterLink :to="{name: 'MovieList'}">MovieList | </RouterLink>
    <RouterLink :to="{name: 'Recommend'}">Recommend | </RouterLink>
    <RouterLink v-if="!isLoggedIn" :to="{name: 'SignUp'}">SignUp</RouterLink>
    <RouterLink v-if="isLoggedIn" :to="{name: 'Logout'}">Logout</RouterLink> 
  
  </div>
  
</template>

<script>
import router from '@/router/index.js'
import { mapGetters } from 'vuex'

export default {
  router,
  name: 'NavMenu',
  computed: {
    ...mapGetters(['isLoggedIn', ])
  },
  

}
</script>

<style>

</style>