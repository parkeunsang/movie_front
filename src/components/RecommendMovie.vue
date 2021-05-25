<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="card col-3" style="width: 18rem;" v-for="movie in movies" :key="movie.id">
            <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ movie.title_ko }}</h5>
              <p class="card-text">점수 : {{ movie.score }}, {{ movie.id }}</p>

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
// import MovieDetail from '@/components/MovieDetail.vue'
import axios from 'axios'
import { mapState } from 'vuex'
const API_KEY = process.env.VUE_APP_TMDB_KEY
export default {
  name: 'MovieList',
  components: {
    // MovieDetail
  },
  data() {
    return {
    }
  },
  methods: {
    getDetail(movie) {
      const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=ko`
      axios.get(url)
      .then((res) => {
        this.movie = res.data
      })
    }
  },
  computed: {
    ...mapState(['recommendMovies']),
    movies() {
      return this.$store.state.recommend.recommendMovies.data
    },
  },
}
</script>

<style>

</style>