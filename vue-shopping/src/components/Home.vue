<template>
    <div class="container">
        <b-container class="bv-example-row">
            <Search v-on:getKeyword="getKeyword"/>
            <Products v-bind:products="products"/>
        </b-container>
    </div>
</template>

<script>
import Products from './Products.vue'
import Search from './Search.vue'

export default {
    name:"Home",
    data(){
    return {
      products:[
        {
          id:1,
          title:"Çakıl Taşı",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:2,
          title:"Çakıl Taşı 2",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:3,
          title:"Çakıl Taşı 3",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:4,
          title:"Çakıl Taşı 4",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:5,
          title:"Çakıl Taşı 5",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1,
        },
        {
          id:6,
          title:"Çakıl Taşı 6",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:7,
          title:"Çakıl Taşı 7",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:8,
          title:"Çakıl Taşı 8",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:9,
          title:"Çakıl Taşı 9",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:10,
          title:"Çakıl Taşı 10",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:11,
          title:"Araba Sevdası",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:12,
          title:"Zaman Çarkı",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:13,
          title:"Test Kitabı",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        }

      ],
      origin:[
        {
          id:1,
          title:"Çakıl Taşı",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:2,
          title:"Çakıl Taşı 2",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:3,
          title:"Çakıl Taşı 3",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:4,
          title:"Çakıl Taşı 4",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:5,
          title:"Çakıl Taşı 5",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1,
        },
        {
          id:6,
          title:"Çakıl Taşı 6",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:7,
          title:"Çakıl Taşı 7",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:8,
          title:"Çakıl Taşı 8",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:9,
          title:"Çakıl Taşı 9",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:10,
          title:"Çakıl Taşı 10",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:11,
          title:"Araba Sevdası",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:12,
          title:"Zaman Çarkı",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        },
        {
          id:13,
          title:"Test Kitabı",
          oldPrice:19.99,
          newPrice:12.99,
          imageURL:"/vueshopping/img/logo.82b9c7a5.png",
          total:1
        }

      ],
    }
  },
  components: {
    Search,
    Products
  },
  methods:{
    getKeyword(val){
      this.products = this.origin.filter((product) => product.title.toLowerCase().includes(val.toLowerCase()))
    }
  }
}
</script>

<style scoped>

</style>