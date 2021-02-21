<template>
    <div class="basket-item mt-2">
        <b-row class="my-auto p-2">
            <b-col md="5" class="mt-2"><h5>{{index + 1}}-) {{item.title}}</h5></b-col>
            <b-col md="3" class="mt-2"><h5>{{ $t("message.amount") }} : {{item.total}}</h5> </b-col>
            <b-col>
                <button class="btn btn-danger" v-on:click="increaseTotal(item.id)">{{ $t("message.increase") }}</button>
            </b-col>
            <b-col>
                <button class="btn btn-info" v-on:click="decreaseTotal(item.id)">{{ $t("message.decrease") }}</button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapActions,mapMutations } from 'vuex';

export default {
    name:"BasketItemDetail",
    props:['item','index'],
    methods:{
        ...mapActions(['increaseBasket']),
        ...mapActions(['decreaseBasket']),
        ...mapMutations('notification',['pushNotification']),
        increaseTotal(id){
            this.item.total = this.item.total + 1;
            localStorage.setItem(id,JSON.stringify(this.item));
            this.increaseBasket();
            this.pushNotification({id:(Math.floor(Math.random() * 9999) +1) ,message:this.$t("message.notifiyIncrease"),type:"success"})
        },
        decreaseTotal(id){
            this.item.total = this.item.total - 1;
            if(this.item.total==0){
                this.decreaseBasket();
                this.$emit('del-item',id);
            }else {
                localStorage.setItem(id,JSON.stringify(this.item));
            }
            this.decreaseBasket();
            this.pushNotification({id:(Math.floor(Math.random() * 9999) +1) ,message:this.$t("message.notifiyDecrease"),type:"error"})
            
        }
    }
}
</script>

<style scoped>

</style>