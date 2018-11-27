import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import MuseUI from 'muse-ui';
import md5 from 'js-md5';

import 'muse-ui/dist/muse-ui.css';
// 全局样式导入
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
axios.defaults.baseURL = 'http://open.ecp100.com/router';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截器
// axios.interceptors.request.use((config) => {
//   if (config.methods === 'post') {
//     // 参数序列化
//     // config.data = qs.stringify(config.data);
//   }
//   return config
// }), (error) => {
//   return error;
// };

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
