import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import { getToken, canTurnTo, setToke } from '@/libs/util'

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})
const LOGIN_PAGE_NAME = 'login'

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  const token = getToken()
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: this.$config.homeName // 跳转到home页
    })
  } else {
    const turnTo = (to, access, next) => {
      if (canTurnTo(to.name, access, store.state.app.routers.concat(routes))) {
        next() // 有权限，可访问
      }
      else {
        next({
          name: LOGIN_PAGE_NAME // 跳转到登录页
        }) // 无权限，重定向到401页面
      }
    }
    // 修改这部分代码
    if (store.state.user.hasGetInfo && store.state.app.hasGetRouter) {
      turnTo(to, store.state.user.access, next)
    } else {
      // 加载用户信息
      store.dispatch('getUserInfo').then(user => {
        // 加载用户菜单
        store.dispatch('getRouters').then(routers => {
          // commonRoutes需要追加到路由解析最后的404，把原先的routers.js中的404删掉即可
          router.addRoutes(routers.concat([
            {
              path: '*',
              name: 'error_404',
              meta: {
                hideInMenu: true
              },
              component: () => import('@/view/error-page/404.vue')
            }
          ]))
          next({ ...to })
        })
      }).catch(() => {
        setToken('')
        next({ name: LOGIN_PAGE_NAME })
      })
    }
  }
})
router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
