<template>
  <div>
    <div class="d-flex grid-columns-repeat-380 grid-items-center grid-gap width-container-590 margin-auto">
      <MoleculesPriceCard v-bind="item" v-for="(item, index) in allCards" :key="index" />
    </div>
    <AtomsAboutOne />
  </div>
</template>
<script setup>
const listOne = ["hui", "zalupa", "gay"];
const listTwo = [1, 2, 3, 4, 5, 6];
const listThree = ["back", "chek", "heck"];

const priceCardOne = { label: "Silve", list: listOne, price: 3.99 };
const priceCardTwo = { label: "Gold", list: listTwo, price: 9.99 };
const priceCardThree = { label: "Platinum", list: listThree, price: 14.99 };

const allCards = [{ ...priceCardOne }, { ...priceCardTwo }, { ...priceCardThree }];
</script>
<style lang="scss" scoped>
.d-flex {
  display: grid;
}
.grid-items-center {
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
}
.grid-gap {
  grid-gap: 50px;
}
.width-container-590 {
  max-width: 1180px;
}
.margin-auto {
  margin: 0 auto;
}
.grid-items-center {
  justify-items: center;
}
</style>
