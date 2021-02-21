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
            <b-nav-item :to="'/basket'" >{{ $t("message.basket") }} ({{getCount}}) </b-nav-item>
        </b-navbar-nav>
        <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item @click="changeLanguage('en')">EN</b-dropdown-item>
            <b-dropdown-item @click="changeLanguage('tr')">TR</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name:"Menu",
    computed:mapGetters(['getCount']),
    data() {
      return {
        total:this.getCount,
      }
    },
    methods:{
      ...mapMutations('notification',['pushNotification']),
      changeLanguage(val){
        this.$root.$i18n.locale = val;
        this.pushNotification({id:(Math.floor(Math.random() * 9999) +1) ,message:this.$t("message.changedLang"),type:"success"})
      }
    }

}
</script>

<style scoped>

</style>