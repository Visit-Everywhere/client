<template>
  <div onselectstart="return false" onmousedown="return false" class="button-container" :style="{ width: buttonWith }">
    <input class="button-container__button" :value="buttonValue" />
  </div>
</template>

<script setup>
  const props= defineProps ({
    buttonWith: {
      type: String,
      default: "160px",
    },
    buttonValue: {
      type: String,
      default: "",
    }
  });
</script>

<style lang="scss" scoped>
.button-container {
  &__button {
    text-align: center;
    width: 100%;
    border-radius: 32px;
    background-color: #38405f;
    color: #ffffff;
    border: 0;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 18px;
    line-height: 24px;
    cursor: pointer;
    &:hover {
      background-color: #31364d;
      box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.24), 0 5px 5px 0 rgba(0, 0, 0, 0.19);
    }
    &:active {
      background-color: #212535;
      transform: translateY(1px);
    }
  }
}
</style>
