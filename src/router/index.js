import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Board from '../views/Board.vue'
import Login from '../views/Login.vue'
import MovieList from '../views/MovieList.vue'
import Recommend from '../views/Recommend.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App

  },
  {
    path: '/Board',
    name: 'Board',
    component: Board
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/MovieList',
    name: 'MovieList',
    component: MovieList
  },
  {
    path: '/Recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
