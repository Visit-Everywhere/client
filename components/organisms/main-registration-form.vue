<template>
  <div class="registration-container">
    <div class="registration-container__head">
      <h1>Registration</h1>
      <NuxtLink id="nuxt-links" to="http://localhost:3000/login">Have an account?</NuxtLink>
    </div>
    <form class="registration-container__form">
      <div class="registration-container__form__top-inputs">
        <AtomsVeInput inputPlaceholder="Full Name" />
        <AtomsVeInput inputPlaceholder="Email" />
        <AtomsVeInput inputPlaceholder="Phone number" />
      </div>
      <div class="registration-container__form__sex">
        <h4>Sex:</h4>
        <div class="registration-container__form__sex__radios">
          <AtomsVeRadio radioName="sex" radioLabel="Male" />
          <AtomsVeRadio radioName="sex" radioLabel="Female" />
        </div>
      </div>
      <div class="registration-container__form__bottom-inputs">
        <AtomsVeInput inputPlaceholder="Birthday" />
        <AtomsVeInput inputPlaceholder="Password" inputType="password" />
        <AtomsVeInput inputPlaceholder="Confirm password" inputType="password" />
      </div>
      <AtomsVeCheckbox veCheckboxId="iWant" checkboxLabel="I want to recieve a newsletter to my email." alignText="center" isChecked="true" />
      <AtomsVeButton buttonValue="Create account" buttonWith="220px" class="registration-container__form__button" />
    </form>
    <div class="registration-container__continue">
      <h4>or continue with:</h4>
      <div class="registration-container__continue__icons">
        <img src="@/assets/img/google-icon.svg" alt="google" />
        <img src="@/assets/img/apple-icon.svg" alt="apple" />
      </div>
    </div>
  </div>
</template>

<script setup >

</script>

<style lang="scss" scoped>
.registration-container {
  max-width: 500px;
  margin: 0 auto;
  background: #131620;
  padding: 36px 48px;
  border: 2px solid #494a4d;
  border-radius: 16px;
  &__head {
    display: flex;
    justify-content: space-between;
    & h1 {
      color: #ffffff;
      font-weight: 600;
      font-size: 36px;
    }
  }
  &__form {
    margin: 40px 0;
    display: flex;
    gap: 25px;
    flex-direction: column;
    &__top-inputs {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &__sex {
      margin-left: 12px;
      display: flex;
      gap: 40px;
      & h4 {
        font-weight: 400;
        font-size: 18px;
        color: #808080;
      }
      &__radios {
        display: flex;
        gap: 16px;
      }
    }
    &__bottom-inputs {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &__button {
      margin: 0 auto;
    }
  }
  &__continue {
    display: flex;
    flex-direction: column;
    gap: 19px;
    & h4 {
      font-weight: 400;
      font-size: 16px;
      color: #d4d4d5;
    }
    &__icons {
      display: flex;
      gap: 25px;
      & img {
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}
#nuxt-links {
  text-decoration: none;
  font-weight: 300;
  font-size: 18px;
  color: #d4d4d5;
  padding-top: 15px;
  opacity: 0.9;
}
#nuxt-links:active {
  opacity: 0.7;
}
@media screen and (max-width: 425px) {
  .registration-container {
    padding: 24px;
    &__head {
      & h1 {
        font-weight: 400;
        font-size: 24px;
      }
    }
    &__form {
      &__sex {
        flex-direction: column;
        gap: 16px;
      }
    }
  }
  #nuxt-links {
    padding-top: 5px;
    font-size: 16px;
  }
}
</style>
