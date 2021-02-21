import Vue from 'vue'
import App from './App.vue'
import Basket from './Basket.vue'
import Home from './components/Home.vue'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueI18n)

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages:{
    en:{
      message:{
        product:"Products",
        seeDetail:"See Detail",
        basket:"Basket",
        search:"Search product by name,category",
        totalItems:"Total Items",
        total:"Total",
        myBasket:"My Basket",
        buy:"Buy Now",
        increase:"Increase",
        decrease:"Decrease",
        amount:"Amount",
        notifiyIncrease:"The number of products has been increased.",
        notifiyDecrease:"The number of products has been reduced.",
        addedBasket:"The product added to your basket.",
        notFound:"There is no product in your basket",
        changedLang:"Language changed."

      }
    },
    tr:{
      message:{
        product:"Ürünler",
        seeDetail:"İncele",
        basket:"Sepetim",
        search:"Ürün adına veya kategori adına göre ara",
        totalItems:"Toplam Ürün Adeti",
        total:"Toplam",
        myBasket:"Sepetim",
        buy:"Şimdi Satın Al",
        increase:"Arttır",
        decrease:"Azalt",
        amount:"Miktar",
        notifiyIncrease:"Ürün miktarı artırıldı.",
        notifiyDecrease:"Ürün miktarı azaltıldı.",
        addedBasket:"Ürün sepete eklendi",
        notFound:"Sepetinizde ürün bulunmamaktadır.",
        changedLang:"Dil değiştirildi."
      }
    }
  }
})

const router = new VueRouter({
  routes:[
    {path:'',component:Home},
    {path:'/basket',component:Basket}
  ]
})
new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
