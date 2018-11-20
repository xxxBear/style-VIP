<template>
    <div class="footerNav">
        <div class="salon">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-licaijingxuan"></use>
            </svg>
            <p>精选沙龙</p>
        </div>
        <div class="works">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tupian"></use>
            </svg>
            <p>潮流作品</p>
        </div>
        <div class="activity">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shoucang"></use>
            </svg>
            <p>活动专区</p>
        </div>
        <div class="mall">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon-test"></use>
            </svg>
            <p>VIP商城</p>
        </div>
        <div class="mine">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wode-F"></use>
            </svg>
            <p>我的</p>
        </div>
    </div>
</template>
<script>
export default {
  data() {},
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

.footerNav div .icon {
  font-size: 1.46rem;
}

.footerNav div p {
  padding: 0;
  margin: 5px 0;
  font-size: 0.63rem;
}
</style>