import Vue from 'vue';
import Router from 'vue-router';
import routes from './rouer-components';
import store from '@/store';
import { setStore, getStore } from '@/common/js/util'

Vue.use(Router);
let router = new Router({
  mode: 'hash',
  routes
});

const LOGIN_PAGE_NAME = 'login';

router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start();
  const token = getStore('token');
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = '';
  }
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
      name: 'home' // 跳转到home页
    })
  } else {
    // 加载用户信息
    store.dispatch('getUserInfo').then(user => {
      next({ ...to })
    }).catch(() => {
      setStore('token','')
      next({ name: LOGIN_PAGE_NAME })
    })
  }
})


router.afterEach(to => {
  // iView.LoadingBar.finish();
  window.scrollTo(0, 0);
})
export default router;
