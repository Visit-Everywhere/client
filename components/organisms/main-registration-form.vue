<template>
  <div class="registration-container">
    <div class="registration-container__head">
      <h1>Registration</h1>
      <NuxtLink id="nuxt-links" to="http://localhost:3000/login">Have an account?</NuxtLink>
    </div>
    <v-form class="registration-container__form" ref="form" v-model="valid" lazy-validation>
      <div class="registration-container__form__top-inputs">
        <v-text-field label="Full name" :rules="fullNameRules" v-model="fullName" required></v-text-field>
        <v-text-field label="Email" :rules="emailRules" v-model="email" required></v-text-field>
        <v-text-field label="Phone number" :rules="phoneRules" v-model="phoneNumber" required></v-text-field>
      </div>

      <div class="registration-container__form__bottom-inputs">
        <v-text-field label="Birthday" :rules="birthdayRules" v-model="birthday" required></v-text-field>
        <v-text-field label="Password" :rules="passwordRules" type="password" v-model="password" required> </v-text-field>
        <v-text-field label="Confirm password" :rules="confirmPasswordRules" type="password" v-model="confirmPassword" required></v-text-field>
      </div>
      <AtomsVeCheckbox veCheckboxId="iWant" checkboxLabel="I want to receive a newsletter to my email." alignText="center" isChecked />
      <v-btn height="56px" rounded="pill" color="#38405F" class="registration-container__form__button" @click.prevent="validate">Create an account</v-btn>
    </v-form>
    <div class="registration-container__continue">
      <h4>or continue with:</h4>
      <div class="registration-container__continue__icons">
        <img src="@/assets/img/google-icon.svg" alt="google" />
        <nuxt-link to="https://i.pinimg.com/originals/24/f1/f5/24f1f54f147a70157d56180b5192f6df.jpg"><img src="@/assets/img/apple-icon.svg" alt="apple" /></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = ref();
const valid = ref(true);
const fullName = ref("");
const fullNameRules = [(v) => !!v || "Name is required"];
const email = ref("");
const emailRules = [(v) => !!v || "E-mail is required", (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"];
const phoneNumber = ref("");
const phoneRules = [];
const birthday = ref("");
const birthdayRules = [];
const password = ref("");
const passwordRules = [];
const confirmPassword = ref("");
const confirmPasswordRules = [(v) => (!!v && v) === password.value || "Values do not match"];

const validate = () => {
  // const { valid } = await form.validate();
  // if (valid) alert("Form is valid");
  console.log(fullName.value);
};
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
      color: #808080;
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
      color: #808080;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    &__button {
      padding: 16px 47px;
      display: flex;
      color: #d4d4d5;
      max-width: 220px;
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
