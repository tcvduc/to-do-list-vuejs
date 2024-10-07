<style>
.routeFrame {
  width: 300px;
  height: 300px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  padding: 24px;
  background-color: #d8eaf9;
}
.routeTitle {
  font-size: 24px;
  font-weight: 500;
  color: #465e72;
}
.routeList {
  display: flex;
  flex-direction: column;
  margin-top: 24px;
}
.route {
  font-size: 24px;
  font-weight: 500;
  color: #465e72;
}
.subRouters {
  padding-left: 12px;
}
</style>

<template>
  <div class="routeFrame">
    <div class="routeTitle">Route</div>
    <div class="routeList">
      <div class="route">
        Vue Router
        <div class="subRouters">
          <div class="subRouter">Router Link</div>
          <div class="subRouter">Router View</div>
        </div>
      </div>
      <div class="route">Web Page Home</div>
      <div class="route">Merchan</div>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
// import KhungSuonToDoList from "./KhungSuonToDoList.vue";
// import WebPageHome from "./WebPageHome.vue";
// import VueRouter from "vue-router";

export default {
  methods: {},
};
</script>
