<template>
<div>
  <div>
    <NavMenu/>
  </div>
  <div>
    <div class="container">  
      <h2 class="text-light">회원가입</h2>
      <div class="col-5 mt-3">
          <div class="mb-3">
            <label for="username" class="form-label text-light">User name</label>
            <input v-model="signupData.username" class="form-control" id="username" >
          </div>
          <div class="mb-3">
            <label for="password1" class="form-label text-light" aria-describedby="passHelp">Password</label>
            <input v-model="signupData.password1" type="password" class="form-control" id="password1">
            <div id="passHelp" class="form-text text-light">8자리이상 입력하세요</div>
          </div>
          <div class="mb-3">
            <label for="password2" class="form-label text-light" aria-describedby="passHelp">Password Confirm</label>
            <input v-model="signupData.password2" type="password" class="form-control" id="password2">
          </div>
          <button type="submit" class="btn btn-primary" @click="signup(signupData)">Submit</button>
      </div>
    </div>
    <!-- <div>
      <label for="email">E-mail:</label>
      <input v-model="signupData.email" id="email" type="email" />
    </div> -->

  </div>
</div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import { mapActions } from 'vuex'

export default {
  name: 'SignUp',
  data() {
    return {
      signupData: {
        username: null,
        password1: null,
        password2: null,
        // email: null,
      }
    }
  },
  components: {
    NavMenu,
  },
  methods: {
    ...mapActions(['signup'])
  }
}
</script>

<style>

</style>