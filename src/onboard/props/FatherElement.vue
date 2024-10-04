<style scoped>
.frameFatherElement {
  width: var(--practise-element-width);
  height: var(--practise-element-height);
  border: 1px solid #000;
  margin-left: 24px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
}
</style>

<template>
  <div class="frameFatherElement">
    <ChildElement
      title="child element 1"
      :content="1"
      :food="{ id: 1, name: 'chicken' }"
    />
    <ChildElement
      title="child element 2"
      :content="2"
      :food="{ id: 2, name: 'bread' }"
    />
    <ChildElement
      title="child element 3"
      :content="3"
      :food="{ id: 3, name: 'soup' }"
    />
  </div>
</template>

<script>
import ChildElement from "./ChildElement.vue";
export default {
  components: {
    ChildElement,
  },
};
</script>
