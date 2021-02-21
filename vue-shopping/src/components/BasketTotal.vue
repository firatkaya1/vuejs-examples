<template>
    <b-col md="3" class="mt-4">
        <b-card-group deck>
            <b-card bg-variant="light" header="Toplam Tutar" class="text-center">
                <b-card-text>{{ $t("message.totalItems") }}: {{ getCount }}</b-card-text>
                <b-card-text>KDV : {{ calculateTax() }} TL</b-card-text>
                <b-card-text>{{ $t("message.total") }} : {{ getTotalPrice }} TL</b-card-text>
                <b-button variant="success">{{ $t("message.buy") }}</b-button>
            </b-card>
        </b-card-group>
    </b-col>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name:"BasketTotal",
    computed:mapGetters(['getCount','getTotalPrice']),
    methods:{
        calculateTax(){
            return ((this.getTotalPrice * 18 )/100).toFixed(2);
        }
    }
}
</script>

<style scoped>

</style>