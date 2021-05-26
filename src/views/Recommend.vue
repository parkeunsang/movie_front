<template>
  <div>
    <NavMenu/>
    <div v-if="isFirst">
      <Wordbutton/>
    </div>
    <div v-if="!isFirst">
      <RecommendMovie/>
    </div>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import Wordbutton from '@/components/Wordbutton/Wordbutton.vue'
import RecommendMovie from '@/components/RecommendMovie.vue'
export default {
  name: 'Recommend',
  components: {
    NavMenu,
    Wordbutton,
    RecommendMovie,
  },
  computed: {
    isFirst() {
      return this.$store.state.recommend.firstPage
    },
  },
}
</script>

<style>

</style>