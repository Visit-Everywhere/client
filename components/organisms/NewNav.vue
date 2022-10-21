<template>
  <header class="header" :class="{ 'scrolled-nav': scrollPosition }">
    <nav class="nav">
      <div class="nav__branding">
        <img class="nav__branding__img" src="@/assets/img/LOGO-trans 2.png" />
      </div>
      <div class="chooser">
        <v-select :items="['Kyiv']" variant="underlined" density="comfortable"></v-select>
        <img class="chooser__arrow" src="@/assets/img/arrow.png" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="navigation__link" :to="{ name: '' }">Filter</router-link></li>
        <li><router-link class="navigation__link" :to="{ name: '' }">Events</router-link></li>
        <li><router-link class="navigation__link" :to="{ name: '' }">Discounts</router-link></li>
      </ul>
      <div v-show="!mobile">
        <v-select :items="['En', 'Ua']" variant="underlined" density="comfortable"></v-select>
      </div>
      <div v-show="!mobile">
        <NuxtLink to="/login" class="navigation__login">Sign in</NuxtLink>
      </div>
      <div class="icon">
        <img src="@/assets/img/Vector.png" @click="toggleMobileNav" v-show="mobile" :class="{ 'icon-active': mobileNav }" />
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav == true" class="dropdown-nav">
          <li class="dropdown-nav__close" @click="toggleMobileNav"><img src="@/assets/img/close_btn.png" /></li>
          <li class="dropdown-nav__chooser">
            <img class="dropdown-nav__arrow" src="@/assets/img/arrow.png" />
            <v-select :items="['En', 'Ua']" variant="underlined" density="comfortable"></v-select>
          </li>
          <li><router-link class="navigation__link" :to="{ name: '' }">Filter</router-link></li>
          <li><router-link class="navigation__link" :to="{ name: '' }">Events</router-link></li>
          <li><router-link class="navigation__link" :to="{ name: '' }">Discounts</router-link></li>
          <li class="login__btn"><button v-show="mobileNav">Login</button></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "nvigation",
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      if (process.browser) {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth <= 678) {
          this.mobile = true;
          return;
        }
        this.mobile = false;
        this.mobileNav = false;
        return;
      }
      console.log(checkScreen());
    },
    created() {
      if (process.browser) {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #252525;
  z-index: 99;
  width: 100%;
  transition: 0.5s ease all;
  color: white;
  nav {
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 70%;
    margin: 0 auto;
    align-items: center;
    ul,
    .link {
      font-weight: 500;
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
  &__login {
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
    cursor: pointer;
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
  margin: 0 auto;
  min-width: 10px;
  max-width: 35px;
  display: flex;
  justify-content: center;
  &__arrow {
    position: absolute;
    top: 58px;
    left: 1000px;
    cursor: pointer;
  }
  &__arrow:hover {
    transition: 0.8s ease all;
    transform: rotate(90deg);
  }
}
.login__btn {
  position: absolute;
  height: 60px;
  width: 90%;
  margin: 0 auto;
  position: relative;
  top: 510px;
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
@media screen and (max-with: 1140px) {
  html {
    max-width: 1140px;
  }
}
</style>
