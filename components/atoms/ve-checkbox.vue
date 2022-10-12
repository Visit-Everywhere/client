<template>
  <div class="input" onselectstart="return false" onmousedown="return false" :style="{ textAlign: alignText }">
    <input type="checkbox" :id="veCheckboxId" class="input__checkbox" :checked="isChecked" />
    <label :for="veCheckboxId" class="input__label">{{ checkboxLabel }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
    checkboxLabel: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Array,
      default: () => [],
    },
    veCheckboxId: {
      type: String,
      default: "",
    },
    alignText: {
      type: String,
      default: "left",
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
});
</script>

<style lang="scss" scoped>
.input {
  &__checkbox {
    display: none;
  }
  &__label {
    padding-left: 22px;
    color: #808080;
    font-weight: 400;
    font-size: 18px;
  }
  &__label::before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: inherit;
    border: 2px solid #808080;
    border-radius: 50%;
    vertical-align: sub;
    margin-left: -22px;
    margin-right: 16px;
    transition: 0.3s;
    cursor: pointer;
  }
}
input[type="checkbox"]:hover + label::before {
  border: 2px solid #585858;
}
input[type="checkbox"]:checked + label::before {
  background-color: #fff;
}
input[type="checkbox"]:checked + label {
  color: #d4d4d5;
}
</style>
