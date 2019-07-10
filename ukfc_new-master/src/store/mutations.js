import types from './mutation-types';
import {isEmptyObject} from "./unit";

export default {
  // 设置用户信息
  [types.set_userInfo](state, userInfo) {
    state.userInfo = userInfo;
  },
  // 设置当前语言
  [types.set_lang](state, lang) {
    state.lang = lang;
    lang && lang.code ? window.localStorage.setItem("lang", JSON.stringify(lang)) : window.localStorage.removeItem("lang");
  },
  // 设置所有语言
  [types.set_langs](state, langs) {
    state.langs = langs;
    langs.length > 0 ? window.localStorage.setItem('langs', JSON.stringify(langs)) : window.localStorage.removeItem('langs');
  },
  // 设置token过期时间
  [types.set_expireTime](state, expireTime){
    state.expireTime = expireTime;
    expireTime ? window.localStorage.setItem("expireTime", expireTime) : window.localStorage.removeItem("expireTime");
  },
  // 设置最近获取/刷新token时间
  [types.set_lastUpdateTime](state, lastUpdateTime){
    state.lastUpdateTime = lastUpdateTime;
    lastUpdateTime ? window.localStorage.setItem("lastUpdateTime", lastUpdateTime) : window.localStorage.removeItem("lastUpdateTime");
  },
  // 设置token
  [types.set_token](state, token){
    state.token = token;
    token ? window.localStorage.setItem("token", token) : window.localStorage.removeItem("token");
  },
  // 设置币种列表
  [types.set_coinList](state, coinList){
    state.coinList = coinList;
  },
  // 设置会员级别列表(投资级别)
  [types.set_userVipList](state, userVipList){
    state.userVipList = userVipList;
  },
  // 设置法币列表
  [types.set_currencyList](state, currencyList){
    state.currencyList = currencyList;
    currencyList.length > 0 ? localStorage.setItem('currencyList', JSON.stringify(currencyList)) : localStorage.removeItem('currencyList');
  },
  // 设置期货列表
  [types.set_futuresList](state, futuresList){
    state.futuresList = futuresList;
  },
  // 设置账户余额
  [types.set_accountBalance](state, accountBalance){
    state.accountBalance = accountBalance;
  },
  // 设置用户未读消息数量
  [types.set_unreadMessageCount](state, unreadMessageCount){
    state.unreadMessageCount = unreadMessageCount;
  }
}
