import axios from 'axios';
import store from '../../store';
import router from '../../router/router';
import {Notification} from 'element-ui';
import {isLogin, refreshToken} from "../../router/accountUnit";

const baseApi = `${process.env.VUE_APP_BASE_API}`;
const request = axios.create({
  baseURL: baseApi,
  timeout: 15000,
});
// notification最后一次显示的时间，为防止短时间内过多出现
let lastNotificationShowtime;
let notificationDuration = 4500;
let refreshTokenUrl = '/refreshToken';

// 请求拦截
request.interceptors.request.use(config => {
  //console.log('请求', config)
  // 登录了才需要带token
  if (isLogin()) {
    let expireTime = store.getters.get_expireTime;
    let lastUpdateTime = store.getters.get_lastUpdateTime;
    let activeTime = new Date().getTime() / 1000 - lastUpdateTime;
    // 用户登录还未过期
    if (activeTime < expireTime) {
      // 当token快过期时再去刷新一遍token，保证用户不会掉线
      if (activeTime >= (expireTime / 5 * 4)) {
        // 过滤掉刷新token接口，否则会进入死循环
        if(!new RegExp(refreshTokenUrl).test(config.url)){
          refreshToken(request);
        }
      }
    }
    if (store.getters.get_token) {
      config.headers['Authorization'] = store.getters.get_token;
    }
  }
  config.headers['lang'] = store.getters.get_lang.code || 'zh_CN';
  return config;
}, error => {
  Promise.reject(error);
});

// 响应拦截
request.interceptors.response.use(response => {
  let data = response.data;
  let errcode = data.errcode;
  if (typeof errcode !== 'undefined' && errcode !== 0) {
    let time = new Date().getTime();
    // 防止短时间内出现多个notification
    if (!lastNotificationShowtime || (time - notificationDuration) >= lastNotificationShowtime) {
      Notification.error({
        title: '错误提示', // 错误提示
        message: data.errmsg,
        offset: 30,
        duration: notificationDuration
      });
      lastNotificationShowtime = time;
    }
    /* 41001=登录Token缺失、41002=登录Token无效、41003=权限不足。返回这些错误码都当未登录处理 */
    if(errcode === 41001 || errcode === 41002 || errcode === 41003){
      router.push({name: 'login'});
      return Promise.reject(data);
    }
    return Promise.reject(data);
  }

  //console.log(response);
  return data;
}, error => {
  Promise.reject(error);
});

export {request};
