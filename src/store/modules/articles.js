import axios from 'axios'
import router from '@/router'
import DRF from '@/api/drf'

const state = {
  articles: [],
  article: {title: '', content: ''},
  tempz: 1
}

const getters = {
  articles(state) {
    return state.articles
  },
  article(state) {
    return state.article
  },
  tokenz() {
    return state.authToken
  } 
}

const mutations = {
  SET_ARTICLES: (state, articles) => state.articles = articles,
  UPDATE_ARTICLE: (state, article) => state.article = article
}

const actions = {
  fetchArticles({ commit }) {
    axios.get(DRF.URL + DRF.ROUTES.articles)
      .then(res => commit('SET_ARTICLES', res.data))
      .catch(err => console.error(err))
  },

  updateArticle({ getters, commit }, article_pk) {
    axios.post(`http://127.0.0.1:8000/board/articles/check/${article_pk}/`, {}, getters.config)
    .then(() => {
      axios.get(`http://127.0.0.1:8000/board/articles/${article_pk}/`)
      .then(res => {
        commit('UPDATE_ARTICLE', res.data)
        router.push({ name: 'Create'})
      })
    })
    .catch(err => {
      console.error(err)
      alert('글쓴이가 아닙니다.')
    })
    
  },

  createArticle({ getters }, articleData) {
    if (articleData.method === 'post')
    {
      axios.post(DRF.URL + DRF.ROUTES.articles, articleData, getters.config)
      .then(() => router.push({ name: 'Board' }))
      .catch(err => console.error(err))
    } else {
      axios.put(DRF.URL + DRF.ROUTES.articles + articleData.pk + '/', articleData, getters.config)
      .then(() => router.push({ name: 'Board' }))
      .catch(err => console.error(err))
    }
  },
  deleteArticle({ getters }, article_pk) {
    const isDelete = confirm( '삭제하시겠습니까?' )
    if (isDelete === true)
    {
      axios.post(`http://127.0.0.1:8000/board/articles/check/${article_pk}/`, {}, getters.config)
      .then(() => {
        axios.delete(`http://127.0.0.1:8000/board/articles/${article_pk}/`, getters.config)
        .then(() => {
          router.push({ name: 'Board'})
        })
      })
      .catch(err => {
        console.error(err)
        alert('글쓴이가 아닙니다.')
      })
    }
  },
  
}

export default {
  state, getters, mutations, actions
}