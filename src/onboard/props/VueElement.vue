<style scoped>
.frameVueElement {
  width: 200px;
  height: 100px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  padding: 24px;
  margin-top: 24px;
}
</style>

<template>
  <div class="frameVueElement">{{ content }}</div>
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>
