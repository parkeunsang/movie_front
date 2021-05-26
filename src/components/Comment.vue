<template>
  <div>
    <div>
      <label for="commentArea">내용:</label> 
      <textarea v-model="commentData.content" id="commentArea" cols="30" rows="10"></textarea>
    </div>
    <button @click="createComment(commentData)">댓글쓰기</button>
    <p>댓글목록</p>
    <p v-for="comment in comments" :key="comment.id">
      내용 : {{ comment.content }}, 작성자: {{ comment.user }} 
      <button @click="deleteComment(comment.comment_id)">삭제</button>
    </p>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'Comment',
  components:{
  },
  data() {
    return {
      comments: [],
      commentData: {content: '', article_pk: ''}
    }
  },
  methods: {
    ...mapActions(['createComment','deleteComment'])
  },
  created() {
    axios.get(`http://127.0.0.1:8000/board/articles/${this.$route.query.pk}/`)
      .then(res => {
        this.article = res.data
        this.commentData.article_pk = String(this.article.id)
        axios.get(`http://127.0.0.1:8000/board/comment/${this.article.id}/`)
        .then(res => {
          this.comments = res.data.data
        })
      })
      .catch(err => console.error(err))
      
  }
}
</script>

<style>

</style>