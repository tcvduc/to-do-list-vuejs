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

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <BonOVuong so1="1" so2="2" so3="3" so4="4" />

    <BonOVuong so1="5" so2="6" so3="7" so4="8" />
  </div>
</template>

<script>
import BonOVuong from "./components/BonOVuong.vue";

export default {
  name: "App",
  components: {
    BonOVuong,
  },
};
</script>
