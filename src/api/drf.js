// api/drf.js
export default {
  URL: 'http://localhost:8000/',
  ROUTES: {
    signup: 'rest-auth/signup/',
    login: 'rest-auth/login/',
    logout: 'rest-auth/logout/',
    articles: 'board/articles/',
    article: `board/articles/`,
    comment: `board/comment/`,
    recommend: `recommends/keywords/`
  }
}