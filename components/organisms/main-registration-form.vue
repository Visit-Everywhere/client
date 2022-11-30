<template>
  <div class="registration-container">
    <div class="registration-container__head">
      <h1>Registration</h1>
      <NuxtLink id="nuxt-links" to="http://localhost:3000/login">Have an account?</NuxtLink>
    </div>
    <v-form class="registration-container__form" v-model="valid" lazy-validation>
      <div class="registration-container__form__top-inputs">
        <v-text-field label="Full name" :rules="fullNameRules" v-model="fullName" variant="underlined"></v-text-field>
        <v-text-field label="Email" :rules="emailRules" v-model="email" variant="underlined"></v-text-field>
        <v-text-field label="Phone number" v-maska="'+38(###) ## ## ###'" placeholder="0999999999" :rules="phoneRules" v-model="phoneNumber" variant="underlined"></v-text-field>
      </div>

      <div class="registration-container__form__bottom-inputs">
        <v-text-field label="Birthday" :rules="birthdayRules" type="date" v-model="birthday" variant="underlined"></v-text-field>
        <v-text-field
          label="Password"
          :rules="passwordRules"
          :type="showPassword ? 'text' : 'password'"
          @click:append-inner="showPassword = !showPassword"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          v-model="password"
          variant="underlined"
        >
        </v-text-field>
        <v-text-field
          label="Confirm password"
          :rules="confirmPasswordRules"
          :type="showConfirmPassword ? 'text' : 'password'"
          @click:append-inner="showConfirmPassword = !showConfirmPassword"
          :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
          v-model="confirmPassword"
          variant="underlined"
        ></v-text-field>
      </div>
      <AtomsVeCheckbox veCheckboxId="iWant" checkboxLabel="I want to receive a newsletter to my email." alignText="center" v-model:checked="checkboxValue" />
      <v-btn height="56px" rounded="pill" color="#38405F" class="registration-container__form__button" @click="registration" :disabled="!enableBtn">Create an account</v-btn>
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
import { authUserState } from "~/stores/authUserFroms";
const { createNewUser } = authUserState();
const valid = ref(false);
const fullName = ref("");
const fullNameRules = [(v) => !!v || "Name is required"];
const email = ref("");
const emailRules = [(v) => !!v || "E-mail is required", (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"];
const phoneNumber = ref("");
const phoneRules = [(v) => !!v || "Phone is required"];
const birthday = ref("");
const birthdayRules = [(v) => !!v || "Birthday is required"];
const password = ref("");
const passwordRules = [(v) => !!v || "Password is required", (v) => v.length >= 8];
const showPassword = ref(false);
const confirmPassword = ref("");
const confirmPasswordRules = [(v) => !!v || "Confirm password is required", (v) => (!!v && v) === password.value || "Values do not match"];
const showConfirmPassword = ref(false);
const checkboxValue = ref(false);

const enableBtn = computed(() => {
  return checkboxValue.value && valid.value;
});

const registration = () => {
  const summary = {
    email: email.value,
    username: fullName.value,
    password: password.value,
    birthday: birthday.value,
    phone: phoneNumber.value,
    news: checkboxValue.value,
  };
  createNewUser(summary);
};

// const registration = async () => {
//   const summary = {
//     email: email.value,
//     username: fullName.value,
//     password: password.value,
//   };
//   console.log(summary);
//   let response = await fetch("http://localhost:5000/user/register", {
//     method: "POST",
//     body: JSON.stringify(summary),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (response.status == 200) {
//     console.log("text");
//     const json = await response.json();
//     console.log(json);
//   }
// };
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
//проблема: фикс иконки календаря
input[type="date" i]::-webkit-calendar-picker-indicator {
  filter: invert(47%) sepia(73%) saturate(0%) hue-rotate(212deg) brightness(92%) contrast(93%);
}
</style>
