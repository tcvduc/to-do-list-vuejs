<style scoped>
.frame {
  height: 300px;
  width: 400px;
  border: 1px solid #000;
  margin: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
}

.foodList {
  height: 200px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.food {
  font-size: 24px;
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
const foodList = {
  name: "FoodList",
  type: Array,
  data: [],
};

for (let i = 1; i <= 4; ++i) {
  foodList.data.push({
    id: i,
    foodName: "Food " + i,
  });
}

export default {
  data: () => {
    return {
      foodList: foodList,
    };
  },
};
</script>
