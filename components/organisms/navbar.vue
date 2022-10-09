<template>
  <div class="header">
    <div class="container header-container">
      <div class="header-left">
        <img src="@/assets/img/LOGO.png" alt="VE" class="header-logo" />
      </div>
      <v-select v-model="select" :hint="`${select.state}, ${select.abbr}`" :items="items" item-title="state" item-value="abbr" label="Select" persistent-hint return-object single-line></v-select>
      <!-- <NuxtLink to="/" class="header-city">Kyiv</NuxtLink> -->
      <nav class="header-nav">
        <a href="" class="header-nav-link">Filters</a>
        <a href="" class="header-nav-link">Events</a>
        <a href="" class="header-nav-link">Discounts</a>
      </nav>
      <div class="header-right">
        <div class="header-lang">En</div>
        <NuxtLink to="/login" class="header-login">Sign in</NuxtLink>
      </div>
      <button class="header__burger_btn">
        <img src="@/assets/img/burger.png" />
      </button>
      <div class="header__burger__list">
        <img class="header__burger__list__arrow" src="@/assets/img/arrow.png" />
        <select class="header__burger__list__lang">
          <option>En</option>
          <option>Ua</option>
        </select>
        <ul class="header__burger__list__show">
          <li><a class="header__burger__list__show__ref" href="#services">Filters</a></li>
          <li><a class="header__burger__list__show__ref" href="#advantages">Events</a></li>
          <li><a class="header__burger__list__show__ref" href="#projects">Discount</a></li>
          <li><a class="header__burger__list__show__ref" href="#plan">Cart</a></li>
          <li><a class="header__burger__list__show__ref" href="#testimonials">Exit</a></li>
          <button class="header__burger__list__show__btn">Add place</button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: { state: "Florida", abbr: "FL" },
      items: [
        { state: "Florida", abbr: "FL" },
        { state: "Georgia", abbr: "GA" },
        { state: "Nebraska", abbr: "NE" },
        { state: "California", abbr: "CA" },
        { state: "New York", abbr: "NY" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin-top: 15px;
  height: 85px;
  padding-bottom: 23px;
  &::after {
    margin-top: 23px;
    display: block;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #fff;
    opacity: 0.15;
  }
  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__select {
    width: 100px;
    height: 100px;
    color: red;
  }
  &-left,
  &-right {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  &-logo {
    width: 80px;
    height: 80px;
  }
  &__city {
    width: 40px;
    height: 40px;
    font-weight: 600;
    font-size: 24px;
    color: red;
  }
  &-nav {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  &-nav-link {
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    font-size: 24px;
    align-items: center;
    transition: color 0.2s ease-in-out;
  }
  &-nav-link:hover {
    color: #eab52e;
  }
  &-nav-link::after {
    margin: auto 30px;
    content: " ";
    width: 5px;
    height: 5px;
    vertical-align: middle;
    border-radius: 50%;
    background: #fff;
    display: inline-block;
  }
  &-nav-link:last-child::after {
    display: none;
  }
  &-lang {
    font-weight: 500;
    font-size: 20px;
  }
  &-login {
    margin-left: 30px;
    font-size: 20px;
    font-weight: 600;
    padding: 14px 55px;
    border-radius: 32px;
    background-color: #38405f;
    color: #fff;
    outline: none;
    cursor: pointer;
    border: 2px solid transparent;
    transition: 0.3s ease;
  }
  &-login:hover {
    border: 2px solid #fff;
  }
  &__burger__list {
    line-height: 20px;
  }
  &__burger_btn {
    width: 34px;
    height: 38px;
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    margin-right: 10px;
  }
  &__burger__list__show {
    margin-right: 20px;
    background-color: #38405f;
    width: 200px;
    height: 100%;
    list-style-type: none;
    color: #ffffff;
    position: relative;
  }
  &__burger__list__lang {
    width: 200px;
    height: 30px;
    font-weight: 500;
    display: block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #38405f;
    border: 0px;
    color: #ffffff;
    padding-left: 60px;
  }
  &__burger__list__arrow {
    float: left;
    position: absolute;
    width: 11px;
    height: 7px;
    top: 27px;
    padding-left: 35px;
  }
  &__burger__list__show__ref {
    color: inherit;
    text-decoration: inherit;
    margin-left: 28px;
  }
  &__burger__list__show__btn {
    width: 200px;
    height: 38px;
    padding: 0;
    border: none;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
}
</style>
