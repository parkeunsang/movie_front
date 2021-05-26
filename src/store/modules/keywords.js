import axios from 'axios'
import router from '@/router'

const state = {
  movieData: [],
}

const getters = {

}

const mutations = {
  GET_MOVIES_BY_TITLE(state, data){
    state.movieData = data
    router.push('MovieList')
  },
  GET_MOVIES_BY_KEYWORDS(state, data){
    state.movieData = data
    router.push('WITM')
  },
  GET_RECENT_MOVIES(state, data) {
    state.movieData = data
    
  }
}

const actions = {
  getMoviesByTitle({ commit }, inputValue){
    axios.get(`http://127.0.0.1:8000/movies/search/title/${inputValue}`)
    .then((res) => {
      const data = res.data
      commit('GET_MOVIES_BY_TITLE', data)
    })
    .catch((res) => console.log(res.error))
  },

  getMoviesByKeywords({ commit }, inputValue){
    axios.get(`http://127.0.0.1:8000/movies/search/keywords/${inputValue}`)
    .then((res) => {
      const data = res.data
      commit('GET_MOVIES_BY_KEYWORDS', data)
    })
    .catch((res) => console.log(res.error))
  },

  getRecentMovies({ commit }){
    axios.get(`http://127.0.0.1:8000/movies/recent/`)
    .then((res) => {
      const data = res.data
      commit('GET_RECENT_MOVIES', data)
      router.push('MovieList')
    })
    .catch((res) => console.log(res.error))
  }
}

export default {
  state, getters, mutations, actions
}