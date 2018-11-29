import md5 from 'js-md5';
import axios from 'axios';
export default {
  data() {
    return {
      storeList: [],
      params: {
        pageno: 1,
        pagesize: 2
      },
      functionname: 'ecp.crm.store.getlist'
    };
  },
  created() {
    this.getStoreList();
  },
  methods: {
    // 请求参数加密
    getParams(params, fn, async) {
      var _secretkey = '559ab76da1fe45052055da61';

      var fixParams = {
        _sessionkey: '559ab76da1fe45052055da62',
        _appkey: '559ab76da1fe45052055da60',
        _functionname: fn,
        _version: '1.0',
        _async: async,
        _timestamp: Date.parse(new Date())
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

      var str;
      var _sign;
      var sign = (md5(_secretkey + (JSON.stringify(beforeSign).replace(/\"/g, '').replace(/\{/g, '').replace(/\}/g, '').replace(/\:/g, '')
        .replace(/\,/g, '')) + _secretkey)).toLocaleLowerCase();
      var finalParams = Object.assign({}, beforeSign, {
        _sign: sign
      });
      return finalParams;
    },
    getStoreList() {
      axios.post('/', this.getParams(this.params, this.functionname, false))
        .then((res) => {
          console.log(res);
          this.storelist = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
      // const newParams = await this.getParams(this.params, this._functionname, false);
      // const ret = axios.post('/', newParams);
      // const ret = await axios.post('/', this.getParams(this.params, this.$refs._functionname, true));

      // const ret = axios.post('/', this.getParams(this.params, this.functionname)).then((response) => {
      //   console.log(response)
      // })

      // console.log(ret);
      // .then((res) =>
      //   // const ret = res.data;
      //   console.log(res);
      //   console.log(ret);
      // })


      // this.$http.post('/', this.getParams(this.params, this._functionname, false))
      //   .then((res) => {
      //     console.log(res);
      //   });
    },
    async sortDefault() {},
    async sortDistance() {},
    async sortPrice() {},
    async sortFilter() {}
  }
};
