<template>
  <div class="search">
    <input
      type="text"
      name="search"
      class="search-input"
      placeholder="Search the best places for you"
    />
    <label for="search">123</label>
    <button class="search-filters" onclick=""></button>
    <button type="submit" class="search-submit"></button>
  </div>
</template>


<style scoped>
.search {
  margin: 30px auto 0 auto;
  max-width: 780px;
  width: 100%;
  background-color: #d9d9d9;
  height: 64px;
  display: flex;
  justify-content: space-between;
  border-radius: 70px;
}
.search-input {
  background-color: transparent;
  background-image: url("../assets/searchicon.png");
  background-position: 24px center;
  background-repeat: no-repeat;
  background-size: 23px 23px;
  font-size: 20px;
  color: #6d6d6d;
  font-weight: 400;
  padding: 14px 0 14px 64px;
  border: none;
  outline: none;
  max-width: 600px;
  width: 100%;
}
.search-filters {
  margin: auto 24px auto 0;
  background-color: transparent;
  background-image: url("../assets/filter.png");
  background-position: center;
  background-size: 24px 21px;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  border: none;
  outline: none;
  cursor: pointer;
  justify-self: right;
}

.search-submit {
  margin: auto 3px auto 5px;
  align-items: center;
  background-color: #38405f;
  border-radius: 50%;
  background-position: center;
  background-image: url("../assets/searchicon-fff.png");
  background-repeat: no-repeat;
  background-size: 23px 23px;
  width: 60px;
  height: 60px;
  border: none;
  outline: none;
  cursor: pointer;
  justify-self: right;
  flex-shrink: 0;
}
</style>