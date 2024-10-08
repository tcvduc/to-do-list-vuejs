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
}
.route {
  font-size: 24px;
  font-weight: 500;
  color: #465e72;
}
.subRouters {
  padding-left: 12px;
}
a {
  color: #465e72;
  text-decoration: none;
}
</style>

<template>
  <div class="routeFrame">
    <div class="routeTitle">Route</div>
    <div class="routeList">
      <RouterLink class="route" to="/home">Home</RouterLink>

      <div class="route">
        Vue Router
        <div class="subRouters">
          <RouterLink class="subRouter" to="/onboard/routerLink">
            Router Link
          </RouterLink>

          <br />

          <RouterLink class="subRouter" to="/onboard/routerView">
            Router View
          </RouterLink>
        </div>
      </div>

      <RouterLink class="route" to="/merchant">Merchant</RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
};
</script>
