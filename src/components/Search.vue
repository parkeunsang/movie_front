<template>
  <div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="title" v-model="picked" checked>
      <label class="form-check-label" for="flexRadioDefault1">
        Default radio
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="keywords" v-model="picked">
      <label class="form-check-label" for="flexRadioDefault2">
        Default checked radio
      </label>
    </div>

    <input v-model="inputValue" type="text">
    <RouterLink :to="{name: 'MovieList'}"><button @click="getKeywords({picked, inputValue})">검색</button></RouterLink>
    
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'Search',
  components: {
  },
  data() {
    return {
      inputValue: '',
      picked: '',
    }
  },
  methods: {
    ...mapActions(['getKeywords'])
  }
}
</script>

<style>

</style>