import Vue from 'vue';
import Router from 'vue-router';
import routes from './router-components';
import store from '../store';
import jump from 'jump.js';
import {isLogin, logout} from "./accountUnit";

Vue.use(Router);

const router = new Router({
  routes
});
// 用户登录后禁止跳转的页面
const jumpForbiddenLogged = {
  'login': true,
  'regist': true,
  'forgetPwd': true
};


router.beforeEach((to, from, next) => {
  console.log('isLogin', isLogin())
  if (to.meta.requireAuth) {
    if(isLogin()){
      next();
     /*
     模拟退出
      setTimeout(() => {
        logout(() =>{
          router.push({name: 'login'});
        });
        console.log('退出了');
      }, 3000);*/
    }else{
      next({
        name: "login",
        // 将跳转的路由path作为参数，登录成功后跳转到该路由
        query: {redirect: to.fullPath}
      });
    }
  }else{
    if (isLogin()) {
      // 如果用户已经登陆了则不允许再调转到禁止跳转的页面
      if (to.name in jumpForbiddenLogged) {
        next({
          name: 'walletHome',
        });
      } else {
        next();
      }
    } else {
      next();
    }
  }
});

router.afterEach((to, from) => {
  // 平滑滚动滚条
  jump('body', {
    duration: 100,
    offset: 0
  });
});

export default router;
