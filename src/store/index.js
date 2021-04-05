import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

// const actions = {}
// const mutations = {
//     handleUserName: (state, username) => {
//         state.username = username
//             // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
//         localStorage.setItem('username', username)
//     }
// }
// const state = {
//     username: '' || localStorage.getItem('username')
// }
// // getters 只会依赖 state 中的成员去更新
// const getters = {
//     userName: (state) => state.username
// }

// const store = new Vuex.Store({
//     actions,
//     mutations,
//     state,
//     getters
// })
// export { store }

// export default new Vuex.Store({
//     state: {
//         loginUserInfo: '',
//         // 保存token
//         token: '',
//         // 用户基本信息
//         profile: {
//             nickName: '',
//             avatarUrl: '',
//             userId: '',
//             backgroundUrl: '',
//             level: '',
//             listenSongs: ''
//         },

//     },
//     getters: {
//         loginUserInfo: state => {
//             if (!state.loginUserInfo) {
//                 console.log("state中loginUserInfo为空",state.loginUserInfo);
//                 return JSON.parse(localStorage.getItem('loginUserIfo'))
//             }
//             console.log('state中loginUserInfo不为空',state.loginUserInfo);
//             return state.loginUserInfo
//         }
//     },
//     mutations: {
//         setUserInfo: (state, userInfo) => {
//             // 获取登录用户信息
//             state.loginUserInfo = userInfo
//             // sessionStorage只能存储字符串类型
//             // 因此当需要保存object类型的数据到sessionStorage中,先徐璈进行序列化
//             localStorage.setItem("loginUserInfo",JSON.stringify(userInfo))
//         },
//         // 将token保存至localStorge
//         setToken(state, token) {
//             state.token = token
//             window.localStorage.setItem('token', state.token)
//         },
        
//     },
//     actions: {

//     },
//     modules: {

//     }
// })


export default new Vuex.Store({
    state:{
        // 先去localStorage中获取数据
        userInfo:JSON.parse(localStorage.getItem("userInfo"))||{}
    },
    mutations:{
        setUserInfo:(state,userInfo)=>{
            // 将传递的数据先保存到localStorage中
            localStorage.setItem('userInfo',JSON.stringify(userInfo))
            // 修改state中的状态
            state.userInfo = userInfo
        }
    }
})