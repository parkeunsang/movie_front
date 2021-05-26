<template>
  <div class="font container mt-5" >
    <NavMenu/>
    <img src="../../images/새글사진.jpg" class="img-fluid mb-5" width="100%">

    <div>
      <input v-model="articleData.title" value="123" id="title" type="text" placeholder="   제목을 입력하세요" style="width:100%;">
    </div>
    <br>
    <div>
      <textarea v-model="articleData.content" id="articleContent" cols="30" rows="10" placeholder="   내용을 입력하세요" style="width:100%;"></textarea>
      
    </div>
    <!-- <div>
      <label for="movie">영화제목:</label>
      <input v-model="articleData.movie" id="movie" type="text" />
    </div> -->
    <div>
        <button @click="createArticle(articleData)" class="btn btn-warning" style="float: right;">Submit!</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import NavMenu from '@/components/NavMenu.vue'
export default {
  name: 'CreateArticles',
  components: {
    NavMenu,
  },
  data() {
    return {
      articleData: { 
        title: this.$store.getters.article.title ,
        content: this.$store.getters.article.content,
        pk: this.$store.getters.article.id,
        method: '',
        }
    }
  },
  methods: {
    ...mapActions(['createArticle'])
  },
  created() {
    if (this.$store.getters.article.title === ''){
      this.articleData.method = 'post'
    } else{
      this.articleData.method = 'put'
    }
  }
}
</script>

<style scoped>
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