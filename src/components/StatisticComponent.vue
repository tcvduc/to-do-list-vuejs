<style scoped>
.statisticsFrame {
  width: 200px;
  height: 300px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  padding: 24px;
  background-color: #d8eaf9;
}
.statisticTitle {
  font-size: 24px;
  font-weight: 500;
  color: #465e72;
}
.countTask {
  font-size: 24px;
  font-weight: 500;
  color: #465e72;
}
</style>

<template>
  <div class="statisticsFrame">
    <div class="statisticTitle">Statistic</div>

    <div class="countTask" v-if="countTask <= 1">
      There is {{ countTask }} task
    </div>

    <div class="countTask" v-else>There are {{ countTask }} tasks</div>
  </div>
</template>

<script>
export default {
  name: "StatisticComponent",
  props: {
    countTask: Number,
  },
  components: {},
  methods: {},
};
</script>
