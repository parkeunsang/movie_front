<template>
  <div>
    <NavMenu/>
    <div>
      <ul>
        <li v-for="article in articles" :key="`article_${article.id}`">
          {{ article.title }} {{ article.id }}
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
    ...mapActions(['fetchArticles'])
  },
  created() {
    this.fetchArticles()
  }
}
</script>

<style>

</style>