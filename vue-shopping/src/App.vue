<template>
  <div>
    <Menu/>
    <router-view ></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>

</style>
 