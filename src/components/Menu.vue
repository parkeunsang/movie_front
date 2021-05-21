<template>
  <div>
    <RouterLink :to="{name: 'Home'}" tag="button">Home</RouterLink>
    <RouterLink :to="{name: 'Board'}" tag="button">Board</RouterLink>
    <RouterLink :to="{name: 'Login'}" tag="button">Login</RouterLink>
    <RouterLink :to="{name: 'MovieList'}" tag="button">MovieList</RouterLink>
    <RouterLink :to="{name: 'Recommend'}" tag="button">Recommend</RouterLink>
    <RouterLink :to="{name: 'SignUp'}" tag="button">SignUp</RouterLink> 
  
  </div>
  
</template>

<script>
import router from '@/router/index.js'

export default {
  router,
  name: 'Menu',
  

}
</script>

<style>

</style>