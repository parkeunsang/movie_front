<template>
  <div>
    <h1>Main</h1>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <Search />
        </div>
        <div class="col-6">
          <div class="container">
            <div class="row">
              <div class="col-2">
                <Menu/>
              </div>
            </div>
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
    Menu

  },
}
</script>

<style>

</style>