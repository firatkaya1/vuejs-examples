<template >
  <div class="container">
    <div id="app" class="box">
      <Register class="flex-50 "/>
      <div class="flex-5 vertical-border"></div>
      <Login class="flex-50 ml-70"/>
    </div>
  </div>
</template>

<script>
import Login from './components/Login'
import Register from './components/Register'

export default {
  name: 'App',
  components: {
    Login,
    Register
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap');
html, body {
  font-family: 'Inconsolata', monospace;

}
.container {
  position: absolute;
  left: 15%;
  right: 15%;
  height: 100%;
}
.box {
  display: flex;
  flex-direction: row;
  height: 100%;
}
.flex-50 {
  margin-top: 10px;
  flex-basis: 48%;
  justify-content: center;
}
.flex-5 {
  flex-basis: 0.25%;
}
.vertical-border {
  width:5%;
  background-color: #000;
  transform: rotate(-5deg);
  margin-top: 3 0px;
}
.ml-70 {
  margin-left: 70px;
}
a {
  text-decoration: none;
  color: #000;
}
</style>
