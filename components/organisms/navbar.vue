<template>
  <div class="header">
    <div class="container header-container">
      <div class="header-left">
        <img src="assets/LOGO.png" alt="VE" class="header-logo" />
      </div>
      <div class="header-city">Kyiv</div>
      <nav class="header-nav">
        <a href="" class="header-nav-link">Filters</a>
        <a href="" class="header-nav-link">Events</a>
        <a href="" class="header-nav-link">Discounts</a>
      </nav>
      <div class="header-right">
        <div class="header-lang">En</div>
        <button class="header-login">Sign in</button>
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
}
.header::after {
  margin-top: 23px;
  display: block;
  content: "";
  width: 100%;
  height: 1px;
  background-color: #fff;
  opacity: 0.15;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/*header-left*/
.header-left,
.header-right {
  display: flex;
  justify-content: start;
  align-items: center;
}
.header-logo {
  width: 80px;
  height: 80px;
}
.header-city {
  font-weight: 600;
  font-size: 24px;
}
/*header-nav*/
.header-nav {
  display: flex;
  justify-content: start;
  align-items: center;
}
.header-nav-link {
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  font-size: 24px;
  align-items: center;
  transition: color 0.2s ease-in-out;
}
.header-nav-link:hover {
  color: #eab52e;
}
.header-nav-link::after {
  margin: auto 30px;
  content: " ";
  width: 5px;
  height: 5px;
  vertical-align: middle;
  border-radius: 50%;
  background: #fff;
  display: inline-block;
}
.header-nav-link:last-child::after {
  display: none;
}
/*header-right*/
.header-lang {
  font-weight: 500;
  font-size: 20px;
}
.header-login {
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
.header-login:hover {
  border: 2px solid #fff;
}
</style>
