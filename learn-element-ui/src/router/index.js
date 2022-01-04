import Vue from 'vue'
// import Vue from '../../../../vue2.x/dist/vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import(/* webpackChunkName: "button" */ '../views/Button.vue')
  },
  {
    path: '/tag',
    name: 'Tag',
    component: () => import(/* webpackChunkName: "tag" */ '../views/Tag.vue')
  },
  {
    path: '/link',
    name: 'Link',
    component: () => import(/* webpackChunkName: "link" */ '../views/Link.vue')
  },
  {
    path: '/row',
    name: 'Row',
    component: () => import(/* webpackChunkName: "row" */ '../views/Row.vue')
  },
  {
    path: '/container',
    name: 'Container',
    component: () => import(/* webpackChunkName: "container" */ '../views/Container.vue')
  },
  {
    path: '/avatar',
    name: 'Avatar',
    component: () => import(/* webpackChunkName: "avatar" */ '../views/Avatar.vue')
  },
  {
    path: '/badge',
    name: 'Badge',
    component: () => import(/* webpackChunkName: "badge" */ '../views/Badge.vue')
  },
  {
    path: '/alert',
    name: 'Alert',
    component: () => import(/* webpackChunkName: "alert" */ '../views/Alert.vue')
  },
  {
    path: '/divider',
    name: 'Divider',
    component: () => import(/* webpackChunkName: "divider" */ '../views/Divider.vue')
  },
  {
    path: '/breadcrumb',
    name: 'Breadcrumb',
    component: () => import(/* webpackChunkName: "breadcrumb" */ '../views/Breadcrumb.vue')
  },
  {
    path: '/backtop',
    name: 'backtop',
    component: () => import(/* webpackChunkName: "backtop" */ '../views/Backtop.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "form" */ '../views/Form.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: "demo" */ '../views/Demo.vue')
  },
  {
    path: '/DemoPage',
    name: 'DemoPage',
    component: () => import(/* webpackChunkName: "DemoPage" */ '../views/DemoPage.vue')
  },
  {
    path: '/Space',
    name: 'Space',
    component: () => import(/* webpackChunkName: "Space" */ '../views/Space.vue')
  },
  {
    path: '/Collapse',
    name: 'Collapse',
    component: () => import(/* webpackChunkName: "Collapse" */ '../views/Collapse.vue')
  },
  {
    path: '/Poper',
    name: 'Poper',
    component: () => import(/* webpackChunkName: "Poper" */ '../views/Poper.vue')
  },
  {
    path: '/Preview',
    name: 'Preview',
    component: () => import(/* webpackChunkName: "Preview" */ '../views/Preview.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
