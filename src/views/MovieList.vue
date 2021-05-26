<template>
  <div>
    <LoadingScreen :isLoading="isLoading" />
    <div v-if="!isLoading">
   
      <NavMenu/>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" 
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content font modal-bg">
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
      
      <div class="container big-margin font">
        <div class="row row-cols-3 row-cols-md-5 g-3">
          <div class="col" v-for="movie in movies" :key="movie.id">
            <div class="card card-bg p-0" style="width: 100%; height: 100%; cursor:pointer;" 
            data-bs-toggle="modal" data-bs-target="#exampleModal" @click="getDetail(movie)">
                <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" 
                class="card-img-top" alt="..." onerror="this.src='https://i.ibb.co/60mkvdG/tmdb.jpg'">
                <div class="card-body">
                  <p class="card-title text-light" style="font-size:17px">{{ movie.title_ko }}</p>
                  <p class="card-text text-light" style="font-size:13px">
                    {{ movie.description | truncate(30) }}
                  </p>
                  <!-- <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal"
                  @click="getDetail(movie)">
                    Detail
                  </button> -->
                </div>
            </div>
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

import LoadingScreen from '@/components/LoadingScreen.vue'

export default {
  name: 'MovieList',
  components: {
    NavMenu,
    MovieDetail,
    LoadingScreen
  },
  data() {
    return {
      movie: '',
      movies: [],
    }
  },
  filters: { 
    truncate: function(string, value) {
      if (string.length > value) {
        return string.substring(0, value) + '...';
      } else {
        return string
      }
        
    }
  },
  methods: {
    getDetail(movie) {
      const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=ko`
      axios.get(url)
      .then((res) => {
        this.movie = res.data
      })
    },

  },
  computed: {
    // movies() {
    //   return this.$store.state.keywords.movieData
    // },
    listType() {
      return this.$store.state.keywords.listType
    },
  },
  created() {
    this.movies = this.$store.state.keywords.movieData
  }
}
</script>

<style scoped>
  @font-face {
    font-family: 'Bazzi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  .font {
    font-family: 'Bazzi';
    color: rgb(255, 255, 255);
  }
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
  .modal-bg{
    background-color: #1d1e1f;
  }

</style>