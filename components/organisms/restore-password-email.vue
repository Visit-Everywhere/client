<template>
  <div class="form-container">
    <span>
      <h1>Restore password</h1>
      <h5>Write your phone number or email from the account</h5>
    </span>
    <form>
      <v-text-field
        label="Email"
        :rules="rules"
        hide-details="auto"
        class="form-container__input"
        type="email"
      ></v-text-field>
      <v-btn  height="56px"   rounded="pill" color="#38405F"  class="form-container__button" >Next</v-btn>
    </form>
  </div>
</template>

<script setup>
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
    padding: 16px 47px;

    display: flex;
    color: #FFFFFF;
    max-width: 180px;
    margin: 0 auto;
    margin: 0 auto;
  }
}
</style>
