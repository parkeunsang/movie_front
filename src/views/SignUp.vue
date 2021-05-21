<template>
<div>
  <div>
    <NavMenu/>
  </div>
  <div>
    <h1>Signup</h1>
    <div>
      <label for="username">username:</label>
      <input v-model="signupData.username" id="username" type="text" />
    </div>
    <div>
      <label for="password1">password:</label>
      <input v-model="signupData.password1" id="password1" type="password" />
    </div>
    <div>
      <label for="password2">password:</label>
      <input v-model="signupData.password2" id="password2" type="password" />
    </div>
    <div>
      <button @click="signup(signupData)">Signup</button>
    </div>
  </div>
</div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'

export default {
  name: 'SignUp',
  components: {
    NavMenu,
    }
}
</script>

<style>

</style>