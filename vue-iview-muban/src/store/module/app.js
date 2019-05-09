import { getBreadCrumbList, setTagNavListInLocalstorage, getMenuByRouter, getTagNavListFromLocalstorage, getHomeRoute, routeHasExist,backendMenusToRouters } from '@/libs/util'
import { testPessiom } from '@/api/user'
import { getMenu } from '@/api/user'
import routers from '@/router/routers'
import config from '@/config'
import {getUserMenu} from "../../libs/util";
const { homeName } = config
export default {
  state: {
    tagNavList: [],
    homeRoute: getHomeRoute(routers, homeName),
    local: '',
    routers: [],
    hasGetRouter: false
  },
  getters: {
    menuList: (state, getters, rootState) => getMenuByRouter(state.routers, rootState.user.access),
    // menuList: (state, getters, rootState) => getMenuByRouter(routers, rootState.user.access),
  },
  mutations: {
    setBreadCrumb (state, route) {
      state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
    },
    setTagNavList (state, list) {
      let tagList = []
      if (list) {
        tagList = [...list]
      } else tagList = getTagNavListFromLocalstorage() || []
      if (tagList[0] && tagList[0].name !== homeName) tagList.shift()
      let homeTagIndex = tagList.findIndex(item => item.name === homeName)
      if (homeTagIndex > 0) {
        let homeTag = tagList.splice(homeTagIndex, 1)[0]
        tagList.unshift(homeTag)
      }
      state.tagNavList = tagList
      setTagNavListInLocalstorage([...tagList])
    },
    addTag (state, { route, type = 'unshift' }) {
      if (!routeHasExist(state.tagNavList, route)) {
        if (type === 'push') state.tagNavList.push(route)
        else {
          if (route.name === 'home') state.tagNavList.unshift(route)
          else state.tagNavList.splice(1, 0, route)
        }
        setTagNavListInLocalstorage([...state.tagNavList])
      }
    },
    setLocal (state, lang) {
      state.local = lang
    },
    setRouters (state, routers) {
      state.routers = routers
    },
    setHasGetRouter (state, status) {
      state.hasGetRouter = status
    }
  },
  actions: {
    getRouters ({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          getMenu().then(res => {
            var data1 = JSON.parse(res.data)
            console.log("后台路由数据")
            console.log(getUserMenu(data1.data))
            let routers = backendMenusToRouters(getUserMenu(data1.data))
            console.log(routers)
            commit('setRouters', routers)
            commit('setHasGetRouter', true)
            resolve(routers)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
