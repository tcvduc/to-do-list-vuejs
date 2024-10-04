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
      :elementId="1"
      title="Element 1"
      :content="1"
      :food="{ foodId: 1, foodName: 'Bread Sweet' }"
    />
  </div>
</template>

<script>
import ChildElement from "./ChildElement.vue";
const elementType = {
  elementId: Number,
  title: String,
  content: Number,
  food: {
    type: Object,
    foodId: Number,
    foodName: String,
  },
};

const childElementsType = {
  type: Array[
    {
      elementId: Number,
      title: String,
      content: Number,
      food: {
        type: Object,
        foodId: Number,
        foodName: String,
      },
    }
  ],
};

const childElements = [];

for (let i = 1; i <= 8; ++i) {
  const element = {
    elementId: i,
    title: "Element " + i,
    content: i,
    food: {
      foodId: i,
      foodName: "Food " + i,
    },
  };
  childElements.push(element);
}

export default {
  props: {
    elementType,
    childElementsType,
  },
  components: {
    ChildElement,
  },
  data: () => {
    return {
      childElements,
    };
  },
};
</script>
