<style>
.voBoc {
  margin: 36px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.oVuong {
  --size: 200px;
  width: var(--size);
  height: var(--size);
  border: 1px solid #000;
}
</style>

<template>
  <div class="voBoc">
    <div class="oVuong">{{ so1 }}</div>
    <div class="oVuong"></div>
    <div class="oVuong"></div>
    <div class="oVuong"></div>
  </div>
</template>

<script>
// const props = {
//   so1: "1",
//   so2: {
//     noiDung: 2,
//     kieuDuLieu: Number,
//   },
// };

export default {
  name: "BonOVuong",
  // props: props,
  props: {
    so1: String,
  },
};
</script>
