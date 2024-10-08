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
a {
  color: #465e72;
  text-decoration: none;
}
</style>

<template>
  <div class="routeFrame">
    <div class="routeTitle">Route</div>
    <div class="routeList">
      <router-link class="route" to="/home">Home</router-link>

      <div class="route">
        Vue Router
        <div class="subRouters">
          <router-link class="subRouter" to="/onboard/routerLink">
            Router Link
          </router-link>

          <br />

          <router-link class="subRouter" to="/onboard/routerView">
            Router View
          </router-link>
        </div>
      </div>

      <router-link class="route" to="/merchan">Merchan</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>
