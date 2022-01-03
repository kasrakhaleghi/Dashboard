import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import InboxView from '../views/InboxView.vue'
import SettingView from '../views/SettingView.vue'
import PrivacyView from '../views/PrivacyView.vue'


Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
   {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children:[{
      path:'inbox',
      name:'InboxView',
      component:InboxView
},{
      path:'setting',
      name:'SettingView',
      component:SettingView
},{
      path:'privacy',
      name:'PrivacyView',
      component:PrivacyView
}]
  },

]

const router = new VueRouter({
  routes
})

export default router
