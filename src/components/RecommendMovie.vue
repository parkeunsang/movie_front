<template>
  <div>
    <div class="container mt-5">
      <div class="row row-cols-3 row-cols-md-5 g-3">
        <div class="col" v-for="movie in movies" :key="movie.id">
          <div class="card" style="width: 100%; height: 100%;" >
              <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-title">{{ movie.title_ko }}</p>
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

<style scoped>



</style>