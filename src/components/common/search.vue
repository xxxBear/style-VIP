<template>
  <div
    class="search-wra"
    :open.sync="openSearch"
  >

  </div>
</template>
<script>
export default {
  data() {
    return {
      openSearch: false
    };
  },
  methods: {
    searchDialog() {
      this.openSearch = true;
    }
  }
};
</script>
<style scoped>
</style>
