<template>
  <div class="card">
    <div class="card__picture">
      <img src="@//assets/svg/bakery.svg" alt="" />
    </div>
    <div class="card__info">
      <p class="card__info-name">{{ name }}</p>
      <p class="card__info-time">{{ time }}</p>
    </div>
    <div class="card__button">
      <button class="card__button-button">Edit</button>
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
  position: absolute;
  top: 25%;
  left: 25%;

  background: #131620;
  border-radius: 16px;
  padding: 16px;
  max-width: 280px;

  &__picture {
    margin-bottom: 22px;
    display: flex;

    border-radius: 16px;
    box-sizing: border-box;
    justify-self: center;
  }
  &__info {
    display: flex;
    justify-content: space-between;

    &-time {
      font-weight: 300;
      font-size: 16px;
      line-height: 22px;
      color: #ffffff;
      margin-top: 6px;
    }

    &-name {
      font-weight: 400;
      font-size: 24px;
      line-height: 33px;
      color: #ffffff;
      margin-bottom: 19px;
    }
  }
  &__button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        gap: 16px;

    &-button{
        padding: 16px 47px;
        gap: 16px;
        border: 2px solid #494A4D;
        border-radius: 32px;
        background:none ;

        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.002em;
        color: #FFFFFF;
        flex: none;
        order: 0;
        flex-grow: 0;
        cursor: pointer;
    }
    &-button:hover{
        color: #131620;
        background-color: #FFFFFF;
    }

  }
}
</style>
