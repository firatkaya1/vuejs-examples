<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Subtitle Filter"/>
    <About/>
    <Search v-on:getKeyword="getKeyword"/>
    <Table v-bind:movies="movies"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Search from './components/Search.vue'
import Table from './components/Table.vue'
import About from './components/About.vue'
import movieArr from './assets/100240.json'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Table,
    Search,
    About
  },
  data() {
      return {
          movies :movieArr
      }
  },
  methods:{
    
    getKeyword(val){
      this.movies = movieArr.filter((movie)=> movie.message.toLowerCase().includes(val) 
      || movie.startTime.includes(val)
      || movie.endTime.includes(val)
      || movie.line.includes(val) );
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
