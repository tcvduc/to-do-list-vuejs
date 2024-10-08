<style>
.khungSuon {
  height: 100%;
  width: 100%;
  padding: 0 9px 24px 24px;
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
.loadingText {
  color: var(--title-color);
  font-size: 24px;
}
</style>

<template>
  <div class="khungSuon">
    <div v-if="flag === true">
      <div v-if="countTask === 0" class="loadingText">Loading...</div>

      <div class="danhSachViec" v-else>
        <ThanhViecVue
          v-for="(task, i) in tasks"
          :key="i"
          :task="task"
          :handleCloseButtonOnclick="handleCloseButtonOnclick"
        />
      </div>
    </div>

    <div v-else>Can't get data</div>
  </div>
</template>

<script>
import ThanhViecVue from "./ThanhViec.vue";
export default {
  props: {
    tasks: Array[String],
    countTask: Number,
    handleCloseButtonOnclick: Function,
    flag: Boolean,
  },

  components: {
    ThanhViecVue,
  },
};
</script>
