<template>
    <div>
        <input type="text" v-model="keyword" @input="getKeyword()" id="keyword" placeholder="Search keyword in the movie" autocomplete="off" >
    </div>
</template>

<script>
export default {
    name:"Search",
    data() {
        return {
            keyword:''
        }
    },
    methods:{
        getKeyword(){
            this.$emit('getKeyword',this.keyword);
        }
    }

}
</script>

<style scoped>

input {
    width: 250px;
    height: 25px;
    padding: 3px;
}
input:focus {
    outline: 0;
}

</style>