<style scoped>
.frame {
  height: var(--practise-element-height);
  width: var(--practise-element-width);
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 48px;
  padding: 24px;
}
</style>

<template>
  <div class="frame" :key="food">
    <h2>Learn Props In Vue</h2>

    <VueElement content="Coffee 1" />
  </div>
</template>

<script>
import VueElement from "./VueElement.vue";

export default {
  props: {
    food: {
      type: String,
      foodName: "Coffee",
    },
  },
  components: {
    VueElement,
  },
};
</script>
