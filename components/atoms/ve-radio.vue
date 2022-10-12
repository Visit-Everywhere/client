<template>
  <div class="input" onselectstart="return false" onmousedown="return false">
    <input class="input__radio" type="radio" :id="radioLabel" :name="radioName" :value="value" @change="$emit('update:modelValue', $event.target.value)" :checked="value === modelValue" />
    <label class="input__label" :for="radioLabel">{{ radioLabel }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
    value: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    radioLabel: {
      type: String,
      default: "",
    },
    radioName: {
      type: String,
      default: "",
    },
    veRadioId: {
      type: String,
      default: "",
    },
});
</script>

<style lang="scss" scoped>
.input {
  &__radio {
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
input[type="radio"]:hover + label::before {
  border: 2px solid #585858;
}
input[type="radio"]:checked + label::before {
  background-color: #fff;
}
input[type="radio"]:checked + label {
  color: #d4d4d5;
}
</style>
