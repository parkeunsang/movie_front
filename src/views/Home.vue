<template >
<div class="Background">
  <div class="container" >
    <div class="row">
      <div class="col-8">

        <div class="search"><Search/></div>
        
      </div>
      <div class="col-4"><Menu/></div>
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
    background-size : contain;
    background-position: center center;
  }

  .search {
    position: absolute;
    top: 70%;
    left: 30%;
    width: 800px;
    
  }

</style>