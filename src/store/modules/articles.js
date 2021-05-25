import axios from 'axios'
import router from '@/router'
import DRF from '@/api/drf'

const state = {
  articles: []
}

const getters = {
  articles(state) {
    return state.articles
  }
}

const mutations = {
  SET_ARTICLES: (state, articles) => state.articles = articles
}

const actions = {
  fetchArticles({ commit }) {
    axios.get(DRF.URL + DRF.ROUTES.articles)
      .then(res => commit('SET_ARTICLES', res.data))
      .catch(err => console.error(err))
  },

  createArticle({ getters }, articleData) {
    axios.post(DRF.URL + DRF.ROUTES.articles, articleData, getters.config)
      console.log(getters.config)
      .then(() => router.push({ name: 'Board' }))  
      .catch(err => console.error(err))
  }
}

export default {
  state, getters, mutations, actions
}