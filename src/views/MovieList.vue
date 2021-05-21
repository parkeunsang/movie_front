<template>
  <div>
    <NavMenu/>
    <div class="container">

    <div class="row">
      <div class="card col-3" style="width: 18rem;" v-for="movie in movies" :key="movie.id">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title_ko }}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import axios from 'axios'
export default {
  name: 'MovieList',
  components: {
    NavMenu,
  },
  data() {
    return {
      movies: ''
    }
  },
  created() {
    axios.get('http://127.0.0.1:8000/movies/')
      .then((res) => {
        this.movies = res.data
        console.log(this.movies)
      })
    // console.log( this.$store.state.keywords.picked)
    // console.log( this.$store.state.keywords.inputValue)
  }
}
</script>

<style>

</style>