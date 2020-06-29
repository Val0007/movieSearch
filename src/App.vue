<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components:{
    'app-header':Header
  }
  
}
</script>

<style lang="scss">

  body{
   background-color: #3C3B3F;
   overflow: hidden;
  }
  .container{
    width: 70%;
    height: 90vh;
    box-shadow: 0 5px 10px rgba(0,0,0,0.7);
    margin: 30px auto;
  }
</style>