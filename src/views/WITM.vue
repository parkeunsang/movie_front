<template>
  <div>
    <LoadingScreen :isLoading="isLoading" />
    <div v-if="!isLoading" class="font">
        <NavMenu/>
        <h2 class="text-light mb-5" style="text-align: center;font-size:2vmax">당신이 찾고자 하는 영화는</h2>
        <div class="container">
          <div class="row">
          </div>
          <div class="row">
          <div id="carouselExampleControls" class="carousel slide offset-1 col-10" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row justify-content-center">
                  <div class="col-3" v-for="(img_link, idx) in movies[0]" :key="idx">
                    <img :src="`https://www.whatismymovie.com/${img_link}`" class="d-block w-100" alt="...">
                  </div>
                </div>
              </div>

              <div class="carousel-item" v-for="(links, idx) in movies.slice(1, movies.length)" :key="idx">
                <div class="row justify-content-center">
                  <div class="col-3" v-for="(img_link, idx) in links" :key="idx">
                    <img :src="`https://www.whatismymovie.com/${img_link}`" class="d-block w-100" alt="...">
                  </div>
                </div>
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          </div>
        </div>
        <!-- <div class="mt-5" style="text-align:center;">
        다시검색 <button class="btn btn-light" type="button" @click="searchByTitleOrKeywords">
                <i class="fas fa-search"></i>
              </button>
        </div> -->
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
      const movieList =  this.$store.state.keywords.movieData.img_list
      // return movieList
      // return typeof(movieList)
      const result = []
      const n = parseInt(movieList.length / 3)
      const other = movieList.length % 3
      for(let i=0; i<n; i++){
        result.push(movieList.splice(0, 3))
      }
      result.push(movieList.splice(0, other))
      return result
    }
  },
}
</script>

<style scoped>
  img{
    height: 20em; 
    box-shadow: 5px 5px 5px #555;
    border-radius: 8%;
  }
  @font-face {
    font-family: 'Bazzi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  .font {
    font-family: 'Bazzi';
    color: rgb(255, 255, 255);
  }
</style>