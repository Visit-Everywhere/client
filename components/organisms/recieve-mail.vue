<template>
  <div class="form-container">
    <span>
      <h1>Confirm your email</h1>
      <h5>You recive a 6-digit code to your email. Please write him.</h5>
    </span>
    <form>
      <AtomsVeInput class="form-container__input" inputPlaceholder="Code" />
      <AtomsVeButton class="form-container__button" buttonValue="Next" />
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
    margin: 40px 0 48px 0;
  }
  &__button {
    margin: 0 auto;
  }
}
</style>
