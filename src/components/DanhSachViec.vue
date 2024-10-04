<style>
.khungSuon {
  height: 100%;
  width: 100%;
  padding: 0 24px 24px 24px;
  font-size: 18px;
  overflow-y: hidden;
}

.khungSuon::-webkit-scrollbar {
  background-color: #465e72;
}

.khungSuon::-webkit-scrollbar-track {
  background-color: #c0cad1;
}

.khungSuon::-webkit-scrollbar-thumb {
  background-color: #abb3b9;
}
</style>

<template>
  <div class="khungSuon">
    <div class="danhSachViec">
      <ThanhViecVue :task="task" />
    </div>
  </div>
</template>

<script>
import ThanhViecVue from "./ThanhViec.vue";
export default {
  props: {
    task: String,
  },

  components: {
    ThanhViecVue,
  },

  data: () => {
    return {};
  },
};
</script>
