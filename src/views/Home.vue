<template>
  <div class="Background">
    <h1>Main</h1>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <Search />
        </div>
        <div class="col-6">
          <div class="row">
              <Menu/>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Search from '@/components/Search.vue'


export default {
  name: 'Home',
  components: {
    Search,
    Menu,

  },
}
</script>

<style scoped>
  .Background {
    height: 100vh;
    background-image: url('../../images/메인배경.png');
    background-repeat : no-repeat;
    background-size : cover;
  }
  .menu {
    height: 50vh;
    background-image: url('../../images/메뉴판.png');
    background-repeat : no-repeat;
  }
</style>