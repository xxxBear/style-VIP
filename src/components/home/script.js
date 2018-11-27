import axios from 'axios';
export default {
  data() {
    return {
      storeList: [],
      params: {
        pageno: 1,
        pagesize: 2
      }
    };
  },
  created() {
    this.getStoreList();
  },
  methods: {
    // 请求参数加密
    getParams(params, _functionname, _async) {
      var sign = '';
      // 参数对象拼接字符串
      var str = '';
      for (k in params) {
        var v = k + params[k];
        str += v;
      }

      var _functionname = _functionname;
      var _async = _async || false;
      var _appkey = '559ab76da1fe45052055da60';
      var _sessionkey = '559ab76da1fe45052055da62';
      // 获取当前时间戳，精确到毫秒
      var _timestamp = new Date().getTime();
      // var _timestamp = new Date().valueOf();
      var _version = '1.0';
      var secretkey = '559ab76da1fe45052055da61';

      sign = (md5(secretkey +
        '_appkey' + _appkey +
        '_async' + _async +
        '_functionname' + _functionname +
        '_sessionkey' + _sessionkey +
        '_version' + _version +
        '_timestamp' + _timestamp +
        // 请求参数拼串
        str +
        secretkey)).toLocaleLowerCase();
      return newParams = {
        params,
        "_appkey": '559ab76da1fe45052055da60',
        "_sessionkey": '559ab76da1fe45052055da62',
        "_functionname": _functionname,
        "_version": '1.0',
        "_async": _async,
        "_timestamp": _timestamp,
        "sign": sign
      }
    },
    async getStoreList() {
      const url = 'http://open.ecp100.com/router/ecp.crm.store.getlist';
      const res = await this.$http.post(url, this.getParams(params, getlist, true));
      const data = res.data;
      console.log(data);
      // this.$http.post('ecp.crm.store.getlist', getParams(params, getlist, false))
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   })

      // const ret = this.$http.post('ecp.crm.store.getlist', getParams({
      //   pageno: 1,
      //   pagesize: 2
      // }, getlist, false));

      // console.log(ret);
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
