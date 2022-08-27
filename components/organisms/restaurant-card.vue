<template>
    <section class="card">
        <img src="@/assets/img/view.png" alt="" class="card-img">
        <h2>Bakery</h2>
        <div class="type-section">
            <img src="@/assets/img/dish.png" alt="" class="dish">
            <h3>American, Vegetarian...</h3>
        </div>
        <div class="street">
            <img src="@/assets/img/gps.png" alt="" class="gps">
            <h3>St. Kreshchatyk, 190</h3>
        </div>
        <div class="bottom">
            <div class="dollar">
                <img src="@/assets/img/dollar.png" alt="">
                <img src="@/assets/img/dollar.png" alt="" class="middle">
                <img src="@/assets/img/dollar.png" alt="">
            </div>
            <div class="dot">

            </div>
            <div class="rate">
                <p>5.0</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.card {
  border: 2px solid #494A4D;
  height: 372px;
  width: 280px;
  border-radius: 16px;
}
.card h2 {
  font-family: 'Nunito';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 28px;
color: white;
margin-left: 24px;
margin-top: 16px;
}
.card h3 {
  font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: white;
margin-left: 8px;
}
.dish {
  margin-left: 24px;
}

.type-section {
  margin-top: 25px;
  display: flex;
  align-items: center;
}

.gps {
  margin-left: 24px;
}

.street {
  margin-top: 17px;
  display: flex;
  align-items: center;
}

.bottom {
  margin-top: 24px;
  margin-left: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 232px;
}

.dollar {
  width: 72px;
  height: 39px;
  background: #38405F;
  border-radius: 69px;
  display: flex;
  align-items: center;
  justify-content: center;

}

.rate {
  width: 72px;
  height: 39px;
  background: #EAB52E;
  border-radius: 69px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot {
  width: 4px;
  height: 4px;
  background: #D9D9D9;
  border-radius:100px;
}

.rate p {
  font-family: 'Nunito';
font-style: normal;
font-weight: 500;
font-size: 27px;
line-height: 37px;

color: #000000;
}

@media screen and (max-width: 375px) {
.card {
    height: 232px;
    width: 148px;
  }  
.card-img {
    height: 101px;
    width: 148px;
    border-radius: 16px 16px 0px 0px;
  }  
.card h2 {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: -0.002em;
    color: #FFFFFF;
    margin-top: 8px;
    margin-left: 8px;
  }
  .dish {
    height: 16px;
    width: 16px;
    margin-left: 8px;
  }  
.card h3 {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 14px;
    color: #FFFFFF;
  }
  .type-section {
    margin-top: 8px;
  }
  .gps {
    height: 16px;
    width: 16px;
    margin-left: 8px;
  }
  .street {
    margin-top: 8px;
  }
  .dollar {
    height: 26px;
    width: 38px;
  }
  .dollar img {
    height: 10px;
    width: 6px;
  }
  .bottom {
    margin-left: 8px;
    margin-top: 8px;
    width: 132px;
  }
  .rate {
    height: 26px;
    width: 38px;
  }
  .rate p {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }  
}
</style>