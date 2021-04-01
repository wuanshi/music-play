import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Search from '../components/Search.vue'
import Vedios from '../components/Vedios.vue'
import Friend from '../components/Friend.vue'
import Live from '../components/Live.vue'
import Private from '../components/Private.vue'
import Local from '../components/Local.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/search',
        name:'Search',
        component:Search,
        // children:[
        //   {

        //   }
        // ]
      },
      {
        path:'/vedios',
        name:'Vedios',
        component:Vedios
      },
      {
        path:'/friend',
        name:'Friend',
        component:Friend
      },
      {
        path:'/live',
        name:'Live',
        component:Live
      },
      {
        path:'/private',
        name:'Private',
        component:Private
      },
      {
        path:'/local',
        name:'Local',
        component:Local
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
