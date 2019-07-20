import * as types from './mutation-type.js';
import { login, logout, queryUser } from '@/api/user'

export default {
    nameAsyn({ commit }, name) {
        commit(types.SET_NAME, name);
    },
    ageAsyn({ commit }, age) {
        commit(types.SET_AGE, age);
    },
    // 登录
    handleLogin({ commit }, { userName, password }) {
        userName = userName.trim()
        return new Promise((resolve, reject) => {
            login({
                userName,
                password
            }).then(res => {
                // 暂时注释
                // const data = JSON.parse(res.data)
                // commit('setToken', data.token)
                // setToken(data.token)
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
                // 暂时注释
                // commit('setToken', '')
                // commit('setAccess', [])
                // setToken('')
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
    getUserInfo({commit}) {
        return new Promise((resolve, reject) => {
            commit(types.default.SET_HAS_GET_INFO, 'sasas');
            queryUser().then(res => {
                console.log('res',res)
                const data = JSON.parse(res.data)
                if (data.state) {
                    // 暂时注释
                    // commit('setUserName', data.data.userName)
                    // commit('setUserId', data.data.userId)
                    // commit('setAccess', 'super_admin')
                    // commit('setHasGetInfo', true)
                }
                resolve(data)
            }).catch(err => {
                console.log('err',err)
                reject(err)
            })
        })
    }
};