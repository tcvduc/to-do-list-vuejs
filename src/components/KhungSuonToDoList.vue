<style>
.khungSuongToDoList {
  border: 1px solid #000;
  width: 450px;
  height: 600px;
  background-color: #d8eaf9;
}

.title {
  border: 1px solid #000;
  color: var(--title-color);
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: center;
}
</style>

<template>
  <div class="khungSuongToDoList">
    <div class="title">Việc Làm Hôm Nay</div>

    <ThanhNhap />
  </div>
</template>

<script>
import ThanhNhap from "./ThanhNhap.vue";
export default {
  name: "KhungSuongToDoList",
  components: {
    ThanhNhap,
  },
};
</script>
