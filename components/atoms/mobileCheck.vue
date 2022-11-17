<template>
  <div class="wrap">
    <label class="wrap__buy" for="1.1">
      <input name="buy" class="wrap__buy__true" type="checkbox" />
      <span class="wrap__buy__custom"></span>
    </label>
  </div>
</template>

<script setup></script>

<style lang="scss">
.wrap {
  &__buy {
    &__custom {
      cursor: pointer;
      display: inline-block;
      width: 24px;
      height: 24px;
      vertical-align: sub;
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
    }
  }
}
</style>
