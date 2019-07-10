
export default {
  // 获取用户信息
  get_userInfo(state){
    return state.userInfo;
  },
  // 获取当前语言
  get_lang(state){
    let lang = state.lang;
    if(lang && !lang.code){
      lang = window.localStorage.getItem("lang");
      if(lang){
        lang = JSON.parse(lang);
      }else{
        lang = {};
      }
    }
    return lang;
  },
  // 获取所有语言
  get_langs(state){
    let langs = state.langs;
    if(langs.length === 0){
      langs = window.localStorage.getItem('langs');
      if(langs){
        langs = JSON.parse(langs);
      }else{
        langs = [];
      }
    }
    return langs;
  },
  // 获取过期时间
  get_expireTime(state){
    return state.expireTime || window.localStorage.getItem("expireTime");
  },
  // 获取最近获取/刷新token时间
  get_lastUpdateTime(state){
    return state.lastUpdateTime || window.localStorage.getItem("lastUpdateTime");
  },
  // 获取token
  get_token(state){
    return state.token ? state.token : window.localStorage.getItem("token");
  },
  // 获取币种列表
  get_coinList(state){
    return state.coinList;
  },
  // 获取会员级别列表
  get_userVipList(state){
    return state.userVipList;
  },
  // 获取法币列表
  get_currencyList(state){
    let currencyList = state.currencyList;
    if(currencyList.length === 0){
      if(localStorage.getItem('currencyList')){
        currencyList = JSON.parse(localStorage.getItem('currencyList'));
      }
    }
    return currencyList;
  },
  // 获取期货列表
  get_futuresList(state){
    return state.futuresList;
  },
  // 获取账户余额
  get_accountBalance(state){
    return state.accountBalance;
  },
  // 获取用户未读消息数量
  get_unreadMessageCount(state){
    return state.unReadMessageCount;
  }
};
