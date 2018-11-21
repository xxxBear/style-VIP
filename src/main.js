import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MuseUI from 'muse-ui'

import 'muse-ui/dist/muse-ui.css'
// 全局样式导入
import './assets/css/index.css'
import './assets/iconfont/iconfont.js'

// 引入公共头部Header
import footerBottom from '@/components/common/footer'
// 引入公共底部导航Footer
import backToTop from '@/components/common/backToTop'

Vue.use(MuseUI)
// 注册全局公共组件
Vue.component("footer-nav", footerBottom)
Vue.component("backToTop", backToTop)
// 更改原型
Vue.prototype.$http = axios
// 设置接口baseURL
axios.defaults.baseURL = ''
// token处理
axios.interceptors.request.use((config) => {
  if (config) {

  }
  return config
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
