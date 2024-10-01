<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld hocVue="Học VueJS"  chaoBuoiSang="Chào Buổi Sáng" lamMotLyCaPhe="Làm Một Ly Cà Phê"  lamMotOBanhMy="Làm một ổ bánh mỳ"  />
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
};
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
