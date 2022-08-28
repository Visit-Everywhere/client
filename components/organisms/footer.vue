<template>
<div>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-top-left">
          <img
            src="@/assets/img/LOGO.png"
            alt=""
            class="footer-top-left-logo"
          />
          <a href="" class="footer-top-left-link"
            ><img
              src="@/assets/img/tg.png"
              alt="Telegram"
              class="footer-top-left-link-tg"
          /></a>
          <a href="" class="footer-top-left-link"
            ><img
              src="@/assets/img/inst.png"
              alt="Instagram"
              class="footer-top-left-link-inst"
          /></a>
        </div>
        <div class="footer-top-right">
          <a href="" class="footer-top-right-link">About Us</a>
          <a href="" class="footer-top-right-link">Terms</a>
          <a href="" class="footer-top-right-link">Confidentiality</a>
          <a href="" class="footer-top-right-link">For business owners</a>
        </div>
      </div>
      <div class="footer-mid">
        <div class="footer-mid-link">
          <a
            class="footer-mid-email"
            href="https://mail.google.com/"
            target="_blank"
            >everywhere.comp@gmail.com</a
          >
        </div>
        <div class="footer-mid-buttons">
          <button class="footer-mid-buttons-add_place">Add place</button>
          <img
            src="@/assets/img/gplay.png"
            alt=""
            class="footer-mid-buttons-btn"
          />
          <img
            src="@/assets/img/astore.png"
            alt=""
            class="footer-mid-buttons-btn"
          />
        </div>
      </div>
      <div class="footer-bot">
        <p class="footer-bot-text">
          By continuing to use our site, you agree to the terms of service and
          privacy policy.
          <br />
          © Visit everywhere, 2022
        </p>
      </div>
    </div>
  </footer>
  <footer class="footer-mobile">
      <div class="container-mobile">
          <div class="footer-top-mobile">
              <div class="footer-top-top">
                  <img src="@/assets/img/LOGO.png" alt="" class="footer-mobile-logo">
                  <a href="" class="telegram"><img src="@/assets/img/tg.png" alt="Telegram" class="footer-top-left-link-tg"></a>
                  <a href="" class="instagram"><img src="@/assets/img/inst.png" alt="Instagram" class="footer-top-left-link-inst"></a>
              </div>
              <div class="footer-top-bot">
                <img src="@/assets/img/email.png" alt="">
                <a href="#">everywhere.comp@gmail.com</a>
              </div>
          </div>
          <div class="footer-mid-mobile">
            <div class="footer-nav-mobile">
              <div class="footer-nav-mobile-top">
                <a href="" class="footer-nav-mobile-top-link">About Us</a>
                <a href="">Confidentiality</a>
              </div>
              <div class="footer-nav-mobile-bot">
                <a href="" class="footer-nav-mobile-bot-link">Terms</a>
                <a href="">For business owners</a>
              </div>
            </div>
            <div class="footer-mid-mobile-stores">
              <a href=""><img src="@/assets/img/astore.png" alt=""></a>
              <a href=""><img src="@/assets/img/gplay.png" alt=""></a>
            </div>
          </div>
          <div class="footer-mobile-bot">
            <p class="footer-mob-bot-text-top">By continuing to use our site, you agree to the terms of service and privacy policy. </p>
            <p class="footer-mob-bot-text-bot">© Visit everywhere, 2022</p>
          </div>
      </div>
  </footer>
</div>
</template>

<style lang="scss" scoped>
<<<<<<< HEAD
.container{
    max-width: 1180px;
    margin: 0 auto;
}
=======
>>>>>>> e6a46cc025d1e308bba985cbc4f3e96bcd5be617
.footer {
  padding-top: 20px;
  margin-top: 130px;
  width: 100%;
  background-color: #131620;
  &-top {
    display: flex;
    justify-content: space-between;
  }
<<<<<<< HEAD
  &-top-left,
  &-top-right {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  &-top-left-logo {
    width: 80px;
    height: 80px;
  }
  &-top-left-link {
    margin-left: 64px;
    width: 36px;
    height: 36px;
  }
  &-top-left-link:first-of-type {
    margin-left: 40px;
  }
  &-top-right {
    max-width: 650px;
    flex-wrap: wrap;
  }
  &-top-right-link {
    text-align: center;
    color: #fff;
    font-weight: 400;
    font-size: 22px;
    text-decoration: none;
    margin-right: 32px;
    transition: 0.2s color ease;
  }
  &-top-right-link:last-of-type {
    margin-right: 0;
  }
  &-top-right-link:hover {
    color: #eab52e;
  }
  &-mid {
    margin-top: 40px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-mid-email::before {
    margin-right: 30px;
    content: "";
    display: inline-block;
    vertical-align: middle;
    background-color: transparent;
    background-image: url("../assets/footer/email.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 29px 23px;
    width: 29px;
    height: 23px;
  }
  &-mid-email {
    transition: 0.2s linear;
    text-decoration: none;
    color: #fff;
    opacity: 0.8;
    font-weight: 400;
    font-size: 24px;
  }
  &-mid-email:hover {
    opacity: 1;
  }
  &-mid-buttons {
    display: flex;
    justify-content: start;
  }
  &-mid-buttons-add_place {
    width: 180px;
    height: 53px;
    background-color: #38405f;
    border-radius: 8px;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    border: none;
    outline: none;
  }
  &-mid-buttons-btn {
    display: flex;
    width: 180px;
    height: 53px;
    margin-left: 20px;
  }
  &-bot-text {
    margin-top: 50px;
    text-align: center;
    line-height: 2em;
  }
}
.footer-mobile {
  display: none;
  background: #131620;
=======
}
.footer-top-left,
.footer-top-right {
  display: flex;
  justify-content: start;
  align-items: center;
}
.footer-top-left-logo {
  width: 80px;
  height: 80px;
}
.footer-top-left-link {
  margin-left: 64px;
  width: 36px;
  height: 36px;
}
.footer-top-left-link:first-of-type {
  margin-left: 40px;
>>>>>>> e6a46cc025d1e308bba985cbc4f3e96bcd5be617
}

.container-mobile {
  max-width: 331px;
  margin: 0 auto;
}

.footer-top-top {
  display: flex;
  align-items: center;
}

.footer-top-mobile {
  padding-top: 24px;
  display: flex;
  flex-direction: column;
}

.footer-mobile-logo {
  width: 48px;
  height: 48px;
}

.telegram {
  margin-left: 24px;
}

.instagram {
  margin-left: 36px;
}

.footer-top-bot {
  display: flex;
  align-items: center;
  margin-top: 24px;
}

.footer-top-bot img {
  margin-right: 16px;
}

.footer-top-bot a {
  text-decoration: none;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
}

.footer-mid-mobile {
  margin-top: 30px;
}

.footer-mid-mobile a {
  text-decoration: none;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
}

.footer-nav-mobile-bot {
  margin-top: 16px;
}

.footer-nav-mobile-top-link {
  margin-right: 102px;
}

.footer-nav-mobile-bot-link {
  margin-right: 125px;
}

.footer-mid-mobile-stores img {
  width: 150px;
  height: 44px;
}

.footer-mid-mobile-stores {
  margin-top: 31px;
  display: flex;
  justify-content: space-between;
}

.footer-mob-bot-text-top {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
  width: 235px;
  margin: 0 auto;
}

.footer-mob-bot-text-bot {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF;
  margin: 0 auto;
  margin-top: 19px;
  width: 208px;
}

.footer-mobile-bot {
  margin-top: 48px;
  padding-bottom: 35px;
}

@media screen and (max-width: 375px) {
    .footer {
    display: none;
  }
  .footer-mobile {
    display: block;
  }
}
</style>