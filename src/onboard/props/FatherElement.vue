<style scoped>
.frameFatherElement {
  width: var(--practise-element-width);
  height: var(--practise-element-height);
  border: 1px solid #000;
  margin-left: 24px;
  padding: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
}
</style>

<template>
  <div class="frameFatherElement">
    <ChildElement
      v-for="childElement in childElements"
      :key="childElement.id"
      :title="childElement.title"
      :elementId="childElement.id"
      :content="childElement.content"
      :food="childElement.food"
      :foodList="childElement.foodList"
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
      foodList: {
        type: Object,
        foods: [
          {
            type: Object,
            foodId: Number,
            foodName: String,
          },
        ],
      },
    }
  ],
};

/**
 *
 * @param {Number} number
 */
function createFoods(number) {
  const foods = [];

  for (let i = 1; i <= number; ++i) {
    const food = {
      foodId: i,
      foodName: "Food " + i,
    };
    foods.push(food);
  }

  return foods;
}

const childElements = [];

for (let i = 1; i <= 4; ++i) {
  const element = {
    elementId: i,
    title: "Element " + i,
    content: i,
    food: {
      foodId: i,
      foodName: "Food " + i,
    },
    foodList: {
      foods: createFoods(8),
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
