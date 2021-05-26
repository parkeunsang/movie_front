<template>
  <div>
    <NavMenu/>
    <div class="container font">
      <img src="../../images/리뷰보드.jpeg" class="img-fluid mb-5" width="100%">
      <table class="table table-dark table-striped font">
        <thead>
          <tr>
            <th style="width: 10%;text-align: center;" scope="col">글 번호</th>
            <th style="width: 10%;text-align: center;" scope="col">글 제목</th>
            <th style="width: 10%;text-align: center;" scope="col">작성자</th>
            <th style="width: 10%;text-align: center;" scope="col">생성일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in articles" :key="`article_${article.id}`">
            <th style="width: 10%;text-align: center;" scope="row">{{ article.id }}</th>
            <td style="width: 50%;text-align: center;"><RouterLink :to="{name: 'DetailArticle', query: {pk: article.id }}" style="display: inline-block;text-decoration:none;color:white"> {{article.title}}  </RouterLink></td>
            <td style="width: 20%;text-align: center;">{{ article.user.username }}</td>
            <td style="width: 20%;text-align: center;">{{ article.created_at }}</td>
            
          </tr>
        </tbody>
      </table>
      <RouterLink :to="{name: 'Create'}" tag="button" class="btn btn-warning" style="float: right;"> 새글 쓰기 </RouterLink>
    </div>
    
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'


export default {
  name: 'Board',
  components: {
    NavMenu,
    },
  computed: {
    ...mapGetters(['articles'])
  },
  methods: {
    ...mapActions(['fetchArticles', 'detailArticle']),
    articleDetail(article_pk) {
      console.log(article_pk)
    }
  },
  created() {
    this.fetchArticles()
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