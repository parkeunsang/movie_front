import axios from 'axios'
import DRF from '@/api/drf'


const state = {
  firstPage: 1,
  recommendMovies: [],
}

const getters = {

}

const mutations = {
  GET_RECOMMEND(state) {
    state.firstPage = 0
  },
  RECOMMEND_INIT(state) {
    state.firstPage = 1
  }
}

const actions = {
  getRecommendMovies({ commit }, keywords){
    commit('START_SPINNER')
    let str = ''
    for (let element of keywords){
      str += element.name + ' '
    }
    axios.get(DRF.URL + DRF.ROUTES.recommend + str)
      .then((res) => {
        state.recommendMovies = res.data
      }) .then(() => {
        commit('END_SPINNER')
      })
    commit('GET_RECOMMEND')
    
  },
  recommendInit( { commit }){
    commit('RECOMMEND_INIT')
  }
}

export default {
  state, getters, mutations, actions
}