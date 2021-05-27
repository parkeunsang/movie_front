<template>
  <div>
    <NavMenu/>
    <div class="container font">
      <div class="row mt-5">  
        <h2 class="text-light">Login</h2>
        <div class="col-6 mt-3">
            <div class="mb-3">
              <label for="username" class="form-label text-light">User name</label>
              <input v-model="loginData.username" class="form-control" id="username" >
            </div>
            <div class="mb-3">
              <label for="password1" class="form-label text-light">Password</label>
              <input v-model="loginData.password" type="password" class="form-control" id="password1">
            </div>
            <button type="submit" class="btn btn-primary" @click="login(loginData)">Login</button>
        </div>
        <div class="col-6">
          <img src="../../images/로그인.png" class="img-fluid mb-5" width="100%">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {
    NavMenu,
    },
  data() {
    return {
      loginData: {
        username: null,
        password: null,
      }
    }
  },
  methods: {
    ...mapActions(['login'])
  }
}
</script>

<style>
  @font-face {
    font-family: 'Bazzi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  .font {
    font-family: 'Bazzi';
    color: rgb(255, 255, 255);
  }

</style>