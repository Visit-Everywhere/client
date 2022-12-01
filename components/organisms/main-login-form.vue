<template>
  <div class="login-container">
    <h1 class="login-container__header">Login</h1>
    <v-form class="login-container__form" v-model="valid">
      <div class="login-container__form__inputs">
        <v-text-field label="Email" v-model="email" class="main-input" :rules="emailRules" variant="underlined"></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          @click:append-inner="showPassword = !showPassword"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="showPassword ? 'text' : 'password'"
          :rules="passwordRules"
          variant="underlined"
        ></v-text-field>
      </div>
      <AtomsVeCheckbox checkboxLabel="Stay authorized" class="login-container__form__checkbox" v-model="checkboxValue" :isChecked="checkboxValue" veCheckboxId="stay" />
      <div class="btn-login">
        <v-btn class="login-container__form__button" height="56px" rounded="pill" color="#38405F" block :disabled="!valid" @click="login">Login</v-btn>
      </div>
    </v-form>
    <div class="login-container__under-form">
      <div class="login-container__under-form__continue">
        <h4>or continue with:</h4>
        <div class="login-container__under-form__continue__icons">
          <img src="@/assets/img/google-icon.svg" alt="google" />
          <img src="@/assets/img/apple-icon.svg" alt="apple" />
        </div>
      </div>
      <div class="login-container__under-form__create">
        <NuxtLink id="nuxt-links" to="/registration">Create account</NuxtLink>
        <NuxtLink id="nuxt-links" to="/restore-password">Forgot password?</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { authUserState } from "~~/stores/authUserForms";
const { loginUser } = authUserState();
const { post, get } = useNuxtApp().$publicApi;

const email = ref("");
const emailRules = [(v) => !!v || "E-mail is required", (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"];
const password = ref("");
const passwordRules = [(v) => !!v || "Name is required"];
const showPassword = ref(false);
const valid = ref(false);
const checkboxValue = ref(true);

const login = () => {
  loginUser({ email: email.value, password: password.value });
  // try {
  //   const data = await post("user/login", { email: "slipmaks@gmail.com", password: "123123123" });
  //   console.log(data.data);
  // } catch (e) {
  //   console.log(e);
  // }
};
</script>

<style lang="scss" scoped>
.login-container {
  max-width: 500px;
  margin: 0 auto;
  background: #131620;
  padding: 21px 42px 42px 42px;
  border: 2px solid #494a4d;
  border-radius: 16px;
  &__header {
    font-weight: 600;
    font-size: 36px;
    color: #fff;
  }
  &__form {
    margin: 88px 0 31px 0;
    &__inputs {
      color: #808080;
      display: flex;
      flex-direction: column;
    }
    &__checkbox {
      margin: 24px 0 32px 0;
    }
    &__button {
      color: #d4d4d5;
      max-width: 180px;
      margin: 0 auto;
    }
  }
  &__under-form {
    display: flex;
    justify-content: space-between;
    color: #d4d4d5;
    &__continue {
      display: flex;
      flex-direction: column;
      gap: 19px;
      &__icons {
        display: flex;
        gap: 10px;
        & img {
          cursor: pointer;
          &:hover {
            opacity: 0.7;
          }
        }
      }
      & h4 {
        font-weight: 400;
        font-size: 16px;
        letter-spacing: 0.002em;
      }
    }
    &__create {
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-weight: 400;
      font-size: 18px;
    }
  }
}
#nuxt-links {
  text-decoration: none;
  font-weight: 300;
  font-size: 18px;
  color: #d4d4d5;
  opacity: 0.9;
}
#nuxt-links:active {
  opacity: 0.7;
}
@media screen and (max-width: 425px) {
  .login-container {
    padding: 24px 24px 32px 24px;
    &__form {
      margin-top: 24px;
    }
    &__under-form {
      margin: 0 auto;
      flex-direction: column;
      text-align: center;
      gap: 39px;
      &__continue {
        text-align: center;
        &__icons {
          justify-content: center;
        }
      }
    }
  }
}
</style>
