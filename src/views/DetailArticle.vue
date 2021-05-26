<template>
  <div>
    <NavMenu/>
    <div class="container font">
      <img src="../../images/보드디테일.jpeg" class="img-fluid mb-3" width="100%">
      <p class="ms-3" style="font-size:30px">{{ article.title }}</p>
      <p>작성자 : {{ article.user_name }}</p>
      <p class="me-3" style="text-align:right;font-size:13px">생성일자: {{ article.created_at_simple }}</p>
      <p class="me-3" style="text-align:right;font-size:13px">수정일자: {{ article.updated_at_simple }}</p>
      
      <hr>
      <div class="px-3 box mb-3" style="font-size:20px">{{ article.content }}</div>
      <div>
        <button @click="deleteArticle(article.id)" class="btn btn-warning ms-2" style="float: right;">삭제</button>
        <button @click="updateArticle(article.id)" class="btn btn-warning" style="float: right;">수정</button>
      </div>
      <br>
      <div class="container mt-5">
        <Comment/>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import NavMenu from '@/components/NavMenu.vue'
import Comment from '@/components/Comment.vue'
import { mapActions } from 'vuex'
export default {
  name: 'DetailArticle',
  components:{
    NavMenu,
    Comment
  },
  data() {
    return {
      article: '',
      comments: [],
      commentData: {content: '', article_pk: ''}
    }
  },
  methods: {
    ...mapActions(['updateArticle','deleteArticle'])
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

  .box {
  border: 1px solid rgba(255, 255, 255, 0.267);
  height: 300px;
  width: 100%;
}
</style>