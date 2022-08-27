<template>
  <div style="width: 100%">
    <TemplatesIndexPage />
    <RestaurantCard/>
  </div>
</template>

<script setup>
import RestaurantCard from '~~/components/organisms/restaurant-card.vue';
definePageMeta({
  layout: "custom",
});
</script>

<style lang="scss" >
.relative {
  position: relative;
}
</style>


