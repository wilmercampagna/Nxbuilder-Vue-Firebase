import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/auth/Login'
import SignIn from '@/components/auth/SignIn'
import Profile from '@/components/Profile'
import Help from '@/components/Help'
import Settings from '@/components/profile/Settings'

import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    { path: '*', redirect: '/login' },
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/sign-in', component: SignIn, name: 'signIn' },
    { path: '/home', component: Home, meta: { requiresAuth: true } },
    { path: '/help', component: Help, meta: { requiresAuth: true } },
    { path: '/settings', component: Settings, meta: { requiresAuth: true } },
    { path: '/:profile', component: Profile, name: 'profile', meta: { requiresAuth: true } }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next()
})

export default router
