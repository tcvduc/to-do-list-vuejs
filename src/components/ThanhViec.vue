<style>
.thanhViec {
  width: 100%;
  height: 80px;
  background-color: white;
  margin-bottom: 24px;
  padding: 24px;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
}

.thanhViec:last-child {
  margin-bottom: 0;
}

.closeButton {
  --size: 32px;
  width: var(--size);
  height: var(--size);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c4cfdd;
  font-size: 18px;
  border-radius: 3px;
  color: #283f52;
  cursor: pointer;
}
.closeButton:hover {
  background-color: #dfebfb;
}
.closeButton:active {
  background-color: #b2bdcb;
}
</style>

<template>
  <div class="thanhViec">
    <div class="viec">{{ task }}</div>
    <div class="closeButton" @click="handleCloseButtonOnclick(task)">X</div>
  </div>
</template>

<script>
export default {
  props: {
    task: String,
    handleCloseButtonOnclick: Function,
  },
  data: () => {
    return {};
  },
};
</script>
