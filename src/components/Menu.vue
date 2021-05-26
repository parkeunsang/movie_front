<template>
  <div>
    <div class="d-grid gap-4">
      <RouterLink :to="{name: 'Home'}" class="btn btn-outline-light btn-lg text-left">1. Home</RouterLink>
      <RouterLink :to="{name: 'Board'}" class="btn btn-outline-light btn-lg">Board</RouterLink>
      <RouterLink v-if="!isLoggedIn" :to="{name: 'Login'}" tag="button" 
        class="btn btn-outline-light">Login</RouterLink>
      <a class="btn btn-outline-light" href="#" @click="getRecentMovies">Recent Movies</a>
      <RouterLink :to="{name: 'Recommend'}" tag="button" class="btn btn-outline-light">Recommend</RouterLink>
      <RouterLink v-if="!isLoggedIn" :to="{name: 'SignUp'}" tag="button"
        class="btn btn-outline-light">SignUp</RouterLink> 
      <RouterLink v-if="isLoggedIn" :to="{name: 'Logout'}" tag="button"
        class="btn btn-outline-light">Logout</RouterLink> 
    </div>
   <hr>
    <ul class="list-group list-group-flush">
      <RouterLink :to="{name: 'Home'}" class="nounderline">
        <li class="list-group-item bg-transparent no-border">1. Home</li>
      </RouterLink>
      <hr>
      <RouterLink :to="{name: 'MovieList'}" class="nounderline">
        <li class="list-group-item bg-transparent no-border">2. MovieList</li>
      </RouterLink>
      <hr>
      <li class="list-group-item bg-transparent">A third item</li>
      <li class="list-group-item">A fourth item</li>
      <li class="list-group-item">And a fifth one</li>
    </ul>

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
 methods: {
  getRecentMovies(event) {
  event.preventDefault()
  this.$store.dispatch('getRecentMovies')
  },
}
  

}
</script>

<style>
  .text-left {
  text-align: left !important;
  } 
  .nounderline {
    text-decoration: none !important
  }
  .no-border {
    outline: 0;
    border: none;
    text-decoration:none;
  }
</style>