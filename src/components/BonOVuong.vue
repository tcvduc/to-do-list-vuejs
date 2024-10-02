<style>
.voBoc {
  margin: 36px;
  margin-top: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.oVuong {
  --size: 200px;
  width: var(--size);
  height: var(--size);
  border: 3px solid #000;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}
.oVuong:hover {
  background-color: #00000046;
  cursor: pointer;
}

.oVuong:active {
  background-color: #0000006c;
}
</style>

<template>
  <div class="voBoc">
    <div class="oVuong">{{ so1 }}</div>
    <div class="oVuong">{{ so2 }}</div>
    <div class="oVuong">{{ so3 }}</div>
    <div class="oVuong">{{ so4 }}</div>
  </div>
</template>

<script>
export default {
  name: "BonOVuong",
  props: {
    so1: String,
    so2: String,
    so3: String,
    so4: String,
  },
};
</script>
