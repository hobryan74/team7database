import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Locations from '../views/Locations.vue'
import loginhome from '../views/login_home.vue'
import signup from '../views/signup.vue'
import settings from '../views/account_settings.vue'
import appointmentdate from '../views/appointmentdate.vue'
import appointmentlocation from '../views/appointmentlocation.vue'
import appointmentselectdoctor from '../views/appointmentselectdoctor.vue'
import appointmentcomplete from '../views/appointmentcomplete.vue'
import schedule from '../views/schedule.vue'

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
    component: appointmentselectdoctor
  },
  {
    path: '/appointmentcomplete/:username',
    name: 'appointmentcomplete',
    component: appointmentcomplete
  },
  {
    path: '/schedule/:username',
    name: 'schedule',
    component: schedule
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
