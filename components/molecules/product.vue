<template>
  <div class="orders">
    <div class="orders__list">
      <ul class="orders__list__food">
        <li v-for="someMenu in testProp" :key="index">
          <button class="orders__list__btn" @click="handleClickList(someMenu)">{{ someMenu }}</button>
        </li>
      </ul>
    </div>
    <div class="orders__price">
      <AtomsMobileFood v-bind="food" v-for="(food, index) in filteredMenu" :key="`${index}`" />
      <button class="orders__cartBtn">
        <i class="orders__cartBtn__img">{{ bluda }}</i>
      </button>
    </div>
  </div>
</template>

<script setup>
let bludaArr = [];
const props = defineProps(["testProp"]);
const filteredMenu = ref([]);
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
const bluda = bludaArr.push(...menuFood);
const handleClickList = (id) => {
  filteredMenu.value = menuFood.filter((food) => food.foodId === id);
};
filteredMenu.value = menuFood.filter((food) => food.foodId === props.testProp[0]);
console.log(bludaArr);
</script>

<style lang="scss" scoped>
.orders {
  background: #131620;
  width: 100%;
  top: 269px;
  border-radius: 16px;
  display: flex;
  justify-content: space-around;
  &__list {
    height: 508px;
    width: 180px;
    color: #d4d4d5;
    display: flex;
    border-right: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 24px;
    overflow-y: hidden !important;
    overflow-x: hidden !important;
    justify-content: center;
    &__food {
      list-style-type: none;
      font-size: 20px;
      line-height: 21.83px;
      font-weight: 500;
      font-family: tahoma;
    }
    &__btn {
      color: white;
      width: 180px;
      height: 46px;
      font-size: 18px;
      background-color: #131620;
      cursor: pointer;
    }
    &__btn:focus {
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
    position: relative;
  }
  &__cartBtn {
    position: absolute;
    width: 48px;
    height: 48px;
    background-color: #ffffff;
    border-radius: 50%;
    bottom: 30px;
    right: 38px;
    &__img {
      background-image: url(@/assets/img/cart.png);
      padding-left: 32px;
      padding-top: 10px;
      padding-bottom: 10px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
  }
}
@media screen and (max-width: 650px) {
  .orders {
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
  .orders {
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
