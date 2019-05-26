import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { isDebug } from '@/config'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: isDebug ? '/' : 'qingyu',
  routes: routes
})

export default router
