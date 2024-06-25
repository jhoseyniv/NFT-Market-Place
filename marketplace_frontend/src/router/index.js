import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Market from '@/views/Market.vue'
import MarketItem from '@/views/MarketItem.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import GenNFT from '@/views/GenNFT.vue'
import Profile from '@/views/Profile.vue'
import Contact from '@/views/Contact.vue'
import PasswordReset from '@/views/PasswordReset.vue'
import Chat from '@/views/Chat.vue'

import store from '@/store/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/market',
    name: 'Market',
    component: Market,
  },
  {
    path: '/market/:itemId',
    name: 'MarketItem',
    component: MarketItem,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/passwordReset',
    name: 'PasswordReset',
    component: PasswordReset
  },
  {
    path: '/generatenft',
    name: 'GenerateNFT',
    component: GenNFT,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta: { requiresAuth: true }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { requiresAuth: true }
  },
  {
      path: '*',
      redirect: '/',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// navigation guard
router.beforeEach(( to, from, next ) => {
  if( to.matched.some( record => record.meta.requiresAuth ) ) {
    if ( store.getters.isAuthenticated ) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
