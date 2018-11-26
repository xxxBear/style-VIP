export default {
  data() {
    return {
      storeList: []
    };
  },
  created() {
    this.fetchStoreList();
  },
  methods: {
    getStoreList() {
      this.$http.post('/ecp.crm.store.getlist', {
          params: {
            pagesize: 2,
            pageno: 1
          }
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        })
    },
    sortDefault() {
      // console.log("默认排序");
    },
    sortDistance() {
      // console.log("距离排序");
    },
    sortPrice() {
      // console.log("价格排序");
    },
    sortFilter() {
      // console.log("条件筛选");
    }
  }
};
