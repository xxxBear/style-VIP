import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/index.css'
import './assets/iconfont/iconfont.js'
// 引入公共头部Header
import footerBottom from '@/components/common/footer'
// 引入公共底部导航footer
import backToTop from '@/components/common/backToTop'
// 注册全局公共组件
Vue.component("footer-nav", footerBottom)
Vue.component("backToTop", backToTop)
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
