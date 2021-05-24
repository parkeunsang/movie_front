<template>
  <div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="title" v-model="picked" checked>
      <label class="form-check-label" for="flexRadioDefault1">
        영화 제목
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="keywords" v-model="picked">
      <label class="form-check-label" for="flexRadioDefault2">
        키워드
      </label>
    </div>

    <input class="form-control" list="datalistOptions" v-model="inputValue" type="text" @input="searchMovie"
      placeholder="Type to search...">
      <datalist id="datalistOptions" v-if="picked==='title'">
        <option v-for="word in searchWords" :key="word.id">
          {{ word.title_ko }}
        </option>
      </datalist>
    <RouterLink :to="{name: 'MovieList'}">
      <button @click="getKeywords({picked, inputValue})">검색</button>
    </RouterLink>
      
  </div>
</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex'
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
    ...mapActions(['getKeywords']),
    searchMovie(event) {
      if (this.picked==='title') {
        if (event.target.value !== '') {
          axios.get(`http://127.0.0.1:8000/movies/data-list/${event.target.value}/`)
          .then(res => {
            this.searchWords = res.data
        })
        }
      }
    }
  }
}
</script>

<style>

</style>