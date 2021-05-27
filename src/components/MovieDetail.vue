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
        <p style="text-align:right;font-size:1vmax">{{ scoretotext(value) }}</p>
        <div class="slidecontainer" style="position:absolute;right:10%">
          <input type="range" value='5' class="form-range" min="0" max="10" v-model="value" step="1" id="userscore">
        </div>
        <br>
        
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
    },
    scoretotext(value) {
      let scoretext = ''
      let score = String(value)
      if (score === '0') {
        scoretext = '쓰레기'
      } else if ( score === '1' ) {
        scoretext = '다시는 보고싶지 않은 영화'
      } else if ( score === '2' ) {
        scoretext = '돈받고 볼 영화'
      } else if ( score === '3' ) {
        scoretext = '이거 볼 바에 공부할 영화'
      } else if ( score === '4' ) {
        scoretext = '공짜면 볼만한 영화'
      } else if ( score === '5' ) {
        scoretext = '나름 괜춘한 영화'
      } else if ( score === '6' ) {
        scoretext = '한번쯤 볼만한 영화'
      } else if ( score === '7' ) {
        scoretext = '걷다가 생각날 영화'
      } else if ( score === '8' ) {
        scoretext = '널리 알리고 싶은 영화'
      } else if ( score === '9' ) {
        scoretext = '다시 보고싶은 영화'
      } else if ( score === '10' ) {
        scoretext = '인생 영화'
      }
      return scoretext
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
  width: 30%; 
}
.slider:hover {
  opacity: 1; 
}
</style>