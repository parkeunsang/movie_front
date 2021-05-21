<template>
  <div>
    <RouterLink :to="{name: 'Home'}">Home | </RouterLink>
    <RouterLink :to="{name: 'Board'}">Board | </RouterLink>
    <RouterLink :to="{name: 'Login'}">Login | </RouterLink>
    <RouterLink :to="{name: 'MovieList'}">MovieList | </RouterLink>
    <RouterLink :to="{name: 'Recommend'}">Recommend | </RouterLink>
    <RouterLink :to="{name: 'SignUp'}">SignUp</RouterLink> 
  
  </div>
  
</template>

<script>
import router from '@/router/index.js'

export default {
  router,
  name: 'NavMenu',
  

}
</script>

<style>

</style>