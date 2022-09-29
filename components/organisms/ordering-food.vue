<template>
  <div class="order">
    <div class="order__list">
      <ul class="order__list__food">
        <li v-for="someMenu in menuList" :key="index">
          <button @click="filterFood">{{ someMenu }}</button>
        </li>
      </ul>
    </div>
    <div class="order__price">
      <MoleculesFood v-bind="food" v-for="(food, index) in filterFood" :key="`${index}`" />
    </div>
  </div>
</template>
<script setup>
import { CartState } from "~/stores/cart";
const { selected, addItemToSelected, removeItemFromSelected } = CartState();
onMounted(async () => {
  console.log(selected);
  await addItemToSelected(123123, 1233, 154352);
  await removeItemFromSelected(1233, 123123);
});
const menuList = ["Горячаяя еда", "Бургеры"];
const menuFood = [
  { foodId: "Горячаяя еда", id: "1" },
  { foodId: "Горячаяя еда", id: "1" },
  { foodId: "Горячаяя еда", id: "1" },
  { foodId: "Горячаяя еда", id: "1" },
  { foodId: "Горячаяя еда", id: "1" },
  { foodId: "Бургеры", id: "2" },
  { foodId: "Бургеры", id: "2" },
  { foodId: "Горячаяя еда", id: "1" },
  { foodId: "Бургеры", id: "2" },
];
const filteredMenu = [];
const filterFood = menuFood.filter((food) => food.id === "1");
filteredMenu.push(...filterFood);
</script>
<style lang="scss" scoped>
.order {
  background: #131620;
  width: 100%;
  top: 269px;
  border-radius: 16px;
  display: flex;
  justify-content: space-around;
  &__list {
    width: 181px;
    color: #d4d4d5;
    display: flex;
    border-right: 1px solid rgba(255, 255, 255, 0.15);
    padding: 24px 24px 0px;
    &__food {
      list-style-type: none;
      font-size: 20px;
      line-height: 21.83px;
      font-weight: 500;
      font-family: tahoma;
    }
    &__food li {
      padding: 12px;
    }
  }
  &__price {
    width: 100%;
    height: 508px;
    display: grid;
    grid-column-gap: 36px;
    grid-row-gap: 16px;
    grid-template-columns: repeat(2, 1fr);
    padding: 24px 32px 16px 24px;
  }
}
</style>
