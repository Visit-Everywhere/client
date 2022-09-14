<template>
  <div class="order">
    <div class="order__list">
      <ul class="order__list__food">
        <li v-for="restaurants in restaurants">{{ restaurants.restaurant }}</li>
      </ul>
    </div>
    <div class="order__price">
      <MoleculesFood sale-mark />
      <MoleculesFood />
      <MoleculesFood sale-mark />
      <MoleculesFood />
      <MoleculesFood />
      <MoleculesFood />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  restaurants: {
    type: Array,
    default: [
      { restaurant: "Lorem ipsum" },
      { restaurant: "Lorem ipsum" },
      { restaurant: "Lorem ipsum" },
      { restaurant: "Lorem ipsum" },
      { restaurant: "Lorem ipsum" },
      { restaurant: "Lorem ipsum" },
      { restaurant: "Lorem ipsum" },
      { restaurant: "Lorem ipsum" },
      { restaurant: "Lorem ipsum" },
      { restaurant: "Lorem ipsum" },
    ],
  },
});
</script>

<style lang="scss" scoped>
.order {
  background: #131620;
  width: 600px;
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
    width: 419px;
    height: 508px;
    display: grid;
    grid-column-gap: 36px;
    grid-row-gap: 16px;
    grid-template-columns: repeat(2, 1fr);
    padding: 24px 32px 16px 24px;
  }
}
</style>
