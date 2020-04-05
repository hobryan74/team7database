import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Locations from '../views/Locations.vue'
import loginhome from '../views/login_home.vue'
import signup from '../views/signup.vue'
import settings from '../views/account_settings.vue'
import appointmentdate from '../views/appointmentdate.vue'
import appointmentlocation from '../views/appointmentlocation.vue'
import appointmentdoctor from '../views/appointmentdoctor.vue'

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
  },
  {
    path: '/appointmentdate/:username',
    name: 'appointmentdate',
    component: appointmentdate
  },
  {
    path: '/appointmentlocation/:username',
    name: 'appointmentlocation',
    component: appointmentlocation
  },
  {
    path: '/appointmentselectdoctor/:username',
    name: 'appointmentselectdoctor',
    component: appointmentdoctor
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
