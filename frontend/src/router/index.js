import Vue from 'vue'
import Router from 'vue-router'
import UserRoute from '@/router/UserRoute'
import Accueil from '@/page/Accueil'

Vue.use(Router)

// Route 1er niveau
const routeDefault = [
  {
    path: '/',
    name: 'HelloWorld',
    component: Accueil
  }
]

const routes = routeDefault.concat(UserRoute)

export default new Router({
  mode: 'history',
  routes
})
