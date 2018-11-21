import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import ShopDetails from '@/components/shopdetails'
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
    path: '/shopdetails',
    name: 'shopdetails',
    component: ShopDetails
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
export default router
