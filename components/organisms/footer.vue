<template>
  <footer class="footer">
    <div class="footer__main">
      <div class="footer__main__left">
        <section class="footer__main__left__logos">
          <img src="@/assets/img/LOGO.svg" alt="VE" />
          <img src="@/assets/img/facebook.png" alt="facebook" />
          <img src="@/assets/img/inst.png" alt="instagram" />
          <div class="footer__main__left__logos__chat">
            <img src="@/assets/img/chat-icon.png" alt="VE" />
          </div>
        </section>
        <section class="footer__main__left__mail">
          <img src="@/assets/img/email.png" alt="email" />
          <h4>everywhere.comp@gmail.com</h4>
        </section>
      </div>
      <div class="footer__main__right">
        <section class="footer__main__right__links">
          <NuxtLink id="link-list" to="#">About us</NuxtLink>
          <NuxtLink id="link-list" to="#">For business owners</NuxtLink>
          <NuxtLink id="link-list" to="#">FAQ</NuxtLink>
          <NuxtLink id="link-list" to="#">Confidentiality</NuxtLink>
          <NuxtLink id="link-list" to="#">Terms</NuxtLink>
        </section>
        <section class="footer__main__right__buttons">
          <div class="footer__main__right__buttons__add-place"><h5>Add place</h5></div>
          <img src="@/assets/img/gplay.png" alt="google" />
          <img src="@/assets/img/astore.png" alt="appstore" />
        </section>
      </div>
    </div>
    <section class="footer__under">
      <h6>By continuing to use our site, you agree to the terms of service and privacy policy.</h6>
      <h5>© Visit everywhere, 2022</h5>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  max-width: 100%;
  background-color: #131620;
  color: #fff;
  gap: 48px;
  padding: 34px 20px 18px 20px;
  & h4 {
    font-weight: 400;
    font-size: 24px;
  }
  & h5 {
    font-weight: 400;
    font-size: 18px;
  }
  & h6 {
    font-weight: 600;
    font-size: 16px;
  }
  &__main {
    display: flex;
    max-width: 1223px;
    margin: 0 auto;
    gap: 110px;
    justify-content: center;
    &__left {
      &__logos {
        display: flex;
        order: 1;
        align-items: center;
        gap: 60px;
        margin-bottom: 42px;
        & img {
          object-fit: contain;
          max-height: 30px;
        }
        &__chat {
          padding: 14px 14px 13px 13px;
          border-radius: 16px;
          background-color: #38405f;
          max-height: 52px;
          display: flex;
        }
      }
      &__mail {
        order: 3;
        display: flex;
        gap: 33.6px;
        & img {
          object-fit: contain;
        }
      }
    }
    &__right {
      &__links {
        order: 2;
        display: flex;
        gap: 32px;
        margin-bottom: 41px;
        margin-top: 10px;
        white-space: nowrap;
      }
      &__buttons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        &__add-place {
          display: flex;
          justify-content: center;
          background: #38405f;
          border-radius: 8px;
          width: 180px;
          padding-top: 16px;
          padding-bottom: 16px;
          & h5 {
            font-weight: 600;
          }
        }
      }
    }
  }
  &__under {
    display: flex;
    gap: 8px;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
  }
}
#link-list {
  font-weight: 400;
  font-size: 24px;
  text-decoration: none;
  color: white;
}
@media screen and(max-width: 1080px) {
  .footer {
    & h4 {
      font-weight: 400;
      font-size: 20px;
    }
    & h6 {
      font-weight: 400;
      font-size: 16px;
    }
    &__main {
      gap: 30px;
      &__left {
        &__logos {
          gap: 23px;
        }
        &__mail {
          gap: 10px;
        }
      }
      &__right {
        &__links {
          gap: 10px;
        }
        &__buttons {
          gap: 16px;
          &__add-place {
            grid-column: 1 / -1;
            width: 70%;
          }
          & img {
            width: 100%;
          }
        }
      }
    }
  }
  #link-list {
    font-weight: 400;
    font-size: 20px;
    text-decoration: none;
    color: white;
  }
}
@media screen and(max-width: 768px) {
  .footer {
    &__main {
      flex-direction: column;
    }
  }
}
@media screen and(max-width: 425px) {
  .footer {
    & h4 {
      font-size: 16px;
    }
    &__main {
      &__left {
        &__logos {
          justify-content: space-between;
        }
        &__mail {
          gap: 17px;
        }
      }
      &__right {
        &__links {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        &__buttons {
          grid-template-columns: repeat(2, 1fr);
          &__add-place {
            width: 100%;
          }
          img {
            width: 90%;
          }
        }
      }
    }
  }
}
</style>
