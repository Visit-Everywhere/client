<template>
  <div class="order">
    <!-- <div class="order__list">
      <ul class="order__list__food">
        <li v-for="someMenu in menuList" :key="index">
          <button class="order__list__btn" @click="filterFood">{{ someMenu }}</button>
        </li>
      </ul>
    </div>
    <div class="order__price">
      <MoleculesFood v-bind="food" v-for="(food, index) in filterFood" :key="`${index}`" />
    </div> -->
  </div>
</template>

<script setup>
// import { CartState } from "~/stores/cart";
// const { selected, addItemToSelected, removeItemFromSelected } = CartState();
// onMounted(async () => {
//   console.log(selected);
//   await addItemToSelected(123123, 1233, 154352);
//   await removeItemFromSelected(1233, 123123);
// });
const menuList = ["Горячаяя еда", "Бургеры", "Срака"];
const menuFood = [
  { foodId: "Горячаяя еда", id: "1", saleMark: true },
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
    height: 508px;
    width: 210px;
    color: #d4d4d5;
    display: flex;
    border-right: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 24px;
    overflow-y: scroll !important;
    overflow-x: hidden !important;
    padding-right: 10;
    &__food {
      list-style-type: none;
      font-size: 20px;
      line-height: 21.83px;
      font-weight: 500;
      font-family: tahoma;
    }
    &__btn {
      border: none;
      color: white;
      width: 180px;
      height: 46px;
      font-size: 18px;
      background-color: #2a2d36;
      cursor: pointer;
    }
    &__btn :hover {
      background-color: #2a2d36;
    }
  }
  &__price {
    width: 100%;
    height: 508px;
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 16px;
    grid-template-columns: repeat(auto-fill, 196px);
    padding: 24px 24px 16px 24px;
    overflow: auto;
  }
}
@media screen and (max-width: 650px) {
  .order {
    &__list {
      min-width: 180px;
    }
    &__price {
      justify-content: center;
      padding-right: 0px;
    }
  }
}
@media screen and (max-width: 813px) {
  .order {
    &__list {
      min-width: 180px;
    }
    &__price {
      justify-content: center;
      padding-right: 0px;
    }
  }
}
</style>
