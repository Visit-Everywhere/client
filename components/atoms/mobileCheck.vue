<template>
  <div class="wrap">
    <label class="wrap__buy">
      <input name="buy" class="wrap__buy__true" type="checkbox" />
      <span class="wrap__buy__custom" @click="check"></span>
    </label>
  </div>
</template>

<script setup>
const props = defineProps(["bluda"]);
</script>

<style lang="scss">
.wrap {
  &__buy {
    &__custom {
      cursor: pointer;
      display: inline-block;
      width: 24px;
      height: 24px;
      vertical-align: sub;
      transition-duration: 0.4ms ease all;
    }
    &__custom::before {
      content: "";
      position: absolute;
      display: inline-block;
      width: 30px;
      height: 30px;
      background-size: contain;
      background: url(@/assets/img/Plus.png);
      background-repeat: no-repeat;
      position: absolute;
      top: 118px;
      left: 130px;
      background-position: 50% 50%;
      transition-duration: 0.4ms ease all;
    }
    &__true:checked + &__custom::before {
      content: "";
      display: inline-block;
      width: 30px;
      height: 30px;
      background-size: contain;
      background: url(@/assets/img/Minus.png);
      background-repeat: no-repeat;
      position: absolute;
      top: 118px;
      left: 130px;
      background-color: #38405f;
      border-radius: 50%;
      background-position: 50% 50%;
      transition-duration: 0.4ms ease all;
    }
    &__true {
      display: none;
    }
  }
}
</style>
