<template>
  <div>
    <LoadingScreen :isLoading="isLoading" />
    <div v-if="!isLoading">
      <div>
        <NavMenu/>
        <div class="container">
          <div class="row">
              <div class="col-3" v-for="img_link in movies.img_list" :key=img_link>
                <img :src="`https://www.whatismymovie.com/${img_link}`" alt="...">
              </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
export default {
  name: 'WITM',
  components: {
    NavMenu,
    LoadingScreen
  },
  computed: {
    movies() {
      return this.$store.state.keywords.movieData
    }
  },
}
</script>

<style scoped>
  img{
    height: 18em; 
    box-shadow: 5px 5px 5px #555;
    border-radius: 8%;
  }
</style>