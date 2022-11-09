<template>
  <div class="food">
    <div class="food-about">
      <Sale class="food-sale" v-if="saleMark" :sale="sale" />
      <img class="food-img" src="@/assets/img/fastFood.png" />
      <h1 class="food-name">{{ foodName }}</h1>
      <h1 class="food-price">${{ foodPrice }}/100g</h1>
    </div>
  </div>
</template>

<script setup>
import Sale from "../atoms/sale.vue";
const props = defineProps({
  foodImg: {
    type: String,
    default: "@/assets/img/fastFood.png",
  },
  foodName: {
    type: String,
    default: "Lorem ipsum",
  },
  foodPrice: {
    type: Number,
    default: 4.99,
  },
  saleMark: {
    type: Boolean,
    default: false,
  },
  sale: {
    type: Number,
    default: 10,
  },
});
</script>

<style lang="scss" scoped>
.food {
  width: 160px;
  position: relative;
  &-name {
    font-family: tahoma;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #fff;
  }
  &-price {
    font-family: tahoma;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #d4d4d5;
  }
  &-img {
    border-radius: 16px;
    width: 160px;
    height: 100px;
  }
}
</style>
