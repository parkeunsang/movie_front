

const state = {
  picked: '',
  inputValue: '',
}

const getters = {

}

const mutations = {
  GET_KEYWORDS(state, {picked, inputValue}){
    state.picked = picked
    state.inputValue = inputValue
  }
}

const actions = {
  getKeywords({ commit }, {picked, inputValue}){
    commit('GET_KEYWORDS', {picked, inputValue})
  }
}

export default {
  state, getters, mutations, actions
}