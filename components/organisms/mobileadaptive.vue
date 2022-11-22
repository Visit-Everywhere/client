<template>
  <div class="order">
    <div class="order__full">
      <MoleculesProduct :testProp="menuList" />
    </div>
    <div class="order__mobile">
      <MoleculesBtn v-for="someMenu in menuList" :key="someMenu" :testProp="someMenu" />
    </div>
  </div>
</template>

<script setup>
const menuList = ["Горячаяя еда", "Бургеры"];
</script>

<style lang="scss">
.order {
  &__mobile {
    width: 390px;
  }
}
@media screen and (min-width: 1440px) {
  .order {
    &__mobile {
      // display: none;
    }
  }
}
</style>
