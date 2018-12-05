<template>
  <div class="footerNav">
    <div class="salon">
      <router-link to="/">
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-licaijingxuan"></use>
        </svg>
        <p>理财精选</p>
      </router-link>
    </div>
    <div class="gallery">
      <router-link to="/gallery">
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-tupian"></use>
        </svg>
        <p>潮流作品</p>
      </router-link>
    </div>
    <div class="activity">
      <router-link to="/activity">
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-shoucang"></use>
        </svg>
        <p>活动专区</p>
      </router-link>
    </div>
    <div class="mall">
      <router-link to="/mall">
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-icon-test"></use>
        </svg>
        <p>VIP商城</p>
      </router-link>
    </div>
    <div class="procenter">
      <router-link to="/procenter">
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-wode-F"></use>
        </svg>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footernav",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
.footerNav {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  padding: 10px 10px 0;
  background-color: #fff;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0rem -0.25rem 0.31rem 0rem rgba(213, 213, 213, 1);
  z-index: 999;
}

.footerNav div {
  padding-bottom: 0;
  flex: 1;
}

.footerNav div:active {
  color: #ff4081;
}

.footerNav div .icon {
  color: #000;
  font-size: 1.46rem;
}

.footerNav div p {
  color: #000;
  padding: 0;
  margin: 5px 0;
  font-size: 0.63rem;
}
</style>