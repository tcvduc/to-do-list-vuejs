<style scoped>
.frameChildElement {
  background-color: antiquewhite;
  width: 100%;
  border-radius: 3px;
  margin-bottom: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.frameChildElement:last-child {
  margin-bottom: 0;
}

.titleChildElement,
.titleChildElementContent {
  font-size: 24px;
}

.titleChildElement {
  font-weight: 500;
  margin-top: 24px;
}

.titleChildElement:first-child {
  margin-top: 0;
}

.food {
  display: flex;
}

.foodId,
.content {
  font-size: 24px;
}

.foodName {
  font-size: 24px;
  margin-left: 24px;
}
</style>

<template>
  <div class="frameChildElement">
    <div class="titleChildElement">Prop Type String</div>
    <div class="titleChildElementContent">{{ title }}</div>

    <div class="titleChildElement">Prop Type Number</div>
    <div class="content">{{ content }}</div>

    <div class="titleChildElement">Prop Type Object</div>
    <div class="food">
      <div class="foodId">Food id {{ food.foodId }}</div>
      <div class="foodName">Food name {{ food.foodName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    elementId: Number,
    title: String,
    content: Number,
    food: {
      foodId: Number,
      foodName: String,
      type: Object,
    },
  },
};
</script>
