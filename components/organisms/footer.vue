<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-top-left">
          <img src="assets/LOGO.png" alt="" class="footer-top-left-logo" />
          <a href="" class="footer-top-left-link"
            ><img
              src="assets/footer/tg.png"
              alt="Telegram"
              class="footer-top-left-link-tg"
          /></a>
          <a href="" class="footer-top-left-link"
            ><img
              src="assets/footer/inst.png"
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
            src="assets/footer/gplay.png"
            alt=""
            class="footer-mid-buttons-btn"
            onclick="window.location.href ='https://play.google.com/'"
          />
          <img
            src="assets/footer/astore.png"
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
</template>

<style>
.footer {
  padding-top: 20px;
  margin-top: 130px;
  width: 100%;
  background-color: #131620;
}
.footer-top {
  display: flex;
  justify-content: space-between;
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
}

.footer-top-right {
  max-width: 650px;
  flex-wrap: wrap;
}
.footer-top-right-link {
  text-align: center;
  color: #fff;
  font-weight: 400;
  font-size: 22px;
  text-decoration: none;
  margin-right: 32px;
  transition: 0.2s color ease;
}
.footer-top-right-link:last-of-type {
  margin-right: 0;
}
.footer-top-right-link:hover {
  color: #eab52e;
}
.footer-mid {
  margin-top: 40px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-mid-email::before {
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
.footer-mid-email {
  transition: 0.2s linear;
  text-decoration: none;
  color: #fff;
  opacity: 0.8;
  font-weight: 400;
  font-size: 24px;
}
.footer-mid-email:hover {
  opacity: 1;
}
.footer-mid-buttons {
  display: flex;
  justify-content: start;
}
.footer-mid-buttons-add_place {
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
.footer-mid-buttons-btn {
  display: flex;
  width: 180px;
  height: 53px;
  margin-left: 20px;
}
.footer-bot-text {
  margin-top: 50px;
  text-align: center;
  line-height: 2em;
}
</style>