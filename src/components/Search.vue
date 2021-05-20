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

    <input v-model="inputValue" @keypress.enter="submitData" type="text">
    <button @click="submitData">검색</button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      inputValue: '',
      picked: '',
    }
  },
  methods: {
    submitData(){
      console.log(this.picked)
    }
  }
}
</script>

<style>

</style>