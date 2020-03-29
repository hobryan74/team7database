import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Locations from '../views/Locations.vue'
import Emlpoyeepage from '../views/Employeepage.vue'
import signup from '../views/signup.vue'

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
    path: '/location',
    name: 'location',
    component: Locations
  },
  {
    path: '/employee/:first/:last',
    name: 'employee',
    component: Emlpoyeepage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
