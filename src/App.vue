<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  --background-color: #a0c5df;
  --title-color: #465e72;
}

#app {
  background-color: var(--background-color);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 148px;
}
</style>

<template>
  <div id="app">
    <KhungSuonToDoList />
  </div>
</template>

<script>
import KhungSuonToDoList from "./components/KhungSuonToDoList.vue";

export default {
  name: "App",
  components: {
    KhungSuonToDoList,
  },
};
</script>
