<template>
  <div class="form-container">
    <span>
      <h1>Restore password</h1>
      <h5>Enter the 6-digit code you received.</h5>
    </span>
    <v-form v-model="valid">
      <v-text-field label="Code" hide-details="auto" class="form-container__input" variant="underlined" v-model="code"></v-text-field>
      <v-btn :rules="codeRules" height="56px" rounded="pill" color="#38405F" class="form-container__button" @click="verify" :disabled="!valid">Restore</v-btn>
    </v-form>
  </div>
</template>

<script setup>
import { authUserState } from "~/stores/authUserFroms";
const { verifyCode } = authUserState();
const code = ref("");
const valid = ref(false);
const codeRules = [(v) => !!v || "Code is required"];

const verify = () => {
  const codeBody = {
    email: authUserState().currentUser.userDto.email,
    code: code.value,
  };
  verifyCode(codeBody);
};
</script>

<style lang="scss" scoped>
.form-container {
  max-width: 500px;
  margin: 0 auto;
  background: #131620;
  padding: 48px 36px;
  border: 2px solid #494a4d;
  border-radius: 16px;
  & h1 {
    color: #fff;
    font-weight: 600;
    font-size: 36px;
  }
  & h5 {
    color: #d4d4d5;
    font-weight: 400;
    font-size: 18px;
    margin-top: 16px;
  }
  &__input {
    color: #808080;
    margin: 40px 0 48px 0;
  }
  &__button {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;

    display: flex;
    padding: 16px 47px;
    max-width: 180px;
    color: #fff;
    margin: 0 auto;
  }
}
</style>
