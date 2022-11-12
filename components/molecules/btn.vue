<template>
  <div>
    <v-card class="mx-auto" max-width="100%" color="#131620">
      <v-card-title style="color: white"> {{ testProp }} </v-card-title>

      <v-card-actions>
        <v-btn :icon="show ? 'mdi-heart' : 'mdi-heart'" @click="show = !show" color="white" class="icon"><img src="@/assets/img/Vector.png" /></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-card-text style="color: white">
            <AtomsMobileFood v-bind="food" v-for="(food, index) in filterFood" :key="`${index}`" />
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script setup>
const props = defineProps(["testProp"]);
const show = ref(false);

const menuFood = [
  { foodId: "Горячаяя еда", id: "1", saleMark: true },
  { foodId: "Горячаяя еда", id: "1" },
  { foodId: "Горячаяя еда", id: "1" },
  { foodId: "Горячаяя еда", id: "1" },
  { foodId: "Горячаяя еда", id: "1" },
  { foodId: "Бургеры", id: "2" },
  { foodId: "Бургеры", id: "2" },
  { foodId: "Горячаяя еда", id: "1" },
  { foodId: "Бургеры", id: "2" },
];
const filteredMenu = [];
const filterFood = menuFood.filter((food) => food.id === "1");
filteredMenu.push(...filterFood);
</script>
