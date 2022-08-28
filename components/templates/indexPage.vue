<template>
  <div>
    <MoleculesTest v-for="(item, index) in tester" :key="index" v-bind="item" />
  </div>
</template>

<script setup>
const uniq = { name: "Anime", backgroundColor: "black", descrip: "Смотрю аниме!!" };
const uniq1 = { name: "Anime1", backgroundColor: "black", descrip: "Смотрю аниме!!" };
const uniq2 = { name: "Anime2", backgroundColor: "black", descrip: "Смотрю аниме!!" };

const tester = [{ ...uniq }, { ...uniq1 }, { ...uniq2 }];
</script>

<style></style>
