<template>
  <div class="header">
    <div class="container header-container">
      <div class="header-left">
        <img src="@/assets/img/LOGO.png" alt="VE" class="header-logo" />
      </div>
      <NuxtLink to="/" class="header-city">Kyiv</NuxtLink>
      <nav class="header-nav">
        <a href="" class="header-nav-link">Filters</a>
        <a href="" class="header-nav-link">Events</a>
        <a href="" class="header-nav-link">Discounts</a>
      </nav>
      <div class="header-right">
        <div class="header-lang">En</div>
        <NuxtLink to="/login" class="header-login">Sign in</NuxtLink>
      </div>
      <button class="header-burger_btn">
        <span class="header-burger_btn-lines"></span>
      </button>
    </div>
  </div>
</template>

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
  &-city {
    font-weight: 600;
    font-size: 24px;
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
}
</style>
