<template>
    <div class="container">
        <b-row class="mt-4">
            <BasketItems/>
            <BasketTotal/>
        </b-row>
    </div>
</template>

<script>
import BasketItems from './components/BasketItems';
import BasketTotal from './components/BasketTotal';

export default {
    name:"Basket",
    components :{
        BasketTotal,
        BasketItems
    }
}
</script>