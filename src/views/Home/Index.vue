<template>
  <div class="home">
    <home-title/>
    <!--recuperamos el componente formulario-->
    <main-form />

    <!-- <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import MainForm from './HomeForm.vue';
import HomeTitle from './HomeTitle.vue';

export default {
  name: 'Home',
  components: {
    MainForm,
    HomeTitle,
  }
  /* components: {
    HelloWorld
  } */
}
</script>
