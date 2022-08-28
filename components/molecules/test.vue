<template>
  <div class="title" :style="{ backgroundColor }">
    <h1>{{ name }}</h1>
    <h2>{{ descrip }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "Педик",
  },
  backgroundColor: {
    type: String,
    default: "#fff",
  },
  descrip: {
    type: String,
    default: "Описание",
  },
});
</script>

<style lang="scss" scoped>
.title {
  font-family: Tahoma;
  font-size: medium;
  color: aquamarine;
  border: 2px;
  border-color: azure;
  width: 300px;
  height: 300px;
  background-color: rgb(230, 44, 137);
}
</style>
