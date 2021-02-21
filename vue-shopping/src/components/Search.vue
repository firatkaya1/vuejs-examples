<template>
<div>
    <b-row class="mt-4 mb-4 w-50 mx-auto">
        <b-col class="">
          <b-form-input v-model="keyword" @input="getKeyword" :placeholder="placeHolder"></b-form-input>
        </b-col>
    </b-row>
</div>
</template>

<script>
export default {
    name:"Search",
    data() {
        return {
            keyword:'',
            placeHolder:this.$t("message.search")
        }
    },
    methods:{
        getKeyword(){
            this.$emit('getKeyword',this.keyword)
        }
    }
}
</script>

<style scoped>

</style>