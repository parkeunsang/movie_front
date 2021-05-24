<template>
  <div>
    <h1>New Article</h1>
    <div>
      <label for="title">제목:</label>
      <input v-model="articleData.title" id="title" type="text" />
    </div>
    <div>
      <label for="content">내용:</label>
      <textarea v-model="articleData.content" id="content" cols="30" rows="10"></textarea>
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
      articleData: { title: '', content: '',}
    }
  },
  methods: {
    ...mapActions(['createArticle'])
  }
}
</script>