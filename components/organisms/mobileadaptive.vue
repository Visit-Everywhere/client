<template>
  <div>
    <MoleculesBtn v-for="someMenu in menuList" :key="someMenu" :testProp="someMenu" />
  </div>
</template>

<script setup>
const menuList = ["Горячаяя еда", "Бургеры", "Срака"];
</script>

<style lang="scss">
.icon:focus {
  transform: rotate(-90deg);
}
</style>
