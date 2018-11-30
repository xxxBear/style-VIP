import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Store from '@/components/Store'
import Gallery from '@/components/gallery'
import Activity from '@/components/activity'
import Mall from '@/components/mall'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Home,
  }, {
    path: '/store',
    name: 'store',
    component: Store
  }, {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  }, {
    path: '/activity',
    name: 'activity',
    component: Activity
  }, {
    path: '/mall',
    name: 'mall',
    component: Mall
  }]
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/home') {
//     return next();
//   }
//   const token = localStorage.getItem('token');
//   if (token) {
//     next();
//   } else {
//     next();
//   }
// })
export default router
