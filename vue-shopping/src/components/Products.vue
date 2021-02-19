<template>
    <div>
        <h3>Products</h3>
        <b-row class="mt-4">
            <b-col md="3" v-for="product in products" :key="product.id">
                <ProductItem v-bind:product="product" />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
    name:"Products",
    props:["products"],
    components:{
        ProductItem
    }
}
</script>

<style scoped>

</style>