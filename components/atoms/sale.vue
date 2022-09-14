<template>
  <div class="sale">-{{ sale }}%</div>
</template>

<script setup>
const props = defineProps({
  sale: {
    type: Number,
    default: 10,
  },
});
</script>

<style lang="scss" scoped>
.sale {
  background-color: #1ac836;
  width: 62px;
  height: 31px;
  color: #000;
  font-size: 18px;
  border-radius: 69px;
  text-align: center;
  padding: 8px 6px 2px 6px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  position: absolute;
  font-weight: 500;
  line-height: 22px;
  top: -15px;
  right: -25px;
}
</style>
