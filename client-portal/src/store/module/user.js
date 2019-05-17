import { login, logout, queryUser, queryMessage } from '@/api/user'
import { setToken, getToken,setCompanyinfo,replaceRes } from '@/libs/util'

export default {
  state: {
    userName: '',
    userId: '',
    avatorImgPath: '',
    token: getToken(),
    access: '',
    hasGetInfo: false
  },
  mutations: {
    setAvator(state, avatorPath) {
      state.avatorImgPath = avatorPath
    },
    setUserId(state, id) {
      state.userId = id
    },
    setUserName(state, name) {
      state.userName = name
    },
    setAccess(state, access) {
      state.access = access
    },
    setToken(state, token) {
      state.token = token
      setToken(token)
    },
    setHasGetInfo(state, status) {
      state.hasGetInfo = status
    }
  },
  actions: {
    // 登录
    handleLogin({ commit }, { userName, password }) {
      userName = userName.trim()
      return new Promise((resolve, reject) => {
        login({
          userName,
          password
        }).then(res => {
          const data = JSON.parse(res.data)
          commit('setToken', data.token)
          setToken(data.token)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogOut({ state, commit }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('setToken', '')
          commit('setAccess', [])
          setToken('')
          resolve()
        }).catch(err => {
          reject(err)
        })
        // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        // commit('setToken', '')
        // commit('setAccess', [])
        // resolve()
      })
    },
    // 获取用户相关信息
    getUserInfo({ state, commit }) {
      return new Promise((resolve, reject) => {
        queryUser().then(res => {
          const data = JSON.parse(replaceRes(res.data))
          let param = {};
          param.userId = data.data.userId;
          queryMessage(param).then(res => {
            let data = JSON.parse(replaceRes(res.data))
            if(data.code=='200') {
              // 存储企业信息
              setCompanyinfo(data.data)
            }
            
          }).catch(err => {
            reject(err)
          })
          commit('setAvator', data.data.avator)
          commit('setUserName', data.data.userName)
          commit('setUserId', data.data.userId)
          commit('setAccess', 'super_admin')
          commit('setHasGetInfo', true)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
