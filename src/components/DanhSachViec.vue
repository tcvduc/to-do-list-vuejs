<style>
.khungSuon {
  height: 100%;
  width: 100%;
  padding: 0 24px 24px 24px;
  font-size: 18px;
  overflow-y: scroll;
}

.khungSuon::-webkit-scrollbar {
  background-color: #465e72;
}

.khungSuon::-webkit-scrollbar-track {
  background-color: #d8eaf9;
}

.khungSuon::-webkit-scrollbar-thumb {
  background-color: #abb3b9;
}
</style>

<template>
  <div class="khungSuon">
    <div class="danhSachViec">
      <ThanhViecVue v-for="task in tasks" :key="task" :task="task" />
    </div>
  </div>
</template>

<script>
import ThanhViecVue from "./ThanhViec.vue";
export default {
  props: {
    tasks: Array[String],
  },

  components: {
    ThanhViecVue,
  },

  data: () => {
    return {};
  },
};
</script>
