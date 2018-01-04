<template>
  <div id="app">
    
  
  <v-menu ></v-menu>
  </div>
</template>

<script>
import menu from './components/menu.vue'
export default {
  components:{'v-menu':menu},
  data(){
    return {

    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

</style>
