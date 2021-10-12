const state = {
  isLoadingR: true,
}

const mutations = {
  START_SPINNER(state){
    state.isLoadingR = true;
  },
  END_SPINNER(state){
    state.isLoadingR = false;
  },
}

export default {
  state, mutations
}