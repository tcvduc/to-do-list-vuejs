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
    <HelloWorld
      cum5="Cụm 5"
      cum6="Cụm 6"
      hocVue="Học VueJS"
      chaoBuoiSang="Chào Buổi Sáng"
      lamMotLyCaPhe="Làm Một Ly Cà Phê"
      lamMotOBanhMy="Làm một ổ bánh mỳ"
    />

    <BonOVuong so1="1" />

    <BonOVuong />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import BonOVuong from "./components/BonOVuong.vue";

// const props = {
//   cum5: "Cụm 5",
//   cum6: "Cụm 6",
//   hocVue: "Học VueJS",
//   chaoBuoiSang: "Chào Buổi Sáng",
//   lamMotLyCaPhe: "Làm Một Ly Cà Phê",
//   lamMotOBanhMy: "Làm một ổ bánh mỳ",
// };

export default {
  name: "App",
  components: {
    HelloWorld,
    BonOVuong,
  },
};
</script>
