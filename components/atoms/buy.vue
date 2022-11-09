<template>
  <div class="wrap">
    <div class="wrap__buy">
      <img src="@/assets/img/Vector.png" @click="show" />
    </div>

    <div class="wrap__unbuy">
      <img src="@/assets/img/Vector_no.png" @click="show" />
    </div>
  </div>
</template>

<script setup>
const show = () => {
  show.value = !show.value;
};
</script>

<style></style>
