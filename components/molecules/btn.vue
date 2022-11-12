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
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with
            that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script setup>
const props = defineProps(["testProp"]);
const show = ref(false);
</script>
