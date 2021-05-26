import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

import Home from '../views/Home.vue'
import Board from '../views/Board.vue'
import CreateArticles from '../views/CreateArticles.vue'
import DetailArticle from '../views/DetailArticle.vue'
import Login from '../views/Login.vue'
import MovieList from '../views/MovieList.vue'
import WITM from '../views/WITM.vue'
import Recommend from '../views/Recommend.vue'
import SignUp from '../views/SignUp.vue'
import Logout from '../views/Logout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home

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
    path: '/WITM',
    name: 'WITM',
    component: WITM
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
  {
    path: '/Logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/Board/create',
    name: 'Create',
    component: CreateArticles
  },
  {
    path: '/Board/detail',
    name: 'DetailArticle',
    component: DetailArticle,
    props:true
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 라우터 이동 전에 해야하는 일들
router.beforeEach((to, from, next) => {

  // Login 해야만 함
  const privatePages = ['Logout',]
  // Login 안해야만 함
  const outerPages = ['SignUp', 'Login']

  const authRequired = privatePages.includes(to.name)
  const guestRequired = outerPages.includes(to.name)
  const isLoggedIn = store.getters.isLoggedIn

  
  // 404 === 등록되지 않은 라우터는 to.name 이 없음!
  // if (!to.name) {
  //   next({ name: 'NotFound'})
  // }

  // 로그인 안해야만 함 && 로그인 O
  if (guestRequired && isLoggedIn) {
    next({ name: 'Home' })
  }
  
  // 로그인을 해야만 함 && 로그인 X
  authRequired && !isLoggedIn ? next({ name: 'Login' }) : next()
})

// 라우터 이동이 끝나고 해야하는 일들
router.afterEach(() => {
  console.log('ROUTER MOVED')
})


export default router
