import axios from 'axios'

const state = {
}

const getters = {
}

const mutations = {
}

const actions = {
  evaluationScore({ getters }, {movie_id, value}) {
    console.log(getters, {movie_id, value})
    axios.post(`http://127.0.0.1:8000/movies/score/`, {movie_id, value}, getters.config)
    .then(() => alert('평점 등록 완료.'))
    .catch(() => alert('이미 평점을 등록하셨습니다.'))
  },
}

export default {
  state, getters, mutations, actions
}