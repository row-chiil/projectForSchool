<template>
  <nav><linksVue></linksVue></nav>
  <main><mainVue></mainVue></main>
  
  <!-- <SerchingVue/> -->
</template>

<script>
import  mainVue  from "./components/main.vue";
import linksVue from './components/links.vue'

export default {
  name: 'App',
  components: {
    mainVue, 
    linksVue
  }, 
  updated(){
    
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

  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 100%;
}
.links{
  height: 20%;
}
template{
  width: 100%;
}
</style>
