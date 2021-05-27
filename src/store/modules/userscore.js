// import axios from 'axios'
// import DRF from '@/api/drf'
// import router from '@/router'

const state = {
}

const getters = {
}

const mutations = {
}

const actions = {
  evaluationScore(userscoreData) {
    console.log(userscoreData)
    // console.log(DRF.URL + DRF.ROUTES.comment + userscoreData.article_pk, userscoreData)
    // axios.post(DRF.URL + DRF.ROUTES.comment + commentData.article_pk + '/' , commentData, getters.config)

    //   .then(() => window.location.reload())  
    //   .catch(err => console.error(err))
  },
}

export default {
  state, getters, mutations, actions
}