import Vue from 'vue';
import App from './App';
import router from './router';
// import apiConfig from '../config/api.config';
import axios from 'axios';
// import Qs from 'qs';
import MuseUI from 'muse-ui';
import md5 from 'js-md5';

import 'muse-ui/dist/muse-ui.css';
import './assets/css/index.css';
import './assets/iconfont/iconfont.js';

// 引入公共组件
import FooterNav from '@/components/common/footer';
import BacktoTop from '@/components/common/backToTop';

Vue.use(MuseUI);
// 注册全局公共组件
Vue.component("footernav", FooterNav);
Vue.component("backtotop", BacktoTop);

Vue.prototype.$md5 = md5;
Vue.prototype.$http = axios;
// axios.defaults.baseURL = apiConfig.baseUrl;
axios.defaults.baseURL = 'http://open.ecp100.com/router';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截器
// axios.interceptors.request.use((config) => {
//   if (config) {
//     // 参数序列化
//   }
//   return config
// }), (error) => {
//   return error;
// };

// 参数序列化
// var axios_instance = axios.create({
//   transformRequest: [function (data) {
//     data = Qs.stringify(data);
//     return data;
//   }],
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });
// Vue.use(axios, axios_instance);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
