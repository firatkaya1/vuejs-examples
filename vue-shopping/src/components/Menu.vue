<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand :to="'/'" >    
          <img alt="Vue logo" src="../assets/logo.png" width="30px" height="30px">KayaShop
      </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav >
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav >
            <b-nav-item :to="'/basket'" >Sepetim ({{getCount}}) </b-nav-item>
        </b-navbar-nav>
        <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">TR</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name:"Menu",
    computed:mapGetters(['getCount']),
    data() {
      return {
        total:0,
      }
    }
}
</script>

<style scoped>

</style>