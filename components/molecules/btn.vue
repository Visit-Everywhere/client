<template>
  <div class="order">
    <v-card class="mx-auto" max-width="100%" color="#131620">
      <v-card-actions style="height: 73px; margin-right: 30px; padding-top: 24px; padding-bottom: 24px" @click="handleClickCart">
        <div style="color: white; padding-left: 24px">{{ testProp }}</div>
        <v-spacer></v-spacer>
        <v-btn :icon="show ? 'mdi-heart' : 'mdi-heart'" color="white" class="icon"><img src="@/assets/img/Vector.png" /></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-card-text style="color: white; padding-top: 20px" class="order__food">
            <AtomsMobileFood v-bind="food" v-for="(food, index) in filteredMenu" :key="`${index}`" />
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script setup>
const props = defineProps(["testProp"]);
const show = ref(false);
const filteredMenu = ref([]);
const menuFood = [
  { foodId: "Горячаяя еда", id: 1, saleMark: true },
  { foodId: "Горячаяя еда", id: 1 },
  { foodId: "Горячаяя еда", id: 1 },
  { foodId: "Горячаяя еда", id: 1 },
  { foodId: "Горячаяя еда", id: 1 },
  { foodId: "Бургеры", id: 2 },
  { foodId: "Бургеры", id: 2 },
  { foodId: "Горячаяя еда", id: 1 },
  { foodId: "Бургеры", id: 2 },
];
filteredMenu.value = menuFood.filter((food) => food.foodId === props.testProp);
const handleClickCart = (id) => {
  show.value = !show.value;
};
</script>
<style lang="scss">
.order {
  cursor: pointer;
  justify-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  &__food {
    overflow-x: auto;
    overflow-y: none;
    max-height: 400px;
    gap: 10px;
    padding: 0;
    justify-content: center;
    display: grid;
    row-gap: 24px;
    grid-template-columns: 190px auto;
  }
}
.mx-auto {
  justify-content: center;
}
</style>
