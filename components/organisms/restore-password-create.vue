<template>
  <div class="form-container">
    <span>
      <h1>Create a new password</h1>
    </span>
    <v-form v-model="valid">
      <v-text-field
        label="Password"
        :rules="passwordRules"
        class="form-container__input"
        :type="showPassword ? 'text' : 'password'"
        v-model="password"
        @click:append-inner="showPassword = !showPassword"
        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        variant="underlined"
      ></v-text-field>
      <v-text-field
        label="Confirm password"
        :rules="confirmPasswordRules"
        class="form-container__confirm"
        :type="showConfirmPassword ? 'text' : 'password'"
        v-model="confirmPassword"
        @click:append-inner="showConfirmPassword = !showConfirmPassword"
        :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
        variant="underlined"
      ></v-text-field>
      <v-btn height="56px" rounded="pill" color="#38405F" class="form-container__button" :disabled="!valid" @click="newPassword">Restore</v-btn>
    </v-form>
  </div>
</template>

<script setup>
import { authUserState } from "~~/stores/authUserForms";
const { createNewPassword } = authUserState();
const valid = ref(false);
const password = ref("");
const passwordRules = [(v) => !!v || "Password is required", (v) => v.length >= 8 || "Too short password"];
const showPassword = ref(false);
const confirmPassword = ref("");
const confirmPasswordRules = [(v) => !!v || "Confirm password is required", (v) => (!!v && v) === password.value || "Values do not match"];
const showConfirmPassword = ref(false);

const newPassword = () => {
  const passwordBody = {
    email: authUserState().currentUser.userDto.email,
    password: password.value,
  };
  createNewPassword(passwordBody);
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
  &__input {
    color: #808080;
    margin-top: 40px;
  }
  &__confirm {
    color: #808080;
    margin: 24px 0 48px 0;
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
