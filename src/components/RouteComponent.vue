<style>
.routeFrame {
  width: 200px;
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
</style>

<template>
  <div class="routeFrame">
    <div class="routeTitle">Route</div>
    <div class="routeList">
      <div class="route">r1</div>
      <div class="route">r2</div>
      <div class="route">r3</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
