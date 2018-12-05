<template>
  <div id="goTop">
    <div
      class="goTop"
      @click="goTop"
      v-show="goTopShow"
    >
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#icon-4fanhuidingbubai"></use>
      </svg>
    </div>
  </div>

</template>
<script>
export default {
  data() {

    
    return {
      scrollTop: "",
      goTopShow: false
    };
  },
  methods: {
    hanldeScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (this.scrollTop > 500) {
        this.goTopShow = true;
      } else {
        this.goTopShow = false;
      }
    },
    goTop() {
      let timer = null;
      let _that = this;
      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(function fn() {
        if (_that.scrollTop > 0) {
          _that.scrollTop -= 50;
          document.body.scrollTop = document.documentElement.scrollTop =
            _that.scrollTop;
          timer = requestAnimationFrame(fn);
          _that.goTopShow = false;
        } else {
          cancelAnimationFrame(timer);
          _that.goTopShow = false;
        }
      });
      // console.log("返回顶部");
    }
  },
  mounted() {
    window.addEventListener("scroll", this.hanldeScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.hanldeScroll);
  }
};
</script>
<style>
.goTop {
  width: 2.5rem;
  height: 2.5rem;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.45);
  bottom: 6rem;
  right: 1rem;
  line-height: 2.5rem;
  text-align: center;
  border-radius: 0.3rem;
}

.goTop .icon {
  display: inline-block;
  height: 2.5rem;
  color: #fff;
  font-size: 1.8rem;
  line-height: 2.5rem;
}
</style>
