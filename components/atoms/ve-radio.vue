<template>
  <div>
    <label for="ui-radio"></label>
    <input type="radio" id="ui-radio" @change="$emit('update:modelValue', $event.target.value)" :checked="value === modelValue" />
  </div>
</template>

<script>
export default {
  name: "veRadio",
  props: {
    value: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
