<template>
  <div>
    <Menu/>
    <NotificationList/>
    <router-view ></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import NotificationList from './components/NotificationList.vue'

export default {
  name: 'App',
  components: {
    Menu,
    NotificationList
  }
}
</script>

<style>

</style>
 