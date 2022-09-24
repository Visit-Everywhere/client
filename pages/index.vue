<template>
  <div>
    <v-row>
      <v-col cols="12" md="3">
        <v-btn block>123123</v-btn>
      </v-col>
      <v-col cols="12" md="3"> <v-btn block>123123</v-btn></v-col>
      <v-col cols="12" md="3"> <v-btn block>123123</v-btn></v-col>
    </v-row>
    <OrganismsFooter />
  </div>
</template>

<style lang="scss">
.relative {
  position: relative;
}
</style>

<script>
export default {
  data: () => ({
    c1: "#ff00ff",
    c2: "#00ff00",
  }),
};
</script>
