import md5 from 'js-md5';
import axios from 'axios';
export default {
  data() {
    return {
      openSearch: false,
      storeList: [],
      // searchWrapper,
      params: {
        pageno: 1,
        pagesize: 2
      },
      functionname: 'ecp.crm.store.getlist'
    }
  },
  created() {
    this.getStoreList();
  },
  methods: {
    // 请求参数加密
    getParams(params, fn, async) {
      var _secretkey = '5c010ad7a1fe45d7c015d30c';

      var fixParams = {
        _appkey: '5c010ad7a1fe45d7c015d30a',
        _sessionkey: '5c010ad7a1fe45d7c015d30e',
        _functionname: fn,
        _version: '1.0',
        _async: async,
        _timestamp: Date.parse(new Date()) / 1000
      };
      var newParams = Object.assign({}, fixParams, params);

      function sort_ASCII(obj) {
        var arr = new Array();
        var num = 0;
        for (var i in obj) {
          arr[num] = i;
          num++;
        }
        var sortArr = arr.sort();
        var sortObj = {};
        for (var i in sortArr) {
          sortObj[sortArr[i]] = obj[sortArr[i]];
        }
        return sortObj;
      };

      var beforeSign = sort_ASCII(newParams);

      var sign = (md5(_secretkey + (JSON.stringify(beforeSign).replace(/\"/g, '').replace(/\{/g, '').replace(/\}/g, '').replace(/\:/g, '').replace(/\,/g, '')) + _secretkey)).toLocaleLowerCase();
      var finalParams = Object.assign({}, beforeSign, {
        _sign: sign
      });
      return finalParams;
    },
    getStoreList() {
      axios.post('/', this.getParams(this.params, this.functionname, false))
        .then((res) => {
          // console.log(res);
          this.storeList = JSON.parse(res.data.msg);
          // console.log(this.storeList);
        })
    },
    // 获取位置信息
    getLocation() {
      console.log('获取位置信息');
    },
    // 搜索功能模块
    openSearchDialog() {
      this.openSearch = true;
      this.$refs.searchWrapper.style.display = 'block';
      // 这里需要调出系统键盘（未完成）
      console.log('搜索功能触发');
    },
    closeSearchDialog() {
      this.openSearch = false;
      this.$refs.searchWrapper.style.display = 'none';
      console.log('关闭搜索窗口');
    },
    // 排序筛选
    async sortDefault() {},
    async sortDistance() {},
    async sortPrice() {},
    async sortFilter() {}
  }
};
