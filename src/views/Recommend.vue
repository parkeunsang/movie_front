<template>
  <div>
    <NavMenu/>
    <div>
      <Wordbutton/>
    </div>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import Wordbutton from '@/components/Wordbutton/Wordbutton.vue'

export default {
  name: 'Recommend',
  components: {
    NavMenu,
    Wordbutton,
    }
}
</script>

<style>

</style>