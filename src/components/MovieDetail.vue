<template>
  <div class="container">
    
    <div class="row">
    <div class="col-4">

    <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="card-img-top" alt="..."
    onerror="this.src='https://i.ibb.co/60mkvdG/tmdb.jpg'">
    </div>
    <div class="col-7">
        <h2>{{ movie.title }}</h2>
        <p class="mt-3"> 
          {{ genres }}
        </p>
        <p>개봉일 : {{ movie.release_date }}</p>
        <p>상영시간 : {{ movie.runtime }}</p>
        <p>예산 : {{ toMoney(movie.budget) }}</p>
        <p>수익: {{ toMoney(movie.revenue) }}</p>        
        <p>TMDB 평점 : {{ movie.vote_average }}</p>
        <p>사이트 유저 평점 : {{ score }}</p>
        
        <div class="slidecontainer">
          <input type="range" class="form-range" min="0" max="10" v-model="value" step="1" id="userscore">
        </div>
        <button @click="evaluationScore({movie_id: movie.id, value: value})" class="btn btn-warning" style="float: right;">평점 매기기</button>
      
    </div>
    <div class="row mt-3">
      <hr>
      <p>{{ movie.overview }}</p>
    </div>
  </div>
</div>
</template>

<script>
// import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'MovieDetail',
  props: {
    movie: Object,
    score: Object,
  },
  data() {
    return {value: 0}
  },
  methods: {
    ...mapActions(['evaluationScore']),

    toMoney(value){
      let money = String(value*1117).split("").reverse().join("")
      let result = ''
      for (let i=0; i<money.length; i++){
        result += money[i]
        if (i % 3 === 2){
          result += ','
        }
      }
      return result.split("").reverse().join("") + '원'
    }
  },
  computed: {
    genres() {
      const genres = this.movie.genres.map(element => element.name)
      let genresString = ''
      genres.forEach(genre => {
        genresString += genre + ', '
      })
      return genresString.slice(0, genresString.length-2)
    },
  },
}
</script>

<style scoped>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 90%;
  height: auto;
}
.slidecontainer {
  width: 50%; 
}
.slider:hover {
  opacity: 1; 
}
</style>