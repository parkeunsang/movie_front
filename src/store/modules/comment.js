import axios from 'axios'
import DRF from '@/api/drf'

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
      .then(() => {console.log('done')})  
      .catch(err => console.error(err))
  }
}

export default {
  state, getters, mutations, actions
}