import axios from 'axios'
import DRF from '@/api/drf'
// import router from '@/router'

const state = {
}

const getters = {
}

const mutations = {
}

const actions = {
  createComment({ getters }, commentData) {
    console.log(DRF.URL + DRF.ROUTES.comment + commentData.article_pk, commentData)
    axios.post(DRF.URL + DRF.ROUTES.comment + commentData.article_pk + '/' , commentData, getters.config)
      // .then(() => router.push({ name: 'DetailArticle',query: {pk: commentData.article_pk} }))  
      .then(() => window.location.reload())  
      .catch(err => console.error(err))
  }
}

export default {
  state, getters, mutations, actions
}