<template>
    <b-col md="9">
        <h3>{{ $t("message.myBasket") }}</h3>
         <div v-if="items.length===0" style="color:red;">
            {{ $t("message.notFound") }}
        </div>
        <span v-for="(item,index) in items" :key="item.id">
            <BasketItemDetail v-bind:item="item" v-bind:index="index" v-on:del-item="deleteItem"/>
        </span>
    </b-col>
</template>

<script>
import BasketItemDetail from './BasketItemDetail.vue';

export default {
    name:'BasketItems',
    components:{
        BasketItemDetail
    },
    data() {
        return {
            items:[]
        }
    },
    methods:{
      deleteItem(id){
        this.items = this.items.filter(item => item.id !==id);
        localStorage.removeItem(id);
      }  
    },
    mounted(){
        for (let index = 1; index <= 10; index++) {
            if(localStorage.getItem(index)!==null){
                this.items.push(JSON.parse(localStorage.getItem(index)));
            }
        }
    }
}
</script>

<style scoped>
.basket-item {
    width: 90%;
    height: auto;
    border: 1px solid #eee;
    border-radius: 10px;
}
</style>