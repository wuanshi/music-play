import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const Search = () => import('../views/Search.vue')
const Vedios = () => import('../views/Vedios.vue')
const Friend = () => import('../views/Friend.vue')
const Live = () => import('../views/Live.vue')
const Private = () => import('../views/Private.vue')
const Local = () => import('../views/Local.vue')
const Recommend = () => import('../views/Searchviews/Recommend.vue')
const Song = () => import('../views/Searchviews/Song.vue')
const Radio = () => import('../views/Searchviews/Radio.vue')
const Rank = () => import('../views/Searchviews/Rank.vue')
// () => import(/* webpackChunkName: "about" */ '../views/About.vue')
Vue.use(VueRouter)


// 重复点击报错问题
const includPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  // console.log(location);
  return includPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: 'search'
  },
  {
    path: '/search',
    component: Search,
    children: [
      {
        path:'',
        redirect:'/search/recommend'
      },
      {
        path: 'recommend',
        name: 'Recommend',
        component: Recommend
      },
      {
        path: 'song',
        name: 'Song',
        component: Song
      },
      {
        path: 'radio',
        name: 'Radio',
        component: Radio
      },
      {
        path: 'rank',
        name: 'Rank',
        component: Rank
      }
    ]
  },
  {
    path: '/vedios',
    name: 'Vedios',
    component: Vedios
  },
  {
    path: '/friend',
    name: 'Friend',
    component: Friend
  },
  {
    path: '/live',
    name: 'Live',
    component: Live
  },
  {
    path: '/private',
    name: 'Private',
    component: Private
  },
  {
    path: '/local',
    name: 'Local',
    component: Local
  }
]




const router = new VueRouter({
  routes
})

export default router
