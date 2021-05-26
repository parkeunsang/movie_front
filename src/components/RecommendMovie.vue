<template>
  <div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" 
      aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ movie.title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <MovieDetail v-if="movie!==''" :movie="movie"/>
          </div>
        </div>
      </div>
    </div>

    <div class="container big-margin">
      <div class="row row-cols-3 row-cols-md-5 g-3">
        <div class="col" v-for="movie in movies" :key="movie.id">
          <div class="card card-bg p-0" style="width: 100%; height: 100%;" >
              <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-title text-light">{{ movie.title_ko }}</p>
                <p class="card-text text-light">점수 : {{ movie.score }}</p>

                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal"
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
import MovieDetail from '@/components/MovieDetail.vue'
import axios from 'axios'

const API_KEY = process.env.VUE_APP_TMDB_KEY
export default {
  name: 'MovieList',
  components: {
    MovieDetail
  },
  data() {
    return {
      movie: '',
    }
  },
  methods: {
    getDetail(movie) {
      const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=ko`
      axios.get(url)
      .then((res) => {
        this.movie = res.data
        console.log(res.data)
      })
    }
  },
  computed: {
    // ...mapState(['recommendMovies']),
    movies() {
      return this.$store.state.recommend.recommendMovies.data
    },
  },
}
</script>

<style scoped>
  img{
   height: 18em; 
   box-shadow: 5px 5px 5px #555;
   border-radius: 8%;
  }
  .big-margin{
    margin-top: 5em;
  }

  .card-bg{
    background-color: #1d1e1f;
  }

</style>