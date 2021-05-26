<template>
  <div class="mb-big">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light container">
      <RouterLink :to="{name: 'Home'}" class="nav-item nav-link text-dark">Home</RouterLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink :to="{name: 'Recommend'}" class="nav-item nav-link">Recommend</RouterLink>
          <RouterLink :to="{name: 'MovieList'}" class="nav-item nav-link">MovieList</RouterLink>
          <a class="nav-link" href="#" @click="getRecentMovies">Recent Movies</a>
          <RouterLink :to="{name: 'Board'}" class="nav-item nav-link">Board</RouterLink>
        </div>
        <div class="navbar-nav">
          <RouterLink  v-if="!isLoggedIn" :to="{name: 'Login'}" class="nav-item nav-link">Login</RouterLink>
          <RouterLink  v-if="!isLoggedIn" :to="{name: 'SignUp'}" class="nav-item nav-link">SignUp</RouterLink>
          <RouterLink  v-if="isLoggedIn" :to="{name: 'Logout'}" class="nav-item nav-link text-right">Logout</RouterLink>
        </div>
      </div>
    </nav>
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
  methods: {
    getRecentMovies(event) {
    event.preventDefault()
    this.$store.dispatch('getRecentMovies')
    }
  }
  

}
</script>

<style>
.text-right {
  text-align: right !important;
}
.mb-big {
  margin-bottom: 5em;
}
</style>