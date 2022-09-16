<template>
  <div class="input" onselectstart="return false" onmousedown="return false">
    <input type="checkbox" id="ve-checkbox" class="input__checkbox" :value="value" :checked="modelValue.includes(value)" @change="(evt) => onChange(evt.target.value)" />
    <label for="ve-checkbox" class="input__label">{{ checkboxLabel }}</label>
  </div>
</template>

<script>
export default {
  name: "veCheckbox",
  props: {
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
    method: {
      onChange(value) {
        if (this.modelValue.includes(this.value)) {
          this.$emit(
            "update:modelValue",
            this.modelValue.filter((cv) => cv !== value)
          );
        } else {
          this.$emit("update:modelValue", this.modelValue.concat(value));
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  &__checkbox {
    display: none;
  }
  &__label {
    padding-left: 22px;
    color: #d4d4d5;
    font-weight: 400;
    font-size: 20px;
  }
  &__label::before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: inherit;
    border: 2px solid #808080;
    border-radius: 50%;
    vertical-align: top;
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
</style>
