<template>
  <div class="menu">
    <div class="container">
      <div class="row mt-2">
        <div class="col-8 ps-5 mt-5">
          <div class="d-grid gap-2 fontcheck mt-5">

            <div class="mt-5"></div>
            <div class="mt-2"></div> 
            <RouterLink :to="{name: 'Home'}" class="btn btn-outline-light btn-lg" style="font-size: 0.9vmax;">HOME</RouterLink>
            <!-- <RouterLink :to="{name: 'MovieList'}" tag="button" class="btn btn-outline-light btn-lg">MOVIELIST</RouterLink> -->
            <a class="btn btn-outline-light btn-lg" href="#" @click="getRecentMovies" style="font-size: 0.9vmax;">RECENT MOVIES</a>
            <RouterLink :to="{name: 'Recommend'}" tag="button" class="btn btn-outline-light btn-lg" style="font-size: 0.9vmax;">RECOMMEND</RouterLink>
            <RouterLink :to="{name: 'Board'}" class="btn btn-outline-light btn-lg" style="font-size: 0.9vmax;">BOARD</RouterLink>
            <RouterLink v-if="!isLoggedIn" :to="{name: 'Login'}" class="btn btn-outline-light btn-lg" btn-lg style="font-size: 0.9vmax;">LOGIN</RouterLink>
            <RouterLink v-if="!isLoggedIn" :to="{name: 'SignUp'}" class="btn btn-outline-light btn-lg" style="font-size: 0.9vmax;">SIGNUP</RouterLink>
            <RouterLink v-if="isLoggedIn" :to="{name: 'Logout'}" class="btn btn-outline-light btn-lg" style="font-size: 0.9vmax;">LOGOUT</RouterLink>
          </div>
        </div>
      </div>
    </div>
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

<style scoped>
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

   .menu {
    background-image: url('../../images/메뉴판.png');
    background-repeat : no-repeat;
    background-size : contain;
    height: 90vh;
  }

  @font-face {
    font-family: 'InkLipquid';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/InkLipquid.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  .fontcheck {
    font-family: 'InkLipquid';
    font-size: 0.3vmax;
  }
</style>