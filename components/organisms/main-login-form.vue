<template>
  <div class="login-container">
    <h1 class="login-container__header">Login</h1>
    <form class="login-container__form">
      <div class="login-container__form__inputs">
        <AtomsVeInput inputPlaceholder="Email or phone" v-model="emailOrPhone" />
        <AtomsVeInput inputPlaceholder="Password" v-model="password" inputType="password" />
      </div>
      <AtomsVeCheckbox checkboxLabel="Stay authorized" class="login-container__form__checkbox" v-model="checkboxValue" veCheckboxId="stay" />
      <AtomsVeButton buttonValue="Login" class="login-container__form__button" />
    </form>
    <div class="login-container__under-form">
      <div class="login-container__under-form__continue">
        <h4>or continue with:</h4>
        <div class="login-container__under-form__continue__icons">
          <img src="@/assets/img/google-icon.svg" alt="google" />
          <img src="@/assets/img/apple-icon.svg" alt="apple" />
        </div>
      </div>
      <div class="login-container__under-form__create">
        <NuxtLink id="nuxt-links" to="http://localhost:3000/registration">Create account</NuxtLink>
        <NuxtLink id="nuxt-links" to="#">Forgot password?</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  let emailOrPhone = ref("")
  let password = ref("")
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
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &__checkbox {
      margin: 24px 0 32px 0;
    }
    &__button {
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
