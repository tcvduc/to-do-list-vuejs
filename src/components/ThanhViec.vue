<style>
.thanhViec {
  width: 100%;
  height: 80px;
  background-color: white;
  margin-bottom: 24px;
  padding: 24px;
  font-size: 24px;
}

.thanhViec:last-child {
  margin-bottom: 0;
}
</style>

<template>
  <div class="thanhViec">{{ task }}</div>
</template>

<script>
export default {
  props: {
    task: String,
  },
};
</script>
