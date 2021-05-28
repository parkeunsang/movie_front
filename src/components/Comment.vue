<template>
  <div class="font container">
    <div> 
      <textarea v-model="commentData.content" id="commentArea" cols="30" rows="10" placeholder="   댓글 작성" style="width:100%;height:50px"></textarea>
    </div>
    <button @click="createComment(commentData)" class="btn btn-warning" style="float: right;">댓글쓰기</button>
    <br>
    <br>
    <hr>
    <div class="mt-2" style="font-size:40px">댓글 목록</div>
    <table class="table font" style="font-size:20px" >
      <thead>
        <tr>
          <th style="width: 10%;text-align: center;" scope="col">작성자</th>
          <th style="width: 50%;text-align: center;" scope="col">내용</th>
          <th style="width: 10%;text-align: center;" scope="col">생성시각</th>
          <th style="width: 10%;text-align: center;" scope="col">수정시각</th>
          <th></th>
        </tr>
      </thead>
      
      <tbody>     
        <tr v-for="comment in comments" :key="comment.id">
          <td style="width: 10%;text-align: center;">{{ comment.user_name }}</td>
          <td style="width: 50%;text-align: left;">{{ comment.content }}</td>
          <td style="width: 15%;text-align: center;">{{ comment.created_at_simple }}</td>
          <td style="width: 15%;text-align: center;">{{ comment.updated_at_simple }}</td>
          <td style="width: 10%;text-align: center;"><button @click="deleteComment(comment.id)" class="btn btn-danger">삭제</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import DRF from '@/api/drf.js'

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
    axios.get(`${DRF.URL}board/articles/${this.$route.query.pk}/`)
      .then(res => {
        this.article = res.data
        this.commentData.article_pk = String(this.article.id)
        axios.get(`${DRF.URL}board/comment/${this.article.id}/`)
        .then(res => {
          this.comments = res.data
        })
      })
      .catch(err => console.error(err))
      
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