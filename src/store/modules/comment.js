import axios from 'axios'
import DRF from '@/api/drf'
// import router from '@/router'

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
      // .then(() => router.push({ name: 'DetailArticle',query: {pk: commentData.article_pk} }))  
      .then(() => window.location.reload())  
      .catch(err => console.error(err))
  },
  deleteComment({ getters }, commentId){
    const isDelete = confirm( '삭제하시겠습니까?' )
    console.log(commentId)
    if (isDelete === true){
      axios.post(`${DRF.URL}board/comment/check/${commentId}/`, {}, getters.config)
      .then(() => {
        axios.delete(`${DRF.URL}board/comment/${commentId}/`, getters.config)
        .then(() => window.location.reload())
      })
      .catch(err => {
        console.error(err)
        alert('글쓴이가 아닙니다.')
      })
      
    }
  }
}

export default {
  state, getters, mutations, actions
}