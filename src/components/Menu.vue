<template>
  <div>
    <RouterLink :to="{name: 'Board'}">Board | </RouterLink>
    <RouterLink :to="{name: 'Login'}">Login | </RouterLink>
    <RouterLink :to="{name: 'MovieList'}">MovieList | </RouterLink>
    <RouterLink :to="{name: 'Recommend'}">Recommend | </RouterLink>
    <RouterLink :to="{name: 'SignUp'}">SignUp</RouterLink>
  </div>
</template>

<script>
export default {
  name: 'Menu'

}
</script>

<style>

</style>