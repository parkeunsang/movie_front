<template>
  <div>
    <NavMenu/>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ movie.title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <MovieDetail :movie="movie"/>
          </div>
        </div>
      </div>
  </div>


    <div class="container">

    <div class="row">
      <div class="card col-3" style="width: 18rem;" v-for="movie in movies" :key="movie.id">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title_ko }}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
            @click="getDetail(movie)">
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import MovieDetail from '@/components/MovieDetail.vue'
import axios from 'axios'
const API_KEY = process.env.VUE_APP_TMDB_KEY
export default {
  name: 'MovieList',
  components: {
    NavMenu,
    MovieDetail
  },
  data() {
    return {
      movies: '',
      movie: {},
    }
  },
  methods: {
    getDetail(movie) {
      console.log('나중에쓸거',movie)
      const url = `https://api.themoviedb.org/3/movie/${634649}?api_key=${API_KEY}&language=ko`
      axios.get(url)
      .then((res) => {
        this.movie = res.data
      })
    }
  },
  created() {
    axios.get('http://127.0.0.1:8000/movies/')
      .then((res) => {
        this.movies = res.data
      })
    // console.log( this.$store.state.keywords.picked)
    // console.log( this.$store.state.keywords.inputValue)
  }
}
</script>

<style>

</style>