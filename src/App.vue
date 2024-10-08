<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  --background-color: #a0c5df;
  --title-color: #465e72;

  --practise-element-width: 450px;
  --practise-element-height: 600px;
}

#app {
  background-color: var(--background-color);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 148px;
  padding-top: 46px;
}
</style>

<template>
  <div id="app">
    <RouteComponent />

    <RouterView />
  </div>
</template>

<script setup>
import RouteComponent from "./components/RouteComponent.vue";
import { RouterView } from "vue-router";
</script>

<script>
export default {
  name: "App",
  components: {
    RouteComponent,
    RouterView,
  },
};
</script>
