<template>
  <div class="card">
    <div class="card__picture">
      <img src="@/assets/svg/bakery_ck_242952218_556012462396992_2001863340305304220_n 1.svg" alt="" />
    </div>
    <div class="card__info">
      <p class="card__info-name">{{ name }}</p>
      <p class="card__info-time">{{ time }}</p>
    </div>
    <div class="card__button">
      <button @click="">Edit</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "Backery",
  },
  time: {
    type: String,
    default: "07:00-22:00",
  },
});
</script>

<style lang="scss" scoped>
.card {
  background: #131620;
  border-radius: 16px;
  padding: 16px;
  max-width: 280px;

  &__picture {
    margin-bottom: 22px;
    width: 100%;
    display: flex;
    border: 1px solid #000000;
    border-radius: 16px;
    box-sizing: border-box;
  }
  &__info {
    display: flex;
    justify-content: space-between;
  }
  &-name {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    color: #ffffff;
  }
}
</style>
