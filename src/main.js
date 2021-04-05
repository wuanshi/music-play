import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import store from './store/index'
import './plugins/element.js'
// 引入全局样式
import './assets/css/global.css'


// 配置请求根路径
axios.defaults.baseURL = '/api'
// axios.defaults.baseURL = 'http://localhost:3000/'
// Vue.prototype.HOST = '/api'
//允许跨域携带cookie信息
axios.defaults.withCredentials = true

axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Content-Type'] = 'text/plain;charset=UTF-8';

// 通过axios请求拦截器添加token 保证拥有获取数据的权限
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.localStorage.getItem('token')
  // console.log(config)
  if (config.method === 'post') {
    config.data = {
      ...config.data,
      _t: Date.parse(new Date()) / 1000
    }
  } else if (config.method === 'get') {
    config.params = {
      _t: Date.parse(new Date()) / 1000,
      ...config.params
    }
  }
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

Vue.prototype.$http = axios

Vue.config.productionTip = false


// 时间格式过滤器 padStart 不足两位补 0
Vue.filter('dateFormat',function(originVal){
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth()+1+'').padStart(2,'0')
  const d = (dt.getDate()+'').padStart(2,'0')
  const hh = (dt.getHours()+'').padStart(2,'0')
  const mm = (dt.getMinutes()+'').padStart(2,'0')
  const ss = (dt.getSeconds()+'').padStart(2,'0')
  return `${y}-${m}-${d}-${hh}:${mm}:${ss}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
