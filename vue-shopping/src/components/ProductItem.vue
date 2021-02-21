<template>
    <div>
        <b-row class="border border-info mr-2 ml-2 p-2 mt-4">
            <b-col cols="12 text-center">
                <img alt="Vue logo" v-bind:src="product.imageURL" width="100px" height="120px">
            </b-col>
            <div class="w-100 mb-2 mt-2 "></div>
            <b-col md="12" class="text-left border-bottom"><b>{{ product.title }}</b></b-col>
            <b-col md="6" class="text-center "><del><b>{{ product.oldPrice }}</b></del></b-col>
            <b-col md="6" class="text-left">{{ product.newPrice }}</b-col>
            <div class="w-100 mb-2 mt-2"></div>
            <b-col md="3" class="btn btn-warning" v-on:click="setBasket(product.id)">+</b-col>
            <b-col md="8" class="btn btn-info ml-auto">{{ $t("message.seeDetail") }}</b-col>
        </b-row>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
    name:'ProductItem',
    props:["product"],
    methods:{
        ...mapActions(['increaseBasket']),
        ...mapMutations('notification',['pushNotification']),
        setBasket(val){
            if(localStorage.getItem(val)===null){
                localStorage.setItem(val,JSON.stringify(this.product))
            } else {
                this.product.total = JSON.parse(localStorage.getItem(val)).total + 1;
                localStorage.setItem(val,JSON.stringify(this.product))
            }
            this.increaseBasket();
            this.pushNotification({id:(Math.floor(Math.random() * 9999) +1) ,message:this.$t("message.addedBasket"),type:"success"})
        }
    }
}
</script>

<style scoped>

</style>