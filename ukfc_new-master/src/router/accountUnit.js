import store from "../store";
import {simpleCookie} from "../common/js/simpleCookie";

/**
 * 判断用户是否登录
 * @returns {boolean}
 */
export function isLogin(){
  let token = store.getters.get_token;
  let expireTime = store.getters.get_expireTime;
  let lastUpdateTime = store.getters.get_lastUpdateTime;
  let isLogin = simpleCookie.getItem('isLogin');
  //console.log('expireTime',expireTime,lastUpdateTime,isLogin)
  if(!isLogin || !token){
    return false;
  }
  if(expireTime && lastUpdateTime){
    // 已活动时间
    let activeTime = new Date().getTime() / 1000 - lastUpdateTime;
    //console.log('已活动时间', activeTime)
    return activeTime < expireTime;
  }
}

/**
 * 退出登录
 */
export function logout(cb) {
  store.commit('set_token', '');
  store.commit('set_userInfo', {});
  store.commit('set_expireTime', '');
  store.commit('set_lastUpdateTime', '');
  simpleCookie.removeItem('isLogin', '');
  typeof cb === 'function' && cb();
}

/**
 * 刷新token
 * @param request
 * @returns {Promise<T | never>}
 */
export function refreshToken(request) {
  return request.get('/v2/w/refreshToken')
    .then(res => {
      let data = res.data;
      store.commit('set_token', data.token);
      store.commit('set_expireTime', data.expire);
      store.commit('set_lastUpdateTime', new Date().getTime() / 1000);
      console.log('刷新token', data.token);
      return res;
    })
    .catch((err) => {
      console.error('刷新token错误！', err);
    });
}
