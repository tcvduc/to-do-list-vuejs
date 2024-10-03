<style>
.frame {
  width: var(--practise-element-width);
  height: var(--practise-element-height);
  border: 1px solid #000;
  margin-left: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.foodList {
  width: 300px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px;
}

.food {
  width: 100%;
  height: 40px;
  background-color: white;
  border-radius: 3px;
  margin-bottom: 24px;
  padding: 24px;
  display: flex;
  align-items: center;
}

.food:last-child {
  margin-bottom: 0;
}
</style>

<template>
  <div class="frame">
    <div class="foodList">
      <div class="food" v-for="food in foodList.data" :key="food.id">
        {{ food.foodName }}
      </div>
    </div>
  </div>
</template>

<script>
const foodList = [];

for (let i = 1; i <= 8; ++i) {
  const food = {
    id: i,
    foodName: "Food " + i,
  };
  foodList.push(food);
}

export default {
  data: () => {
    return {
      foodList: {
        name: "Food List",
        type: Array,
        data: foodList,
      },
      food: {
        name: "Food",
        type: Object,
        id: {},
        foodName: {},
      },
    };
  },
};
</script>
