<template>
  <div>
    <NavMenu/>
  </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import NavMenu from '@/components/NavMenu.vue'

export default {
  name: 'MovieList',
  components: {
    NavMenu,
    },
  created() {
    axios.get('http://127.0.0.1:8000/movies/')
      .then((res) => {
        console.log(res)
      })
    // console.log( this.$store.state.keywords.picked)
    // console.log( this.$store.state.keywords.inputValue)
  }
}
</script>

<style>

</style>