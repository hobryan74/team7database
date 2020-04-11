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
import history from '../views/history.vue'
import summary from '../views/summary.vue'
import prescription from '../views/prescription.vue'
import referral from '../views/referral.vue'
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
  },
  {
    path: '/history/:username',
    name: 'history',
    component: history
  },
  {
    path: '/summary/:username',
    name: 'summary',
    component: summary
  },
  {
    path: '/prescription/:username',
    name: 'prescription',
    component: prescription
  },
  {
    path: '/referral/:username',
    name: 'referral',
    component: referral
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
