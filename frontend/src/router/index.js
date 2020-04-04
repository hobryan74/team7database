import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Locations from '../views/Locations.vue'
import loginhome from '../views/login_home.vue'
import signup from '../views/signup.vue'
import settings from '../views/account_settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/location/:username',
    name: 'location',
    component: Locations
  },
  {
    path: '/home/:username',
    name: 'loginhome',
    component: loginhome
  },
  {
    path: '/settings/:username',
    name: 'settings',
    component: settings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
