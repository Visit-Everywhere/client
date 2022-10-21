<template>
  <div>
    <!-- <OrganismsNavbar /> -->
    <NewNav />
    <!-- <OrganismsFooter /> -->
  </div>
</template>

<style lang="scss">
.relative {
  position: relative;
}
</style>

<script>
import NewNav from "@/components/organisms/NewNav.vue";
export default {
  data: () => ({
    c1: "#ff00ff",
    c2: "#00ff00",
  }),
  components: {
    NewNav,
  },
};
</script>
