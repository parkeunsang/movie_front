<template>
  <div class="container">
    
    <div class="row">
    <div class="col-6">

    <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="card-img-top" alt="...">
    </div>
    <div class="col-6">
        <p>장르 : {{ genres }}</p>
        <p>예산 : {{ movie.budget }}</p>
        <p>설명 : {{ movie.overview }}</p>
        <p>개봉일 : {{ movie.release_date }}</p>
        <p>수익: {{ movie.revenue }}</p>        
        <p>상영시간 : {{ movie.runtime }}</p>
        <p>평점 : {{ movie.vote_average }}</p>
        

        <!-- <div v-if="movie !== {}">
          
        </div> -->
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
      const genres = this.movie.genres.map(element => element.name)
      console.log(genres)
      return genres
    }
  },
  created() {
    console.log(this.movie)
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