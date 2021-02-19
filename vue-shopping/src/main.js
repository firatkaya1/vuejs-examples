import Vue from 'vue'
import App from './App.vue'
import Basket from './Basket.vue'
import Home from './components/Home.vue'
import store from './store'



import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false


const router = new VueRouter({
  routes:[
    {path:'',component:Home},
    {path:'/basket',component:Basket}
  ]
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
