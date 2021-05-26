<template>
  <div>
    <div class="row mb-3">
      <div class="form-check col-3 ml-5">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="title" v-model="picked" checked>
        <label class="form-check-label" for="flexRadioDefault1">
          영화 제목
        </label>
      </div>
      <div class="form-check col">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="keywords" v-model="picked">
        <label class="form-check-label" for="flexRadioDefault2">
          키워드
        </label>
      </div>
    </div>
    <form class="row g-3">
      <div class="col-auto">
        <input class="form-control" list="datalistOptions" v-model="inputValue" type="text" @input="searchMovie"
          placeholder="Type to search...">
        <datalist id="datalistOptions" v-if="picked==='title'">
          <option v-for="word in searchWords" :key="word.id">
            {{ word.title_ko }}
          </option>
        </datalist>
      </div>
      <div class="col-auto">  
        <button class="btn btn-light" @click="searchByTitleOrKeywords">
          <i class="fas fa-search"></i>
        </button>
      </div>
      
    </form>
    
  </div>
</template>
<script>
import axios from 'axios'
// import { mapActions } from 'vuex'
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
          axios.get(`http://127.0.0.1:8000/movies/data-list/${event.target.value}/`)
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

<style>

</style>