<template>
  <div class="container">
    
    <div class="row">
    <div class="col-6">

    <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="card-img-top" alt="...">
    </div>
    <div class="col-6">
        {{ genres }}
        {{ movie.budget }}
        {{ movie.overview }}
        {{ movie.release_date }}
        {{ movie.revenue }}
        {{ movie.runtime }}
        {{ movie.vote_average }}
    </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'MovieDetail',
  props: {
    movie: Object
  },
  computed: {
    genres() {
      console.log('t', this.movie.genres[0].name)
      const genres = this.movie.genres.forEach(element => element.name)
      console.log(genres)
      return genres
    }
  }
}
</script>

<style scoped>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 100%;
  height: 100%;
}
</style>