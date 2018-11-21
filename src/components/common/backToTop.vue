<template>
  <div class="goTop">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-4fanhuidingbubai"></use>
    </svg>
  </div>
</template>
<script>
export default {
  data() {},
  methods: {}
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
