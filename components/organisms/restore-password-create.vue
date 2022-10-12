<template>
  <div class="form-container">
    <span>
      <h1>Create a new password</h1>
    </span>
    <form>
      <AtomsVeInput class="form-container__input" inputPlaceholder="Password" inputType="password" />
      <AtomsVeInput class="form-container__confirm" inputPlaceholder="Confirm password" inputType="password" />
      <AtomsVeButton class="form-container__button" buttonValue="Restore" />
    </form>
  </div>
</template>

<script>
export default {};
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
    margin-top: 40px;
  }
  &__confirm {
    margin: 24px 0 48px 0;
  }
  &__button {
    margin: 0 auto;
  }
}
</style>
