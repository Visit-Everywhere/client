<template>
  <header class="header" :class="{ 'scrolled-nav': scrollPosition }">
    <nav class="nav">
      <div class="nav__branding">
        <a href="/"><img class="nav__branding__img" src="@/assets/img/LOGO-trans 2.png" /></a>
      </div>
      <div class="chooser">
        <v-select :items="['Kyiv']" variant="plain" density="comfortable"></v-select>
        <img class="chooser__arrow" src="@/assets/img/arrow.png" />
      </div>
      <ul class="navigation">
        <li><NuxtLink class="navigation__link" :to="{ name: '' }">Filter</NuxtLink></li>
        <li><NuxtLink class="navigation__link" :to="{ name: '' }">Events</NuxtLink></li>
        <li><NuxtLink class="navigation__link" :to="{ name: '' }">Discounts</NuxtLink></li>
      </ul>
      <div class="navigation__right">
        <div class="navigation__right__chooser">
          <v-select class="navigation__right__chooser__lang" :items="['En', 'Ua']" variant="plain" density="comfortable"></v-select>
          <img class="navigation__right__chooser__arrow" src="@/assets/img/arrow.png" />
        </div>
        <NuxtLink to="/login" class="navigation__right__login">Sign in</NuxtLink>
      </div>
      <div class="icon">
        <img src="@/assets/img/Vector.png" @click="toggleMobileNav" :class="{ 'icon-active': mobileNav }" />
      </div>
      <transition name="mobile-nav">
        <ul v-if="mobileNav" class="dropdown-nav">
          <li class="dropdown-nav__close" @click="toggleMobileNav"><img src="@/assets/img/close_btn.png" /></li>
          <li class="dropdown-nav__chooser">
            <img class="dropdown-nav__arrow" src="@/assets/img/arrow.png" />
            <v-select :items="['En', 'Ua']" variant="plain" density="comfortable"></v-select>
          </li>
          <li><NuxtLink class="navigation__link" :to="{ name: '' }">Filter</NuxtLink></li>
          <li><NuxtLink class="navigation__link" :to="{ name: '' }">Events</NuxtLink></li>
          <li><NuxtLink class="navigation__link" :to="{ name: '' }">Discounts</NuxtLink></li>
          <li class="dropdown-nav__login"><button v-if="mobileNav">Login</button></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script setup>
let mobileNav = ref(false);

const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value;
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  background-color: #252525;
  z-index: 99;
  width: 100%;
  transition: 0.5s ease all;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  justify-content: center;
  nav {
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 70%;
    // margin: 0 auto;
    align-items: center;
    ul,
    .link {
      font-weight: 400;
      color: white;
      list-style: none;
      text-decoration: none;
    }

    li {
      padding: 16px;
      margin-left: 16px;
    }
    .link {
      font-size: 40px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;
    }

    &__branding {
      display: flex;
      align-items: center;

      &__img {
        width: 50px;
        transition: 0.5s ease all;
      }
    }
  }
}
.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  opacity: 0.6;
  &__right {
    display: inline-block;
    width: 20%;
    margin: 0 auto;
    text-align: center;
    &__chooser {
      position: relative;
      float: left;
      display: block;
      &__lang {
        max-width: 25px;
        min-width: 25px;
        float: left;
        margin-right: 20px;
      }
      &__arrow {
        position: absolute;
        top: 35px;
        right: 55px;
      }
      &__arrow:hover {
        transform: rotate(-90deg);
        transition: 0.8s ease all;
      }
    }
    &__login {
      display: flex;
      float: left;
      font-size: 20px;
      font-weight: 600;
      padding: 14px 55px;
      border-radius: 32px;
      background-color: #38405f;
      color: #fff;
      outline: none;
      flex-basis: auto;
      cursor: pointer;
      text-decoration: none;
      border: 2px solid transparent;
      transition: 0.3s ease all;
      &:hover {
        border: 2px solid #fff;
      }
      &:after {
        height: 100px;
      }
    }
  }
  &__link {
    font-size: 24px;
    transition: 0.5s ease all;
    padding-bottom: 4px;
    font-weight: 500;
    color: white;
    list-style: none;
    text-decoration: none;
    &:hover {
      color: #eab52e;
    }
  }
}
.icon {
  display: flex;
  align-items: center;
  position: absolute;
  right: 24px;
  height: 100%;
  width: 50px;
  img {
    cursor: pointer;
    font-size: 24px;
    transition: 0.8s ease all;
  }
}
.icon-active {
  transform: rotate(180deg);
}
.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 300px;
  height: 100%;
  background-color: #131620;
  top: 0;
  right: 0;
  &__arrow {
    position: absolute;
    top: 45px;
    left: -5px;
  }
  &__arrow:hover {
    transition: 0.8s ease all;
    transform: rotate(-90deg);
  }
  &__close {
    align-items: center;
    position: absolute;
    top: 35px;
    right: 30px;
    width: 48px;
    height: 48px;
    border: 2px solid #494a4d;
    border-radius: 50%;
    padding-left: 15px !important;
    padding-top: 13px !important;
    cursor: pointer;
  }
  &__login {
    display: flex;
    justify-content: center;
    position: absolute;
    height: 60px;
    width: 90%;
    margin-bottom: auto;
    margin-bottom: 0 auto;
    position: relative;
    // top: 510px;
    text-align: center;
    padding-left: 30px;
    font-size: 20px;
    font-weight: 600;
    padding: 14px 55px;
    border-radius: 32px;
    background-color: #38405f;
    color: #fff;
    outline: none;
    cursor: pointer;
    border: 2px solid transparent;
    transition: 0.3s ease all;
    &:hover {
      border: 2px solid #fff;
    }
  }

  li {
    margin-right: 0;
  }
  &__chooser {
    min-width: 55px;
    max-width: 55px;
    position: relative;
    margin-left: 35px !important;
  }
}

.chooser {
  position: relative;
  margin-left: 20px;
  min-width: 30px;
  max-width: 35px;
  display: flex;
  justify-content: center;
  &__arrow {
    position: absolute;
    top: 35px;
    left: 40px;
  }
  &__arrow:hover {
    transition: 0.8s ease all;
    transform: rotate(90deg);
  }
}
@media screen and (max-width: 1140px) {
  html {
    max-width: 1140px;
  }
}
@media screen and (max-width: 750px) {
  .navigation,
  .navigation__right__chooser__lang,
  .navigation__right__chooser__arrow,
  .navigation__right__login {
    display: none;
  }
  .chooser {
    align-items: center;
    position: relative;
  }
}
@media screen and (min-width: 750px) {
  .icon {
    display: none;
  }
}
@media screen and (max-width: 1650px) {
  .navigation__right {
    display: flex;
    justify-content: center;
    &__lang {
      width: 50px;
    }
  }
}
@media screen and (max-width: 750px) {
  .chooser {
    margin-left: 90px;
  }
}
@media screen and (max-width: 1075px) {
  .navigation__right__chooser__arrow,
  .navigation__right__chooser__lang {
    display: none;
  }
}
@media screen and (max-width: 1000px) {
  .navigation__right__login {
    // width: 40px;
    // height: 60px;
    padding: 0;
  }
}
</style>
