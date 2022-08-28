<template>
  <div class="price-card" :style="{ backgroundColor }">
    <div class="price-card__top">
      <h1 class="price-card__top__header">{{ label }}</h1>
      <div class="price-card__top__list">
        <ul>
          <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="price-card__bottom">
      <h4 class="price-card__bottom__description">{{ description }}</h4>
      <h3 class="price-card__bottom__price">${{ price }}/month</h3>
      <div class="price-card__bottom__subscribe" :style="{ backgroundColor: subscribeButtonColor }"><p>Subscribe</p></div>
    </div>
    <div class="price-card__choise" v-if="isHideChoise">Editor's Choice</div>
  </div>
</template>
<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "Бэк уёбок",
    require: true,
  },
  backgroundColor: {
    type: String,
    default: "#131620",
  },
  isHideChoise: {
    type: Boolean,
    default: false,
  },
  list: {
    type: Array,
    default: () => [],
  },
  description: {
    type: String,
    default: "Best for roadside cafes",
  },
  price: {
    type: Number,
    default: 3,
  },
  subscribeButtonColor: {
    type: String,
    default: "#38405f",
  },
});
console.log(props);
</script>
<style lang="scss" scoped>
.price-card {
  max-width: 100%;
  color: white;
  border-radius: 16px;
  padding: 36px;
  position: relative;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__top {
    &__header {
      line-height: 38.19px;
      margin-bottom: 36px;
    }
    &__list {
      color: #d4d4d5;
      font-size: 18px;
      line-height: 24.55px;
      margin-left: 18px;
      margin-bottom: 25px;
      font-weight: 300px;
    }
  }
  &__bottom {
    &__description {
      max-width: 152px;
      font-size: 24px;
      line-height: 33px;
      padding-bottom: 36px;
      margin-right: 140px;
    }
    &__price {
      font-weight: 400;
      font-size: 28px;
      line-height: 38px;
      max-width: 180px;
      margin-right: auto;
      margin-left: auto;
      text-align: center;
    }
    &__subscribe {
      border-radius: 32px;
      margin-top: 24px;
      margin-left: auto;
      margin-right: auto;
      max-width: 180px;
      padding-top: 16px;
      padding-bottom: 16px;
    }
    &__subscribe p {
      max-width: 81px;
      margin: 0 auto;
      text-align: center;
    }
  }
  &__choise {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #131620;
    border-radius: 0px 16px 0px 32px;
    padding: 13px 30px;
  }
}

// @media screen and (max-width: 1300px) {
//   .price-card {
//     width: 1px;
//   }
// }
</style>
