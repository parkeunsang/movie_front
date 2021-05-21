<template>
  <div id="app">
    <h1>Main</h1>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <Search />
        </div>
        <div class="col-6">
          <Menu/>
        </div>  
      </div>1231231
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    Search,
    Menu
  },
}
</script>

<style>

</style>
