<template>
<div>
    <b-row class="mt-4 mb-4 w-50 mx-auto">
        <b-col class="">
          <b-form-input v-model="keyword" placeholder="Search product by name,category"></b-form-input>
        </b-col>
    </b-row>
</div>
</template>

<script>
export default {
    name:"Search",
    data() {
        return {
            keyword:''
        }
    }
}
</script>

<style scoped>

</style>