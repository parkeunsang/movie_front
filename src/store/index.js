import Vue from 'vue'
import Vuex from 'vuex'

import accounts from './modules/accounts'
import articles from './modules/articles'
import keywords from './modules/keywords'
import recommend from './modules/recommend'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { accounts, articles, keywords, recommend}
})