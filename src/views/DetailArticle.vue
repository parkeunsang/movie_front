<template>
  <div>
    <p>제목 : {{ article.title }}</p>
    <p>내용 : {{ article.content }}</p>
    <div>
      <label for="commentArea">내용:</label>
      <textarea v-model="commentData.content" id="commentArea" cols="30" rows="10"></textarea>
    </div>
    <button @click="createComment(commentData)">댓글쓰기</button>
    
    <p>댓글목록</p>
    
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'DetailArticle',
  data() {
    return {
      article: {},
      comments: [],
      commentData: {content: '', article_pk: ''}
    }
  },
  methods: {
    ...mapActions(['createComment'])
  },
  created() {
    console.log(`http://127.0.0.1:8000/board/articles/${this.$route.query.pk}/`)
    axios.get(`http://127.0.0.1:8000/board/articles/${this.$route.query.pk}/`)
      .then(res => {
        this.article = res.data
        this.commentData.article_pk = String(this.article.id)
        })
      .catch(err => console.error(err))
      
  }
}
</script>

<style>

</style>