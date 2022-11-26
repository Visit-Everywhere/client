<template>
  <OrganismsMainLoginForm />
  <!-- <OrganismsTest/> -->
</template>

<script setup>
const { $publicApi } = useNuxtApp();
const test = await $publicApi.get("/graphql");
console.log(test);
</script>

<style lang="scss"></style>
