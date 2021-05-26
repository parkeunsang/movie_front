<template>
  <div>
    <NavMenu/>
    <div>
      <ul>
        <li v-for="article in articles" :key="`article_${article.id}`">
          <!-- 제목 : <span @click="articleDetail(article.pk)">{{ article.title }}</span> -->
          <RouterLink :to="{name: 'DetailArticle', query: {pk: article.id }}" > {{article.title}} </RouterLink>
        </li>
      </ul>
    </div>
    <RouterLink :to="{name: 'Create'}" tag="button"> 새글 쓰기 </RouterLink>
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
    ...mapActions(['fetchArticles']),
    articleDetail(article_pk) {
      console.log(article_pk)
    }
  },
  created() {
    this.fetchArticles()
  }
}
</script>

<style>

</style>