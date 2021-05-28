<template>
  <div class="container fontq">
    잊어버린 당신의 영화를 찾을 방법을 정해주세요.
    <div class="row mb-3 g-3 font">
      
      <div class="form-check col-3">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="title" checked v-model="picked">
        <label class="form-check-label" for="flexRadioDefault1">
          제목
        </label>
      </div>
      <div class="form-check col-3">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="keywords" v-model="picked">
        <label class="form-check-label" for="flexRadioDefault2">
          키워드
        </label>
      </div>
      
      <div class="col-12">
        <form class="row g-3">

          <div class="col-9">
            <input class="deco" list="datalistOptions" v-model="inputValue" type="text" @input="searchMovie"
            @keydown.enter="searchByTitleOrKeywords">
            <datalist id="datalistOptions" v-if="picked==='title'">
              <option v-for="word in searchWords" :key="word.id">
                {{ word.title_ko }}
              </option>
            </datalist>
          </div>

          <div class="col-3">
            <RouterLink :to="{name: 'MovieList'}">
              <button class="btn btn btn-outline-light" type="button" @click="searchByTitleOrKeywords" style="font-size: 0.6vmax;height:90%;">
                <i class="fas fa-search" ></i>
              </button>
            </RouterLink>
          </div>

        </form>
      </div>

    </div>

  </div>
</template>
<script>
import axios from 'axios'
import DRF from '@/api/drf.js'
export default {
  name: 'Search',
  components: {
  },
  data() {
    return {
      inputValue: '',
      picked: '',
      searchWords: [],
    }
  },
  methods: {
    searchMovie(event) {
      if (this.picked==='title') {
        if (event.target.value !== '') {
          axios.get(`${DRF.URL}movies/data-list/${event.target.value}/`)
          .then(res => {
            this.searchWords = res.data
        })
        }
      }
    },
    searchByTitleOrKeywords(event) {
    event.preventDefault()
    if (this.picked === 'title'){
      this.$store.dispatch('getMoviesByTitle', this.inputValue)
    } else {
      this.$store.dispatch('getMoviesByKeywords', this.inputValue)
    }
    },
   
  }
}
</script>

<style scoped>
  .deco {
    border: none;
    border-bottom: 2px solid white;
    outline: none;
    background: transparent;
    width: 100%;
    color: white;
    font-size: 0.9vmax;
    font-family: 'Bazzi';
  }
  .fontq {
    font-family: 'Bazzi';
    font-size: 1.3vmax;
    color: white;
  }
  .font {
    font-family: 'Bazzi';
    font-size: 0.9vmax;
    color: white;
  }
  @font-face {
    font-family: 'Bazzi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
</style>