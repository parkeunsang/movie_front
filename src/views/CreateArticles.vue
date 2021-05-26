<template>
  <div>
    <h1>New Article</h1>
    {{ articleData }}
    <div>
      <label for="title">제목:</label>
      <input v-model="articleData.title" value="123" id="title" type="text" >
    </div>
    <div>
      <label for="articleContent">내용:</label>
      <textarea v-model="articleData.content" id="articleContent" cols="30" rows="10"></textarea>
    </div>
    <!-- <div>
      <label for="movie">영화제목:</label>
      <input v-model="articleData.movie" id="movie" type="text" />
    </div> -->
    <div>
      <button @click="createArticle(articleData)">Submit!</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CreateArticles',
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