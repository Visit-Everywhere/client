<template>
  <div class="chooser">
    <div class="chooser-container" id="chooser-container">
      <input type="radio" name="place" id="restaurants" class="chooser-btn" value="1" checked />
      <label for="restaurants" class="chooser-btn-label">Restaurants</label>

      <input type="radio" name="place" id="gas-stations" class="chooser-btn" value="2" />
      <label for="gas-stations" class="chooser-btn-label">Gas Stations</label>

      <input type="radio" name="place" id="hospitals" class="chooser-btn" value="3" />
      <label for="hospitals" class="chooser-btn-label">Hospitals</label>

      <input type="radio" name="place" id="hairdressers" class="chooser-btn" value="4" />
      <label for="hairdressers" class="chooser-btn-label">Hairdresser`s</label>

      <!--               <div class="chooser-open_container" id="a">-->
      <input type="radio" name="place" id="restaurants1" class="chooser-btn" value="1" />
      <label for="restaurants1" class="chooser-btn-label">Restaurants1</label>

      <input type="radio" name="place" id="gas-stations1" class="chooser-btn" value="2" />
      <label for="gas-stations1" class="chooser-btn-label">Gas Stations1</label>

      <input type="radio" name="place" id="hospitals1" class="chooser-btn" value="3" />
      <label for="hospitals1" class="chooser-btn-label">Hospitals1</label>

      <input type="radio" name="place" id="hairdressers1" class="chooser-btn" value="4" />
      <label for="hairdressers1" class="chooser-btn-label">Hairdresser`s1</label>

      <input type="radio" name="place" id="restaurants2" class="chooser-btn" value="1" />
      <label for="restaurants2" class="chooser-btn-label">Restaurants2</label>

      <input type="radio" name="place" id="gas-stations2" class="chooser-btn" value="2" />
      <label for="gas-stations2" class="chooser-btn-label">Gas Stations2</label>

      <input type="radio" name="place" id="hospitals2" class="chooser-btn" value="3" />
      <label for="hospitals2" class="chooser-btn-label">Hospitals2</label>

      <input type="radio" name="place" id="hairdressers2" class="chooser-btn" value="4" />
      <label for="hairdressers2" class="chooser-btn-label">Hairdresser`s2</label>
      <!--               </div>-->
    </div>
    <button class="chooser-open_btn" opened="1" onclick="chooserOpen(this)">
      <span class="chooser-open_btn-text" id="chooser-open_btn-text">Show all</span>
      <img src="assets/arrow.png" alt="" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.chooser {
  margin: 32px auto 0 auto;
  max-width: 810px;
  &-open_container {
    max-height: 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px 10px;
    transition: 0.5s ease-in-out;
  }
  &-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px 10px;
  }
  &-open_btn img {
    margin: auto 0 auto 7px;
    width: 10px;
    height: 7px;
    transition: transform 0.2s linear;
  }
  &-open_btn {
    top: -50px;
    position: relative;
    z-index: 100;
    vertical-align: middle;
    display: flex;
    margin-top: 15px;
    float: right;
    width: 100px;
    text-align: center;
    background-color: #38405f;
    border: 1px solid transparent;
    outline: none;
    border-radius: 69px;
    font-size: 15px;
    color: #fff;
    padding: 5px 10px 5px 10px;
    transition: 0.2s ease;
  }
  &-open_btn:hover {
    border: 1px solid #fff;
  }
  &-btn {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  &-btn-label {
    margin-top: 10px;
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    width: 180px;
    border: 1px solid #fff;
    text-align: center;
    border-radius: 32px;
    padding: 16px 0px;
    transition: 0.3s ease;
    z-index: 1;
  }
  &-btn:checked + .chooser-btn-label {
    color: #000;
    background-color: #fff;
  }
  &-open_container > .chooser-btn-label {
    opacity: 0;
  }
  &-btn-label:nth-child(n + 9) {
    opacity: 0;
    padding: 0;
    font-size: 1px;
    z-index: -1;
  }
}
</style>
