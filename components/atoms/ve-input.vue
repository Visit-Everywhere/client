<template>
  <div class="component-container">
    <input class="component-container__input" :type="inputType" @input="$emit('update:modelValue', $event.target.value)" :placeholder="inputPlaceholder" :style="{ maxWidth: inputWidth }" />
  </div>
</template>
<script>
export default {
  name: "uiInput",
  props: {
    inputPlaceholder: {
      type: String,
      default: "enter the message",
    },
    inputWidth: {
      type: String,
      default: "100%",
    },
    modelValue: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "string",
    },
    inputMask: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
    },
  },
};
</script>
<style lang="scss" scoped>
.component-container {
  &__input {
    padding: 8px 30px;
    border: 0;
    border-bottom: 1px solid rgb(39, 41, 50);
    background-color: inherit;
    outline: 0;
    height: 50px;
    color: #d4d4d5;
    width: 100%;
    font-weight: 400;
    font-size: 20px;
    box-sizing: border-box;
  }
  &__input:focus {
    border-color: #d4d4d5;
  }
  &__input::placeholder {
    color: #808080;
    font-weight: 400;
    font-size: 20px;
  }
}
</style>
